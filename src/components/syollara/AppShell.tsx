import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useSyllora } from "@/lib/store";
import { universities } from "@/lib/syllora-data";

const nav = [
  { to: "/dashboard", label: "Home" },
  { to: "/syllabus", label: "My Syllabus" },
  { to: "/resources", label: "Resources" },
  { to: "/tutor", label: "AI Tutor" },
  { to: "/library", label: "My Library" },
  { to: "/progress", label: "Progress" },
];

const profileNav = [
  { to: "/creator", label: "Creator Dashboard" },
  { to: "/creator/resources", label: "My Resources" },
  { to: "/creator/earnings", label: "Earnings" },
];

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2.5", className)}>
      <span className="flex h-8 w-8 items-center justify-center rounded-[0.7rem] bg-lavender-soft">
        <span className="h-3 w-3 rounded-[0.3rem] bg-lavender" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight">Syllora</span>
    </Link>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const { enrollment } = useSyllora();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const uni = universities.find((u) => u.id === enrollment.universityId);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
          <Logo />
          <nav className="ml-4 hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) => {
              const active =
                item.to === "/dashboard"
                  ? pathname === "/dashboard"
                  : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground",
                    active && "bg-secondary text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <span className="hidden rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-muted-foreground md:inline">
              {uni?.short} · {enrollment.year}
            </span>
            <div className="relative">
              <button
                onClick={() => setMenu((v) => !v)}
                aria-expanded={menu}
                aria-haspopup="menu"
                className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-2.5 py-2 text-sm font-medium transition hover:bg-secondary"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-peach-soft text-xs font-semibold">
                  V
                </span>
                <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="sr-only">Profile menu</span>
              </button>
              {menu ? (
                <div
                  role="menu"
                  className="absolute right-0 top-12 w-52 overflow-hidden rounded-xl border border-border bg-card p-1.5 shadow-lift"
                >
                  {profileNav.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      role="menuitem"
                      onClick={() => setMenu(false)}
                      className="block rounded-lg px-3 py-2 text-sm transition hover:bg-secondary"
                    >
                      {p.label}
                    </Link>
                  ))}
                  <Link
                    to="/select"
                    onClick={() => setMenu(false)}
                    role="menuitem"
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-secondary"
                  >
                    Change university
                  </Link>
                </div>
              ) : null}
            </div>
            <button
              className="rounded-xl border border-border bg-card p-2 lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <Menu className="h-4 w-4" /> : <X className="hidden h-4 w-4" />}
              {open ? null : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {open ? (
          <nav className="border-t border-border bg-card px-4 py-3 lg:hidden" aria-label="Mobile">
            <div className="grid gap-1">
              {[...nav, ...profileNav].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        ) : null}
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">{children}</main>
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>Syllora prototype · demo syllabus data, not official university material.</p>
          <Link to="/compare" className="underline underline-offset-4 hover:text-foreground">
            Why university-specific?
          </Link>
        </div>
      </footer>
    </div>
  );
}
