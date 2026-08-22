import React from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { SyllabusHeroGraphic } from '../components/syollara/Illustration';
import {
  Sparkles,
  CheckCircle,
  ArrowRight,
  Target,
  Brain,
  Layers,
  BookCheck,
  TrendingUp,
  GraduationCap
} from 'lucide-react';

export const Route = createFileRoute('/')({
  component: IndexPage,
});

function IndexPage() {
  return (
    <div className="space-y-16 py-4">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-Assisted Syllabus Coverage & Intelligence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Stop studying blindly. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600">
              Know your syllabus coverage.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Syllora maps your study notes and preparation directly against your university’s official curriculum. Discover what you’ve covered, what you partially understand, and exactly what to study next for your exams.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              to="/select"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02]"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-bold text-base shadow-sm transition-all"
            >
              <span>View Live Demo Dashboard</span>
            </Link>
          </div>

          {/* Trust points */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>100% University Aligned</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Instant AI Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Targeted Exam Prep</span>
            </div>
          </div>
        </div>

        {/* Hero Graphic Card */}
        <div className="lg:col-span-5">
          <SyllabusHeroGraphic />
        </div>
      </section>

      {/* The Problem & Solution Section */}
      <section className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-sm space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Students Struggle During Semester Exams
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Traditional studying relies on unstructured notes, YouTube videos, and textbook chapters. You study hard, but never truly know if you've missed crucial exam topics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
            <div className="p-3 w-fit rounded-lg bg-rose-100 text-rose-600">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Uncertain Syllabus Coverage</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Without topic-level tracking, students enter exams unaware that 30% of important unit topics were never reviewed.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
            <div className="p-3 w-fit rounded-lg bg-amber-100 text-amber-600">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Shallow Topic Comprehension</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Reading through notes gives a false sense of security. Syllora separates what you've truly mastered from partial understanding.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-indigo-50/70 border border-indigo-100 space-y-3">
            <div className="p-3 w-fit rounded-lg bg-indigo-600 text-white">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-indigo-950">Syllora Learning Intelligence</h3>
            <p className="text-xs text-indigo-900/80 leading-relaxed">
              Syllora dynamically maps your notes to syllabus units and tells you exactly what topics to prioritize next.
            </p>
          </div>
        </div>
      </section>

      {/* How Syllora Works */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How Syllora Works in 3 Steps</h2>
          <p className="text-sm text-slate-600">Simple, deterministic, and effective learning alignment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm relative">
            <div className="absolute -top-3 left-6 px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full">
              Step 1
            </div>
            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
                <GraduationCap className="w-4 h-4" />
                <span>Select Your Program</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Choose University & Branch</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pick your university, degree, branch, and current year to load your official course curriculum.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm relative">
            <div className="absolute -top-3 left-6 px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full">
              Step 2
            </div>
            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
                <BookCheck className="w-4 h-4" />
                <span>Analyze Notes</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Scan & Classify Topics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Upload or paste study notes to instantly classify topics as Covered, Partially Covered, or Missing.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm relative">
            <div className="absolute -top-3 left-6 px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full">
              Step 3
            </div>
            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>Track Progress</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Follow Targeted Recommendations</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Focus on recommended high-yield missing topics to push your syllabus coverage to 100%.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-extrabold tracking-tight">Ready to master your university syllabus?</h3>
            <p className="text-sm text-indigo-200">Start analyzing your learning coverage in less than 30 seconds.</p>
          </div>
          <Link
            to="/select"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-sm shadow-lg transition-all shrink-0"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
