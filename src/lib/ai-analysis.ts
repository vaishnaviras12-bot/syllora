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
}
