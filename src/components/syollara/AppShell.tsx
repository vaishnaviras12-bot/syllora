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
                  {item.label}
                </Link>
              );
            })}
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
        </div>
      </footer>
    </div>
  );
};
