# Syllora - AI-Assisted Syllabus Coverage & Learning Intelligence

Syllora is an AI-assisted syllabus coverage and learning intelligence platform designed for university students. It bridges the gap between unstructured study notes and official university curricula by dynamically tracking topic coverage, highlighting missing concepts, and recommending target study areas for exams.

---

## 🎯 Problem Statement & Concept

Traditional exam preparation relies heavily on random notes, video playlists, and textbook chapters. Students spend hundreds of hours studying, yet enter exams without knowing:
- What percentage of their official university syllabus is actually covered.
- Which specific unit topics are missing or only partially understood.
- What high-yield topics to focus on next for maximum score impact.

**Syllora** solves this by mapping student study notes directly against their degree's official course curriculum, classifying every topic into **Covered**, **Partially Covered**, or **Missing**, and generating instant progress analytics.

---

## ✨ Core Features

1. **Academic Program Selection (`/select`)**
   - Select your University, Degree, Branch, and Academic Year to load your official course curriculum.

2. **Real-Time Syllabus Dashboard (`/dashboard`)**
   - View overall syllabus preparedness percentage gauge.
   - Live topic counters for Covered, Partially Covered, and Missing topics.
   - Subject-wise progress cards with instant drill-down.
   - Recommended focus areas for upcoming semester exams.

3. **Interactive Syllabus Detail & AI Note Analyzer (`/syllabus`)**
   - Unit-by-unit curriculum breakdown with status badges and key term tags.
   - **"Analyze My Notes" Tool**: Paste or pick sample study notes to trigger simulated client-side AI analysis that dynamically upgrades topic statuses and coverage scores.

4. **Progress Analytics & Study Roadmap (`/progress`)**
   - Subject-level progress comparison bars.
   - Topic distribution analytics.
   - Actionable 3-phase study roadmap for exam readiness.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite 6
- **Routing**: TanStack Router
- **Styling**: Tailwind CSS + Lucide Icons
- **State Management**: Persistent React Context (`SylloraStore`) + LocalStorage
- **Analysis Engine**: Client-side deterministic syllabus keyword & concept matching engine (`ai-analysis.ts`)
- **Language**: TypeScript

---

## ⚡ Running Locally

To run Syllora locally on your machine:

```bash
npm install
npm run dev
```

After launching, open the local dev URL shown in your terminal (typically `http://localhost:5173`).

---

## ℹ️ Prototype & AI Note

This project is a standalone frontend hackathon prototype. The AI syllabus analysis engine operates entirely client-side using deterministic concept and keyword matching logic (`src/lib/ai-analysis.ts`) to provide instant, offline-capable demonstration feedback without external API dependencies.
