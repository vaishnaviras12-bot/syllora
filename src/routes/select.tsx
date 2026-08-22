import React, { useState } from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useSylloraStore } from '../lib/store';
import { UNIVERSITIES, DEGREES, BRANCHES, YEARS } from '../lib/syllora-data';
import { GraduationCap, BookOpen, Layers, Calendar, ArrowRight, CheckCircle2, Sliders } from 'lucide-react';

export const Route = createFileRoute('/select')({
  component: SelectPage,
});

function SelectPage() {
  const navigate = useNavigate();
  const { profile, setProfile } = useSylloraStore();

  const [universityId, setUniversityId] = useState(profile.universityId);
  const [degreeId, setDegreeId] = useState(profile.degreeId);
  const [branchId, setBranchId] = useState(profile.branchId);
  const [yearId, setYearId] = useState(profile.yearId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile({
      universityId,
      degreeId,
      branchId,
      yearId
    });
    navigate({ to: '/dashboard' });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 py-4">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/80 text-xs font-semibold">
          <Sliders className="w-3.5 h-3.5" />
          <span>Curriculum Selection</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Select Your Academic Program</h1>
        <p className="text-sm text-slate-600">
          Syllora will customize your syllabus topics and learning analytics based on your selection.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* 1. University Selection */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 font-bold text-slate-900 text-base">
            <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span>1. University / Institution</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {UNIVERSITIES.map(univ => {
              const selected = univ.id === universityId;
              return (
                <button
                  type="button"
                  key={univ.id}
                  onClick={() => setUniversityId(univ.id)}
                  className={`flex items-start justify-between p-4 rounded-xl border text-left transition-all ${
                    selected
                      ? 'border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-500/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="space-y-1 pr-2">
                    <div className="font-bold text-sm text-slate-900">{univ.name}</div>
                    <div className="text-xs text-slate-500">{univ.location}</div>
                  </div>
                  {selected && <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Degree Selection */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 font-bold text-slate-900 text-base">
            <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
              <BookOpen className="w-5 h-5" />
            </div>
            <span>2. Degree Program</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {DEGREES.map(deg => {
              const selected = deg.id === degreeId;
              return (
                <button
                  type="button"
                  key={deg.id}
                  onClick={() => setDegreeId(deg.id)}
                  className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
                    selected
                      ? 'border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-500/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <span className="font-bold text-sm text-slate-900">{deg.name}</span>
                  {selected && <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Branch & Year Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Branch */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 font-bold text-slate-900 text-base">
              <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                <Layers className="w-5 h-5" />
              </div>
              <span>3. Department / Branch</span>
            </div>

            <div className="space-y-2">
              {BRANCHES.map(br => {
                const selected = br.id === branchId;
                return (
                  <button
                    type="button"
                    key={br.id}
                    onClick={() => setBranchId(br.id)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left text-sm transition-all ${
                      selected
                        ? 'border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-500/20 font-bold text-indigo-950'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-800'
                    }`}
                  >
                    <span>{br.name}</span>
                    {selected && <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Year */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 font-bold text-slate-900 text-base">
              <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                <Calendar className="w-5 h-5" />
              </div>
              <span>4. Academic Year</span>
            </div>

            <div className="space-y-2">
              {YEARS.map(yr => {
                const selected = yr.id === yearId;
                return (
                  <button
                    type="button"
                    key={yr.id}
                    onClick={() => setYearId(yr.id)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left text-sm transition-all ${
                      selected
                        ? 'border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-500/20 font-bold text-indigo-950'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-800'
                    }`}
                  >
                    <span>{yr.label}</span>
                    {selected && <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Submit CTA Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-base shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.01]"
          >
            <span>Continue to Dashboard</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </form>
    </div>
  );
}
