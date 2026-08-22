<<<<<<< HEAD
import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Subject,
  INITIAL_SUBJECTS,
  UNIVERSITIES,
  DEGREES,
  BRANCHES,
  YEARS,
  UniversityOption,
  DegreeOption,
  BranchOption
} from './syllora-data';

export interface StudentProfile {
  universityId: string;
  degreeId: string;
  branchId: string;
  yearId: string;
}

interface SylloraContextType {
  profile: StudentProfile;
  setProfile: (profile: StudentProfile) => void;
  subjects: Subject[];
  selectedSubjectId: string;
  setSelectedSubjectId: (id: string) => void;
  updateSubject: (updatedSubject: Subject) => void;
  resetData: () => void;
  getUniversity: () => UniversityOption;
  getDegree: () => DegreeOption;
  getBranch: () => BranchOption;
  getYearLabel: () => string;
}

const DEFAULT_PROFILE: StudentProfile = {
  universityId: 'stanford',
  degreeId: 'btech',
  branchId: 'cse',
  yearId: '3'
};

const SylloraContext = createContext<SylloraContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY_PROFILE = 'syllora_student_profile_v1';
const LOCAL_STORAGE_KEY_SUBJECTS = 'syllora_subjects_v1';
const LOCAL_STORAGE_KEY_SELECTED_SUB = 'syllora_selected_subject_v1';

export const SylloraProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfileState] = useState<StudentProfile>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_PROFILE);
      return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
    } catch {
      return DEFAULT_PROFILE;
    }
  });

  const [subjects, setSubjectsState] = useState<Subject[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_SUBJECTS);
      return saved ? JSON.parse(saved) : INITIAL_SUBJECTS;
    } catch {
      return INITIAL_SUBJECTS;
    }
  });

  const [selectedSubjectId, setSelectedSubjectIdState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_SELECTED_SUB);
      return saved || 'dsa';
    } catch {
      return 'dsa';
    }
  });

  const setProfile = (newProfile: StudentProfile) => {
    setProfileState(newProfile);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_PROFILE, JSON.stringify(newProfile));
    } catch (e) {
      console.error(e);
    }
  };

  const setSelectedSubjectId = (id: string) => {
    setSelectedSubjectIdState(id);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_SELECTED_SUB, id);
    } catch (e) {
      console.error(e);
    }
  };

  const updateSubject = (updatedSubject: Subject) => {
    setSubjectsState(prev => {
      const next = prev.map(s => s.id === updatedSubject.id ? updatedSubject : s);
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY_SUBJECTS, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const resetData = () => {
    setProfileState(DEFAULT_PROFILE);
    setSubjectsState(INITIAL_SUBJECTS);
    setSelectedSubjectIdState('dsa');
    localStorage.removeItem(LOCAL_STORAGE_KEY_PROFILE);
    localStorage.removeItem(LOCAL_STORAGE_KEY_SUBJECTS);
    localStorage.removeItem(LOCAL_STORAGE_KEY_SELECTED_SUB);
  };

  const getUniversity = (): UniversityOption => UNIVERSITIES.find(u => u.id === profile.universityId) ?? UNIVERSITIES[0];
  const getDegree = (): DegreeOption => DEGREES.find(d => d.id === profile.degreeId) ?? DEGREES[0];
  const getBranch = (): BranchOption => BRANCHES.find(b => b.id === profile.branchId) ?? BRANCHES[0];
  const getYearLabel = (): string => YEARS.find(y => y.id === profile.yearId)?.label ?? YEARS[2].label;

  return (
    <SylloraContext.Provider
      value={{
        profile,
        setProfile,
        subjects,
        selectedSubjectId,
        setSelectedSubjectId,
        updateSubject,
        resetData,
        getUniversity,
        getDegree,
        getBranch,
        getYearLabel
      }}
    >
      {children}
    </SylloraContext.Provider>
  );
};

export function useSylloraStore() {
  const context = useContext(SylloraContext);
  if (!context) {
    throw new Error('useSylloraStore must be used within a SylloraProvider');
  }
  return context;
=======
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
>>>>>>> 34e7f9f8cf1629ba9848c49838794d40b2ab8410
}
