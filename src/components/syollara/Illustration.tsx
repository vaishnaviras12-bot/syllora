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
        />
        <circle
          cx={size / 2}
          cy={size / 2}
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
