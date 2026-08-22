<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { useSylloraStore } from '../../lib/store';
import {
  BookOpen,
  LayoutDashboard,
  GraduationCap,
  LineChart,
  Home,
  Sliders,
  Menu,
  X,
  Sparkles,
  Layers
} from 'lucide-react';

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { getUniversity, getBranch, getYearLabel } = useSylloraStore();

  const university = getUniversity();
  const branch = getBranch();
  const year = getYearLabel().split(' ')[0]; // e.g. "3rd"

  const navItems = [
    { label: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
    { label: 'Select Program', path: '/select', icon: <Sliders className="w-4 h-4" /> },
    { label: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { label: 'My Syllabus', path: '/syllabus', icon: <BookOpen className="w-4 h-4" /> },
    { label: 'Progress', path: '/progress', icon: <LineChart className="w-4 h-4" /> },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo Brand */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-extrabold text-slate-900 tracking-tight">Syllora</span>
                  <span className="text-[10px] uppercase font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/80 px-1.5 py-0.5 rounded">
                    AI Beta
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 font-medium leading-none">Syllabus Coverage Intelligence</p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map(item => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                      active
                        ? 'bg-indigo-50 text-indigo-700 border border-indigo-100 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Student Quick Profile Badge */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/select"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-xs text-slate-700 transition-colors"
                title="Click to change program selection"
              >
                <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                <span className="font-semibold text-slate-900 truncate max-w-[140px]">{university.name}</span>
                <span className="text-slate-400">•</span>
                <span>{branch.name.split(' ')[0]}</span>
                <span className="text-slate-400">•</span>
                <span>{year} Yr</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1">
            {navItems.map(item => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-semibold ${
                    active ? 'bg-indigo-50 text-indigo-700' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.icon}
=======
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
>>>>>>> 34e7f9f8cf1629ba9848c49838794d40b2ab8410
                  {item.label}
                </Link>
              );
            })}
<<<<<<< HEAD
            <div className="pt-2">
              <Link
                to="/select"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between w-full p-2.5 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700"
              >
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-indigo-600" />
                  {university.name} ({branch.name.split(' ')[0]} - {year} Yr)
                </span>
                <span className="text-indigo-600">Change</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-slate-200/80 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">Syllora</span>
            <span>— AI-assisted syllabus coverage and learning intelligence platform</span>
          </div>
          <div>
            <span>Hackathon Prototype Demo</span>
          </div>
=======
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
>>>>>>> 34e7f9f8cf1629ba9848c49838794d40b2ab8410
        </div>
      </footer>
    </div>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> 34e7f9f8cf1629ba9848c49838794d40b2ab8410
