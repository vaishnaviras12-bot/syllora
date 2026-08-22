import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  RESOURCE_PRICE,
  seedResources,
  seededCompleted,
  subjects,
  type Purchase,
  type Resource,
  type Subject,
} from "./syllora-data";

export interface Enrollment {
  universityId: string;
  degree: string;
  branch: string;
  year: string;
}

interface SylloraState {
  enrollment: Enrollment;
  setEnrollment: (e: Enrollment) => void;
  completed: string[];
  toggleTopic: (topicId: string) => void;
  isCompleted: (topicId: string) => boolean;
  resources: Resource[];
  publishResource: (r: Resource) => void;
  purchases: Purchase[];
  buy: (resourceId: string) => void;
  owns: (resourceId: string) => boolean;
  hydrated: boolean;
}

const defaultEnrollment: Enrollment = {
  universityId: "iitd",
  degree: "B.Tech",
  branch: "Computer Science and Engineering",
  year: "2nd Year",
};

const SylloraContext = createContext<SylloraState | null>(null);

const KEY = "syllora-state-v1";

export function SylloraProvider({ children }: { children: ReactNode }) {
  const [enrollment, setEnrollmentState] = useState<Enrollment>(defaultEnrollment);
  const [completed, setCompleted] = useState<string[]>(seededCompleted);
  const [resources, setResources] = useState<Resource[]>(seedResources);
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.enrollment) setEnrollmentState(parsed.enrollment);
        if (Array.isArray(parsed.completed)) setCompleted(parsed.completed);
        if (Array.isArray(parsed.purchases)) setPurchases(parsed.purchases);
        if (Array.isArray(parsed.published))
          setResources([...seedResources, ...parsed.published]);
      }
    } catch {
      /* corrupted local state is not worth breaking the app over */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(
        KEY,
        JSON.stringify({
          enrollment,
          completed,
          purchases,
          published: resources.filter((r) => r.publishedByUser),
        }),
      );
    } catch {
      /* storage may be unavailable */
    }
  }, [enrollment, completed, purchases, resources, hydrated]);

  const toggleTopic = useCallback((topicId: string) => {
    setCompleted((prev) =>
      prev.includes(topicId) ? prev.filter((t) => t !== topicId) : [...prev, topicId],
    );
  }, []);

  const value = useMemo<SylloraState>(
    () => ({
      enrollment,
      setEnrollment: setEnrollmentState,
      completed,
      toggleTopic,
      isCompleted: (id: string) => completed.includes(id),
      resources,
      publishResource: (r) => setResources((prev) => [r, ...prev]),
      purchases,
      buy: (resourceId) =>
        setPurchases((prev) =>
          prev.some((p) => p.resourceId === resourceId)
            ? prev
            : [...prev, { resourceId, price: RESOURCE_PRICE, purchasedAt: Date.now() }],
        ),
      owns: (resourceId) => purchases.some((p) => p.resourceId === resourceId),
      hydrated,
    }),
    [enrollment, completed, resources, purchases, toggleTopic, hydrated],
  );

  return <SylloraContext.Provider value={value}>{children}</SylloraContext.Provider>;
}

export function useSyllora() {
  const ctx = useContext(SylloraContext);
  if (!ctx) throw new Error("useSyllora must be used inside SylloraProvider");
  return ctx;
}

/* ---------- progress helpers ---------- */

export function unitProgress(unitTopics: { id: string }[], completed: string[]) {
  if (!unitTopics.length) return 0;
  const done = unitTopics.filter((t) => completed.includes(t.id)).length;
  return Math.round((done / unitTopics.length) * 100);
}

export function subjectProgress(subject: Subject, completed: string[]) {
  const topics = subject.units.flatMap((u) => u.topics);
  return unitProgress(topics, completed);
}

export function semesterProgress(completed: string[]) {
  const topics = subjects.flatMap((s) => s.units.flatMap((u) => u.topics));
  return unitProgress(topics, completed);
}

export function nextTopics(completed: string[], limit = 3) {
  const pending: { topicId: string; name: string; subjectId: string; unitId: string }[] = [];
  for (const s of subjects) {
    for (const u of s.units) {
      for (const t of u.topics) {
        if (!completed.includes(t.id))
          pending.push({ topicId: t.id, name: t.name, subjectId: s.id, unitId: u.id });
      }
    }
  }
  return pending.slice(0, limit);
}
