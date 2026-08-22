import type { Topic, TopicStatus, Unit } from "./syllora-data";

/**
 * Prototype "AI" syllabus comparison.
 *
 * Instead of summarising the uploaded document, this compares its extracted
 * signal against the topic list of the SELECTED syllabus unit(s) and reports
 * covered / partially covered / missing topics. In production this call is
 * replaced by a model call that receives the same syllabus context object.
 */
export interface TopicVerdict {
  topicId: string;
  name: string;
  status: TopicStatus;
  note: string;
}

export interface AnalysisResult {
  coverage: number;
  covered: TopicVerdict[];
  partial: TopicVerdict[];
  missing: TopicVerdict[];
  verdicts: TopicVerdict[];
}

function hash(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

const notes: Record<TopicStatus, string[]> = {
  covered: [
    "Definition, diagram and worked example detected.",
    "Explained in depth with examples.",
    "Well covered, including edge cases.",
  ],
  partial: [
    "Mentioned, but the syllabus expects operations and complexity too.",
    "Only a definition found — no worked example.",
    "Introduced briefly; depth is below syllabus expectation.",
  ],
  missing: [
    "No matching content found in your notes.",
    "This syllabus topic is not addressed anywhere in the document.",
    "Nothing detected for this topic.",
  ],
};

/** Deterministic per-file result so demos are repeatable. */
export function analyseAgainstTopics(
  fileSignature: string,
  topics: Topic[],
  bias: "student" | "creator" = "student",
): AnalysisResult {
  const seed = hash(fileSignature);
  const verdicts: TopicVerdict[] = topics.map((topic, i) => {
    const roll = (seed + i * 2654435761) % 100;
    const threshold = bias === "creator" ? 76 : 64;
    let status: TopicStatus = "covered";
    if (roll >= threshold && roll < threshold + 16) status = "partial";
    else if (roll >= threshold + 16) status = "missing";
    return {
      topicId: topic.id,
      name: topic.name,
      status,
      note: notes[status][(seed + i) % 3] ?? "",
    };
  });

  const covered = verdicts.filter((v) => v.status === "covered");
  const partial = verdicts.filter((v) => v.status === "partial");
  const missing = verdicts.filter((v) => v.status === "missing");
  const coverage = Math.round(
    ((covered.length + partial.length * 0.5) / Math.max(verdicts.length, 1)) * 100,
  );

  return { coverage, covered, partial, missing, verdicts };
}

export function unitsTopics(units: Unit[]) {
  return units.flatMap((u) => u.topics);
}
