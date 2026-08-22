import React, { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useSylloraStore } from '../lib/store';
import { SAMPLE_STUDY_NOTES, Topic } from '../lib/syllora-data';
import { analyzeNotesAgainstSyllabus, calculateSubjectCoverage } from '../lib/ai-analysis';
import { StatusBadge, ProgressBar } from '../components/syollara/ui-bits';
import {
  BookOpen,
  Sparkles,
  CheckCircle2,
  FileText,
  Upload,
  RefreshCw,
  X,
  AlertCircle,
  Clock,
  Layers,
  Search,
  BookCheck,
  Zap
} from 'lucide-react';

export const Route = createFileRoute('/syllabus')({
  component: SyllabusPage,
});

function SyllabusPage() {
  const { subjects, selectedSubjectId, setSelectedSubjectId, updateSubject } = useSylloraStore();

  const currentSubject = subjects.find(s => s.id === selectedSubjectId) || subjects[0];
  const stats = calculateSubjectCoverage(currentSubject);

  // Analysis Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [notesText, setNotesText] = useState('');
  const [selectedSampleId, setSelectedSampleId] = useState('');
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSelectSample = (sampleId: string) => {
    setSelectedSampleId(sampleId);
    const sample = SAMPLE_STUDY_NOTES.find(s => s.id === sampleId);
    if (sample) {
      setNotesText(sample.content.trim());
    }
  };

  const handleRunAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notesText.trim()) return;

    setIsAnalyzing(true);
    setTimeout(() => {
      const result = analyzeNotesAgainstSyllabus(notesText, currentSubject);
      updateSubject(result.updatedSubject);
      setAnalysisResult(result);
      setIsAnalyzing(false);
    }, 600);
  };

  return (
    <div className="space-y-8 py-2">
      
      {/* Top Subject Switcher Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200/80">
        {subjects.map(sub => {
          const active = sub.id === currentSubject.id;
          const subStats = calculateSubjectCoverage(sub);
          return (
            <button
              key={sub.id}
              onClick={() => {
                setSelectedSubjectId(sub.id);
                setAnalysisResult(null);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs whitespace-nowrap transition-all ${
                active
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              <span>{sub.code}: {sub.name}</span>
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${active ? 'bg-indigo-700 text-indigo-100' : 'bg-slate-100 text-slate-600'}`}>
                {subStats.coveragePct}%
              </span>
            </button>
          );
        })}
      </div>

      {/* Subject Header Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                {currentSubject.code}
              </span>
              <span className="text-xs text-slate-500">• Semester {currentSubject.semester} ({currentSubject.credits} Credits)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {currentSubject.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl">{currentSubject.description}</p>
          </div>

          <button
            onClick={() => {
              setNotesText('');
              setSelectedSampleId('');
              setAnalysisResult(null);
              setModalOpen(true);
            }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-extrabold text-xs shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>Analyze My Notes</span>
          </button>
        </div>

        {/* Coverage stats bar */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-700 font-bold">Subject Syllabus Coverage</span>
            <span className="text-indigo-600 font-black text-sm">{stats.coveragePct}%</span>
          </div>
          <ProgressBar value={stats.coveragePct} size="lg" />

          <div className="flex flex-wrap items-center gap-4 text-xs pt-1 font-semibold text-slate-600">
            <span className="flex items-center gap-1 text-emerald-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              {stats.coveredCount} Covered
            </span>
            <span className="flex items-center gap-1 text-amber-700">
              <Clock className="w-4 h-4 text-amber-600" />
              {stats.partialCount} Partially Covered
            </span>
            <span className="flex items-center gap-1 text-rose-700">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              {stats.missingCount} Missing
            </span>
          </div>
        </div>
      </div>

      {/* Analysis Result Notification Banner (If just ran) */}
      {analysisResult && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-950 p-5 rounded-2xl shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-extrabold text-sm text-emerald-800">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Syllora AI Analysis Completed!</span>
            </div>
            <button onClick={() => setAnalysisResult(null)} className="text-emerald-700 hover:text-emerald-900 text-xs font-bold">
              Dismiss
            </button>
          </div>
          <p className="text-xs text-emerald-800 leading-relaxed">{analysisResult.summaryText}</p>
          
          {analysisResult.newlyCoveredTopics.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-[10px] font-bold uppercase text-emerald-900">Upgraded to Covered:</span>
              {analysisResult.newlyCoveredTopics.map((t: Topic) => (
                <span key={t.id} className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-300">
                  {t.title}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Syllabus Units Breakdown */}
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-600" />
          <span>Curriculum Units & Topics ({currentSubject.units.length} Units)</span>
        </h2>

        <div className="space-y-6">
          {currentSubject.units.map(unit => (
            <div key={unit.id} className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-4">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 font-extrabold text-xs border border-indigo-200/80">
                    Unit {unit.unitNumber}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{unit.title}</h3>
                </div>
                <span className="text-xs font-semibold text-slate-500">
                  {unit.topics.filter(t => t.status === 'covered').length} / {unit.topics.length} Covered
                </span>
              </div>

              {/* Topics Grid */}
              <div className="grid grid-cols-1 gap-3">
                {unit.topics.map(topic => (
                  <div
                    key={topic.id}
                    className={`p-4 rounded-xl border transition-all ${
                      topic.status === 'covered'
                        ? 'bg-emerald-50/30 border-emerald-200/70'
                        : topic.status === 'partially-covered'
                        ? 'bg-amber-50/30 border-amber-200/70'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-slate-900">{topic.title}</span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-200/80 text-slate-700">
                            {topic.difficulty}
                          </span>
                        </div>
                        {topic.summary && (
                          <p className="text-xs text-slate-600">{topic.summary}</p>
                        )}
                      </div>

                      <div className="shrink-0">
                        <StatusBadge status={topic.status} size="md" />
                      </div>
                    </div>

                    {/* Keywords chip list */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-3">
                      <span className="text-[10px] font-semibold text-slate-400">Keywords:</span>
                      {topic.keywords.map((kw, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-white text-slate-600 border border-slate-200/80 font-mono"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Analyze Notes Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full p-6 shadow-2xl space-y-6 my-8">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">Syllora AI Notes Analyzer</h3>
                  <p className="text-xs text-slate-500">Analyze study notes for {currentSubject.name}</p>
                </div>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Sample Notes Picker */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>Demo Quick-Load Sample Study Notes:</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {SAMPLE_STUDY_NOTES.map(sample => (
                  <button
                    type="button"
                    key={sample.id}
                    onClick={() => handleSelectSample(sample.id)}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                      selectedSampleId === sample.id
                        ? 'border-indigo-600 bg-indigo-50 font-bold text-indigo-950 ring-2 ring-indigo-500/20'
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="truncate font-semibold">{sample.title}</div>
                    <div className="text-[10px] text-slate-500">Click to insert</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Textarea Form */}
            <form onSubmit={handleRunAnalysis} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Paste or Edit Your Study Notes:</label>
                <textarea
                  rows={8}
                  value={notesText}
                  onChange={e => setNotesText(e.target.value)}
                  placeholder="Paste your lecture notes, textbook summary, or flashcard text here... (e.g., 'In binary search trees, left child is smaller than root. Rotations in AVL trees...')"
                  className="w-full p-3.5 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-xs font-mono text-slate-800 focus:outline-none"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isAnalyzing || !notesText.trim()}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-lg shadow-indigo-500/25 transition-all disabled:opacity-50"
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Analyzing Notes...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Run AI Analysis</span>
                    </>
                  )}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}
