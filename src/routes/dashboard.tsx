import React from 'react';
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useSylloraStore } from '../lib/store';
import { calculateOverallCoverage, calculateSubjectCoverage } from '../lib/ai-analysis';
import { MetricCard, ProgressBar } from '../components/syollara/ui-bits';
import { CoverageGauge } from '../components/syollara/Illustration';
import {
  GraduationCap,
  BookOpen,
  CheckCircle2,
  Clock,
  AlertCircle,
  Sparkles,
  ArrowRight,
  Target,
  Sliders,
  Zap
} from 'lucide-react';

export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
});

function DashboardPage() {
  const navigate = useNavigate();
  const {
    subjects,
    setSelectedSubjectId,
    getUniversity,
    getBranch,
    getYearLabel,
    getDegree
  } = useSylloraStore();

  const university = getUniversity();
  const branch = getBranch();
  const yearLabel = getYearLabel();
  const degree = getDegree();

  const overall = calculateOverallCoverage(subjects);

  // Collect recommended missing topics across all subjects
  const recommendedTopics: { subjectName: string; subjectId: string; topicTitle: string; unitTitle: string; difficulty: string }[] = [];
  for (const sub of subjects) {
    for (const unit of sub.units) {
      for (const topic of unit.topics) {
        if (topic.status === 'missing' || topic.status === 'partially-covered') {
          recommendedTopics.push({
            subjectName: sub.name,
            subjectId: sub.id,
            topicTitle: topic.title,
            unitTitle: unit.title,
            difficulty: topic.difficulty
          });
        }
      }
    }
  }

  const topRecommendations = recommendedTopics.slice(0, 4);

  const handleSubjectClick = (subjectId: string) => {
    setSelectedSubjectId(subjectId);
    navigate({ to: '/syllabus' });
  };

  return (
    <div className="space-y-8 py-2">
      
      {/* Student Profile Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold">
              Current Curriculum
            </span>
            <span className="text-xs text-slate-400">• Semester 3 & 4</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {university.name}
          </h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-indigo-200">
            <span className="font-semibold">{branch.name}</span>
            <span>•</span>
            <span>{degree.name.split('(')[0]}</span>
            <span>•</span>
            <span>{yearLabel}</span>
          </div>
        </div>

        <Link
          to="/select"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-all shrink-0"
        >
          <Sliders className="w-4 h-4 text-indigo-300" />
          <span>Change Selection</span>
        </Link>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Coverage Gauge Card */}
        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center space-y-4">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Overall Syllabus Preparedness</span>
          </div>

          <CoverageGauge percentage={overall.overallCoveragePct} size={150} />

          <p className="text-xs text-slate-600 max-w-xs">
            You have covered <strong className="text-slate-900 font-bold">{overall.coveredCount}</strong> of <strong className="text-slate-900 font-bold">{overall.totalTopics}</strong> topics across your semester subjects.
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          <MetricCard
            title="Covered Topics"
            value={overall.coveredCount}
            subtitle="Fully verified in study notes"
            icon={<CheckCircle2 className="w-5 h-5 text-emerald-600" />}
            badgeColor="bg-emerald-50 text-emerald-600 border-emerald-100"
          />

          <MetricCard
            title="Partially Covered"
            value={overall.partialCount}
            subtitle="Needs practice & key revision"
            icon={<Clock className="w-5 h-5 text-amber-600" />}
            badgeColor="bg-amber-50 text-amber-600 border-amber-100"
          />

          <MetricCard
            title="Missing Topics"
            value={overall.missingCount}
            subtitle="High priority for upcoming exams"
            icon={<AlertCircle className="w-5 h-5 text-rose-600" />}
            badgeColor="bg-rose-50 text-rose-600 border-rose-100"
          />

        </div>

      </div>

      {/* Subject Progress Cards Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">Your Enrolled Subjects</h2>
            <p className="text-xs text-slate-500">Click any subject to view detailed unit breakdown & analyze study notes.</p>
          </div>
          <Link
            to="/syllabus"
            className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700"
          >
            <span>View Full Syllabus</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subjects.map(subject => {
            const stats = calculateSubjectCoverage(subject);
            return (
              <div
                key={subject.id}
                onClick={() => handleSubjectClick(subject.id)}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-all cursor-pointer space-y-4 group"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                      {subject.code}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {subject.name}
                    </h3>
                  </div>
                  <span className="text-2xl font-black text-slate-900">{stats.coveragePct}%</span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2">{subject.description}</p>

                <ProgressBar value={stats.coveragePct} size="md" />

                <div className="flex items-center justify-between pt-2 text-xs font-semibold border-t border-slate-100 text-slate-600">
                  <span className="text-emerald-700">{stats.coveredCount} Covered</span>
                  <span className="text-amber-700">{stats.partialCount} Partial</span>
                  <span className="text-rose-700">{stats.missingCount} Missing</span>
                  <span className="text-indigo-600 font-bold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5">
                    Explore <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recommended Topics To Study Next */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-slate-900">
          <div className="p-2 rounded-lg bg-amber-50 text-amber-600">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-extrabold">Recommended Focus Areas Next</h2>
            <p className="text-xs text-slate-500">Topics identified by Syllora as critical missing or partial concepts for your exams.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {topRecommendations.map((rec, i) => (
            <div
              key={i}
              onClick={() => handleSubjectClick(rec.subjectId)}
              className="flex items-start justify-between p-4 rounded-xl bg-slate-50 hover:bg-indigo-50/50 border border-slate-200 hover:border-indigo-200 cursor-pointer transition-all space-y-1"
            >
              <div className="space-y-1 pr-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase text-indigo-700 bg-indigo-100 px-1.5 py-0.5 rounded">
                    {rec.subjectName}
                  </span>
                  <span className="text-[10px] font-medium text-slate-500">{rec.difficulty}</span>
                </div>
                <div className="font-bold text-sm text-slate-900">{rec.topicTitle}</div>
                <div className="text-xs text-slate-500">{rec.unitTitle}</div>
              </div>
              <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
