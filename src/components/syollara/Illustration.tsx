<<<<<<< HEAD
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
=======
/**
 * Soft, matte, pastel "3D-ish" illustrations built from layered CSS + SVG.
 * Kept dependency-free and deliberately restrained — used only on the hero,
 * analysis loading states and empty states.
 */

export function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[30rem]" aria-hidden="true">
      <div className="absolute inset-6 rounded-[42%_58%_46%_54%/54%_44%_56%_46%] bg-lavender-soft blur-2xl" />
      <div className="absolute bottom-10 right-6 h-40 w-40 rounded-[46%_54%_58%_42%/48%_52%_48%_52%] bg-powder-soft blur-2xl" />

      {/* notebook */}
      <div className="float-slow absolute left-[8%] top-[16%] w-[56%]">
        <div className="rounded-[1.4rem] border border-border bg-card p-5 shadow-lift">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-peach" />
            <span className="h-2.5 w-2.5 rounded-full bg-sunny" />
            <span className="h-2.5 w-2.5 rounded-full bg-sage" />
            <span className="ml-auto text-[0.6rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Syllabus
            </span>
          </div>
          <div className="space-y-2.5">
            <div className="h-2.5 w-4/5 rounded-full bg-lavender-soft" />
            <div className="h-2.5 w-full rounded-full bg-secondary" />
            <div className="h-2.5 w-3/5 rounded-full bg-secondary" />
            <div className="h-2.5 w-11/12 rounded-full bg-powder-soft" />
            <div className="h-2.5 w-2/3 rounded-full bg-secondary" />
          </div>
        </div>
      </div>

      {/* progress ring card */}
      <div className="float-med absolute right-[4%] top-[6%] w-[38%]">
        <div className="rounded-[1.3rem] border border-border bg-card p-4 shadow-lift">
          <RingMini value={68} />
          <p className="mt-2 text-center text-[0.68rem] font-medium text-muted-foreground">
            Coverage
          </p>
        </div>
      </div>

      {/* unit chip */}
      <div className="float-fast absolute bottom-[16%] right-[8%] w-[46%]">
        <div className="rounded-[1.2rem] border border-border bg-card p-4 shadow-lift">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-lavender">
            Unit 2
          </p>
          <p className="mt-1 text-sm font-semibold">Linked Lists</p>
          <div className="mt-3 flex gap-1.5">
            <span className="h-1.5 flex-1 rounded-full bg-sage" />
            <span className="h-1.5 flex-1 rounded-full bg-sage" />
            <span className="h-1.5 flex-1 rounded-full bg-sunny" />
            <span className="h-1.5 flex-1 rounded-full bg-secondary" />
          </div>
        </div>
      </div>

      {/* pencil */}
      <div className="float-med absolute bottom-[8%] left-[10%] h-32 w-8 rotate-12">
        <div className="h-6 w-full rounded-t-full bg-peach" />
        <div className="h-20 w-full bg-sunny" />
        <div className="h-6 w-full rounded-b-md bg-lavender" />
      </div>

      {/* small orb */}
      <div className="float-slow absolute left-[2%] top-[8%] h-12 w-12 rounded-full bg-sage-soft shadow-soft" />
    </div>
  );
}

export function RingMini({ value }: { value: number }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 64 64" className="mx-auto h-16 w-16">
      <circle cx="32" cy="32" r={r} fill="none" stroke="var(--secondary)" strokeWidth="8" />
      <circle
        cx="32"
        cy="32"
        r={r}
        fill="none"
        stroke="var(--lavender)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={`${(value / 100) * c} ${c}`}
        transform="rotate(-90 32 32)"
      />
      <text
        x="32"
        y="37"
        textAnchor="middle"
        className="fill-foreground text-[0.95rem] font-semibold"
      >
        {value}
      </text>
    </svg>
  );
}

export function ProgressRing({
  value,
  size = 200,
  label = "Semester syllabus coverage",
}: {
  value: number;
  size?: number;
  label?: string;
}) {
  const stroke = 16;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} role="img" aria-label={`${label}: ${value}%`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--secondary)"
          strokeWidth={stroke}
>>>>>>> 34e7f9f8cf1629ba9848c49838794d40b2ab8410
        />
        <circle
          cx={size / 2}
          cy={size / 2}
<<<<<<< HEAD
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
=======
          r={r}
          fill="none"
          stroke="var(--lavender)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${(value / 100) * c} ${c}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: "stroke-dasharray 900ms cubic-bezier(0.22,1,0.36,1)" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-4xl font-semibold">{value}%</span>
        <span className="mt-1 max-w-[7rem] text-center text-xs text-muted-foreground">covered</span>
      </div>
    </div>
  );
}

export function AnalysingIllustration() {
  return (
    <div className="relative mx-auto h-44 w-44" aria-hidden="true">
      <div className="absolute inset-0 rounded-[44%_56%_52%_48%/50%_46%_54%_50%] bg-lavender-soft blur-xl" />
      <div className="float-med absolute left-1/2 top-1/2 h-24 w-20 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-card p-3 shadow-lift">
        <div className="space-y-2">
          <div className="h-1.5 w-full animate-pulse rounded-full bg-lavender-soft" />
          <div className="h-1.5 w-3/4 animate-pulse rounded-full bg-secondary" />
          <div className="h-1.5 w-5/6 animate-pulse rounded-full bg-powder-soft" />
          <div className="h-1.5 w-2/3 animate-pulse rounded-full bg-secondary" />
        </div>
      </div>
      <div className="float-fast absolute right-2 top-4 h-9 w-9 rounded-full bg-peach-soft shadow-soft" />
      <div className="float-slow absolute bottom-3 left-3 h-7 w-7 rounded-lg bg-sage-soft shadow-soft" />
    </div>
  );
}

export function EmptyNotebook() {
  return (
    <div className="relative mx-auto h-32 w-32" aria-hidden="true">
      <div className="absolute inset-2 rounded-[42%_58%_50%_50%/52%_48%_52%_48%] bg-sunny-soft blur-lg" />
      <div className="float-slow absolute left-1/2 top-1/2 h-20 w-16 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-border bg-card shadow-soft" />
    </div>
  );
}
>>>>>>> 34e7f9f8cf1629ba9848c49838794d40b2ab8410
