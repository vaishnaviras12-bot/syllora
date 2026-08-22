<<<<<<< HEAD
import { Subject, Topic } from './syllora-data';

export interface AnalysisResult {
  updatedSubject: Subject;
  newlyCoveredTopics: Topic[];
  newlyPartialTopics: Topic[];
  previousCoveragePct: number;
  newCoveragePct: number;
  matchedTopicIds: string[];
  summaryText: string;
}

export function calculateSubjectCoverage(subject: Subject): {
  coveredCount: number;
  partialCount: number;
  missingCount: number;
  totalTopics: number;
  coveragePct: number;
} {
  let coveredCount = 0;
  let partialCount = 0;
  let missingCount = 0;
  let totalTopics = 0;

  for (const unit of subject.units) {
    for (const topic of unit.topics) {
      totalTopics++;
      if (topic.status === 'covered') coveredCount++;
      else if (topic.status === 'partially-covered') partialCount++;
      else missingCount++;
    }
  }

  const coveragePct = totalTopics > 0
    ? Math.round(((coveredCount * 1.0 + partialCount * 0.5) / totalTopics) * 100)
    : 0;

  return {
    coveredCount,
    partialCount,
    missingCount,
    totalTopics,
    coveragePct
  };
}

export function calculateOverallCoverage(subjects: Subject[]): {
  coveredCount: number;
  partialCount: number;
  missingCount: number;
  totalTopics: number;
  overallCoveragePct: number;
} {
  let coveredCount = 0;
  let partialCount = 0;
  let missingCount = 0;
  let totalTopics = 0;

  for (const sub of subjects) {
    const stats = calculateSubjectCoverage(sub);
    coveredCount += stats.coveredCount;
    partialCount += stats.partialCount;
    missingCount += stats.missingCount;
    totalTopics += stats.totalTopics;
  }

  const overallCoveragePct = totalTopics > 0
    ? Math.round(((coveredCount * 1.0 + partialCount * 0.5) / totalTopics) * 100)
    : 0;

  return {
    coveredCount,
    partialCount,
    missingCount,
    totalTopics,
    overallCoveragePct
  };
}

export function analyzeNotesAgainstSyllabus(
  notesText: string,
  subject: Subject
): AnalysisResult {
  const previousStats = calculateSubjectCoverage(subject);
  const normalizedText = notesText.toLowerCase();

  const newlyCoveredTopics: Topic[] = [];
  const newlyPartialTopics: Topic[] = [];
  const matchedTopicIds: string[] = [];

  // Deep clone subject to avoid direct mutation
  const updatedSubject: Subject = JSON.parse(JSON.stringify(subject));

  for (const unit of updatedSubject.units) {
    for (const topic of unit.topics) {
      // Count keyword matches
      let matchCount = 0;

      // Check main title terms
      const titleWords = topic.title.toLowerCase().split(/\s+/).filter(w => w.length > 3);
      for (const word of titleWords) {
        if (normalizedText.includes(word)) {
          matchCount += 1.5;
        }
      }

      // Check predefined keywords
      for (const kw of topic.keywords) {
        if (normalizedText.includes(kw.toLowerCase())) {
          matchCount += 1;
        }
      }

      if (matchCount > 0) {
        matchedTopicIds.push(topic.id);
        topic.lastAnalyzed = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        if (matchCount >= 2) {
          if (topic.status !== 'covered') {
            topic.status = 'covered';
            topic.summary = `Verified in uploaded notes: matched concepts (${topic.keywords.slice(0, 2).join(', ')}).`;
            newlyCoveredTopics.push(topic);
          }
        } else if (matchCount >= 0.8) {
          if (topic.status === 'missing') {
            topic.status = 'partially-covered';
            topic.summary = `Partial reference detected in uploaded notes. Practice key implementations.`;
            newlyPartialTopics.push(topic);
          }
        }
      }
    }
  }

  const newStats = calculateSubjectCoverage(updatedSubject);

  const summaryText = newlyCoveredTopics.length > 0 || newlyPartialTopics.length > 0
    ? `Syllora AI analyzed your study notes! ${newlyCoveredTopics.length} topic(s) upgraded to Covered, ${newlyPartialTopics.length} topic(s) marked as Partially Covered. Coverage increased from ${previousStats.coveragePct}% to ${newStats.coveragePct}%.`
    : `Syllora AI analyzed your notes. Found references to ${matchedTopicIds.length} existing topic(s). Overall syllabus coverage remains at ${newStats.coveragePct}%.`;

  return {
    updatedSubject,
    newlyCoveredTopics,
    newlyPartialTopics,
    previousCoveragePct: previousStats.coveragePct,
    newCoveragePct: newStats.coveragePct,
    matchedTopicIds,
    summaryText
  };
=======
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
>>>>>>> 34e7f9f8cf1629ba9848c49838794d40b2ab8410
}
