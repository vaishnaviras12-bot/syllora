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
