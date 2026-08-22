import React from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { useSylloraStore } from '../lib/store';
import { calculateOverallCoverage, calculateSubjectCoverage } from '../lib/ai-analysis';
import { ProgressBar } from '../components/syollara/ui-bits';
import { CoverageGauge } from '../components/syollara/Illustration';
import {
  LineChart,
  CheckCircle2,
  Clock,
  AlertCircle,
  TrendingUp,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Award,
  Sparkles
} from 'lucide-react';

export const Route = createFileRoute('/progress')({
  component: ProgressPage,
});

function ProgressPage() {
  const { subjects, resetData, getUniversity, getBranch, getYearLabel } = useSylloraStore();

  const university = getUniversity();
  const branch = getBranch();
  const yearLabel = getYearLabel();

  const overall = calculateOverallCoverage(subjects);

  return (
    <div className="space-y-8 py-2">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/80 text-xs font-semibold">
            <LineChart className="w-3.5 h-3.5" />
            <span>Learning Analytics</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">Syllabus Progress Analytics</h1>
          <p className="text-xs text-slate-500">
            Real-time coverage analytics for {university.name} • {branch.name} ({yearLabel})
          </p>
        </div>

        <button
          onClick={resetData}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-600 transition-colors"
          title="Reset demo data to initial state"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Demo Data</span>
        </button>
      </div>

      {/* Main Stats Summary Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
        
        <div className="lg:col-span-5 flex flex-col items-center justify-center text-center space-y-3">
          <CoverageGauge percentage={overall.overallCoveragePct} size={160} />
          <div>
            <h3 className="text-base font-extrabold text-slate-900">Overall Readiness</h3>
            <p className="text-xs text-slate-500 max-w-xs">
              {overall.overallCoveragePct >= 70
                ? 'High preparedness! Continue reviewing partial topics.'
                : overall.overallCoveragePct >= 40
                ? 'Good foundation. Focus on missing high-yield topics.'
                : 'Initial phase. Analyze more study notes to boost coverage.'}
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-500">
            Topic Distribution Across All Subjects
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-200/80 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800">Covered</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-2xl font-black text-emerald-950">{overall.coveredCount}</div>
              <div className="text-[10px] text-emerald-700 font-semibold">
                {Math.round((overall.coveredCount / overall.totalTopics) * 100)}% of total topics
              </div>
            </div>

            <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200/80 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800">Partially Covered</span>
                <Clock className="w-4 h-4 text-amber-600" />
              </div>
              <div className="text-2xl font-black text-amber-950">{overall.partialCount}</div>
              <div className="text-[10px] text-amber-700 font-semibold">
                {Math.round((overall.partialCount / overall.totalTopics) * 100)}% of total topics
              </div>
            </div>

            <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-200/80 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-800">Missing</span>
                <AlertCircle className="w-4 h-4 text-rose-600" />
              </div>
              <div className="text-2xl font-black text-rose-950">{overall.missingCount}</div>
              <div className="text-[10px] text-rose-700 font-semibold">
                {Math.round((overall.missingCount / overall.totalTopics) * 100)}% of total topics
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Subject-Wise Progress Breakdown */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            <span>Subject-Wise Progress Comparison</span>
          </h2>
        </div>

        <div className="space-y-6">
          {subjects.map(subject => {
            const stats = calculateSubjectCoverage(subject);
            return (
              <div key={subject.id} className="space-y-2 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                      {subject.code}
                    </span>
                    <span className="font-bold text-sm text-slate-900">{subject.name}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="font-semibold text-slate-600">{stats.coveredCount}/{stats.totalTopics} Topics</span>
                    <span className="font-black text-indigo-600 text-sm">{stats.coveragePct}%</span>
                  </div>
                </div>

                <ProgressBar value={stats.coveragePct} size="md" />

                <div className="flex items-center gap-4 text-[11px] font-semibold text-slate-500 pt-1">
                  <span className="text-emerald-700">{stats.coveredCount} Covered</span>
                  <span>•</span>
                  <span className="text-amber-700">{stats.partialCount} Partial</span>
                  <span>•</span>
                  <span className="text-rose-700">{stats.missingCount} Missing</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Study Action Plan & Exam Readiness Roadmap */}
      <div className="bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex items-center gap-2 text-indigo-300">
          <Sparkles className="w-5 h-5" />
          <h2 className="text-lg font-extrabold text-white">Recommended Exam Readiness Roadmap</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/15 space-y-2">
            <div className="text-xs font-bold text-indigo-300 uppercase">Phase 1: Urgent</div>
            <h3 className="text-sm font-bold text-white">Review Missing Topics</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Upload study notes or flashcards for the {overall.missingCount} missing topics to ensure no unstudied concepts exist.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/15 space-y-2">
            <div className="text-xs font-bold text-amber-300 uppercase">Phase 2: Practice</div>
            <h3 className="text-sm font-bold text-white">Strengthen Partial Topics</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Practice implementation drills for the {overall.partialCount} partially covered topics (e.g., AVL tree rotations & 2PL locking).
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/15 space-y-2">
            <div className="text-xs font-bold text-emerald-300 uppercase">Phase 3: Mastery</div>
            <h3 className="text-sm font-bold text-white">Final Exam Simulation</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Once overall coverage reaches 85%+, run full previous year question paper checks against syllabus topics.
            </p>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <Link
            to="/syllabus"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-xs shadow-md transition-all"
          >
            <span>Go to Syllabus View</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}
