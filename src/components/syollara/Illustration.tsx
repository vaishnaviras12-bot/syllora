import React from 'react';
import { BookOpen, Sparkles, Target, Award, BrainCircuit, FileSearch } from 'lucide-react';

export const SyllabusHeroGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center p-6 bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 rounded-2xl shadow-xl text-white overflow-hidden ${className}`}>
      {/* Decorative background glow elements */}
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-md space-y-4">
        {/* Top Floating Badge */}
        <div className="flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-xl shadow-lg">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-indigo-500/80 text-white">
              <BrainCircuit className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-indigo-100">AI Syllabus Intelligence</span>
          </div>
          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 font-medium border border-emerald-400/30">
            Active Scan
          </span>
        </div>

        {/* Syllabus Progress Card Preview */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-200">Data Structures & Algorithms</span>
            <span className="text-emerald-400 font-bold">78% Covered</span>
          </div>
          <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-400 h-full rounded-full w-[78%]" />
          </div>

          <div className="grid grid-cols-3 gap-2 pt-1 text-center">
            <div className="bg-white/5 p-2 rounded-lg border border-white/10">
              <div className="text-xs text-slate-300">Covered</div>
              <div className="text-sm font-bold text-emerald-400">9 Topics</div>
            </div>
            <div className="bg-white/5 p-2 rounded-lg border border-white/10">
              <div className="text-xs text-slate-300">Partial</div>
              <div className="text-sm font-bold text-amber-400">3 Topics</div>
            </div>
            <div className="bg-white/5 p-2 rounded-lg border border-white/10">
              <div className="text-xs text-slate-300">Missing</div>
              <div className="text-sm font-bold text-rose-400">2 Topics</div>
            </div>
          </div>
        </div>

        {/* Recommended Focus Item */}
        <div className="flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-indigo-500/20 backdrop-blur-md border border-amber-400/30 p-3 rounded-xl">
          <div className="p-2 rounded-lg bg-amber-500 text-white">
            <Target className="w-4 h-4" />
          </div>
          <div className="text-xs">
            <div className="font-semibold text-amber-200">Next Recommended Focus</div>
            <div className="text-slate-300">AVL Tree Rotations & Red-Black Trees</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CoverageGauge: React.FC<{ percentage: number; size?: number }> = ({ percentage, size = 140 }) => {
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const color = percentage >= 70 ? '#10b981' : percentage >= 40 ? '#6366f1' : '#f59e0b';

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e2e8f0"
          strokeWidth="10"
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-3xl font-extrabold text-slate-900 tracking-tight">{percentage}%</span>
        <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Coverage</span>
      </div>
    </div>
  );
};
