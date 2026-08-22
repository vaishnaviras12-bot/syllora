# Syllora

Syllora is an AI-assisted learning platform designed to help students understand what they have learned, identify gaps against a syllabus, and organise their learning around subjects, units, and topics.

## What Syllora does

- Organises subjects into units and individual topics.
- Tracks topic-level learning progress.
- Compares learning material against selected syllabus topics.
- Classifies topics as **covered**, **partially covered**, or **missing**.
- Calculates an overall syllabus coverage score.
- Provides a foundation for future AI-powered document analysis and personalised learning recommendations.

## Current prototype

The current repository is a frontend prototype. The syllabus catalogue and progress data are demo data, and the analysis layer currently uses deterministic prototype logic so demonstrations remain repeatable.

The production version can replace this analysis layer with a document-processing and LLM pipeline without changing the core UI model.

## Tech Stack

- React
- TypeScript
- TanStack Start
- TanStack Router
- Tailwind CSS
- Vite
- React Query
- Radix UI

## Project Structure

```text
src/
├── components/      Reusable UI and Syllora-specific components
├── hooks/            React hooks
├── lib/              Data models, state, analysis and utilities
├── routes/           Application routes
├── router.tsx        Router configuration
├── server.ts         Server entry
└── styles.css        Global styles