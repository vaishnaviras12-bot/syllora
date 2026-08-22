<<<<<<< HEAD
import React from 'react';
import { CheckCircle2, Clock, AlertCircle, Sparkles } from 'lucide-react';

export interface StatusBadgeProps {
  status: 'covered' | 'partially-covered' | 'missing';
  size?: 'sm' | 'md' | 'lg';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5 font-medium',
    lg: 'text-sm px-3 py-1.5 gap-2 font-semibold'
  }[size];

  if (status === 'covered') {
    return (
      <span className={`inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 ${sizeClasses}`}>
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
        Covered
      </span>
    );
  }

  if (status === 'partially-covered') {
    return (
      <span className={`inline-flex items-center rounded-full bg-amber-50 text-amber-700 border border-amber-200/80 ${sizeClasses}`}>
        <Clock className="w-3.5 h-3.5 text-amber-600" />
        Partially Covered
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center rounded-full bg-rose-50 text-rose-700 border border-rose-200/80 ${sizeClasses}`}>
      <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
      Missing
    </span>
  );
};

export interface ProgressBarProps {
  value: number; // 0 - 100
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  colorClass?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  size = 'md',
  showLabel = false,
  colorClass
}) => {
  const clampedValue = Math.min(100, Math.max(0, value));

  const heightClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4'
  }[size];

  const barColor = colorClass || (
    clampedValue >= 75 ? 'bg-emerald-500' :
    clampedValue >= 45 ? 'bg-indigo-500' :
    clampedValue >= 25 ? 'bg-amber-500' : 'bg-rose-500'
  );

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-1.5">
          <span>Syllabus Coverage</span>
          <span>{clampedValue}%</span>
        </div>
      )}
      <div className={`w-full bg-slate-200/80 rounded-full overflow-hidden ${heightClasses}`}>
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${barColor}`}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
};

export interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  trend?: string;
  badgeColor?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  badgeColor = 'bg-indigo-50 text-indigo-600 border-indigo-100'
}) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{title}</span>
        <div className={`p-2.5 rounded-lg border ${badgeColor}`}>
          {icon}
        </div>
      </div>
      <div className="mt-3">
        <div className="text-3xl font-extrabold text-slate-900 tracking-tight">{value}</div>
        {subtitle && <p className="text-xs text-slate-500 mt-1">{subtitle}</p>}
      </div>
    </div>
  );
};
=======
import { Link } from "@tanstack/react-router";
import { Check, CircleAlert, X } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { TopicStatus } from "@/lib/syllora-data";
import { EmptyNotebook } from "./Illustration";

export function OfficialTag({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md bg-powder-soft px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-foreground/75",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-powder" />
      Official syllabus
    </span>
  );
}

export function DemoTag({ children = "Demo syllabus data" }: { children?: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-border px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
      {children}
    </span>
  );
}

export function AiTag({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md bg-lavender-soft px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-foreground/75",
        className,
      )}
    >
      AI-generated analysis · review recommended
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-muted-foreground">{description}</p> : null}
    </div>
  );
}

export function StatusIcon({ status }: { status: TopicStatus }) {
  if (status === "covered")
    return (
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-soft text-foreground">
        <Check className="h-3.5 w-3.5" aria-hidden="true" />
        <span className="sr-only">Covered</span>
      </span>
    );
  if (status === "partial")
    return (
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sunny-soft text-foreground">
        <CircleAlert className="h-3.5 w-3.5" aria-hidden="true" />
        <span className="sr-only">Partially covered</span>
      </span>
    );
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-peach-soft text-foreground">
      <X className="h-3.5 w-3.5" aria-hidden="true" />
      <span className="sr-only">Missing</span>
    </span>
  );
}

export function Meter({ value, tone = "lavender" }: { value: number; tone?: string }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
      <div
        className="h-full rounded-full transition-[width] duration-700 ease-out"
        style={{ width: `${value}%`, backgroundColor: `var(--${tone})` }}
      />
    </div>
  );
}

export function EmptyState({
  title,
  description,
  actionLabel,
  actionTo,
}: {
  title: string;
  description: string;
  actionLabel?: string;
  actionTo?: string;
}) {
  return (
    <div className="surface flex flex-col items-center px-6 py-12 text-center">
      <EmptyNotebook />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">{description}</p>
      {actionLabel && actionTo ? (
        <Link
          to={actionTo}
          className="mt-5 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}

export function ErrorState({
  title,
  description,
  actionLabel,
  onAction,
}: {
  title: string;
  description: string;
  actionLabel: string;
  onAction: () => void;
}) {
  return (
    <div className="surface px-6 py-10 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-peach-soft">
        <CircleAlert className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">{description}</p>
      <button
        onClick={onAction}
        className="mt-5 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
      >
        {actionLabel}
      </button>
    </div>
  );
}
>>>>>>> 34e7f9f8cf1629ba9848c49838794d40b2ab8410
