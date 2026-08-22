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
