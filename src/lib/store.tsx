import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Subject,
  INITIAL_SUBJECTS,
  UNIVERSITIES,
  DEGREES,
  BRANCHES,
  YEARS,
  UniversityOption,
  DegreeOption,
  BranchOption
} from './syllora-data';

export interface StudentProfile {
  universityId: string;
  degreeId: string;
  branchId: string;
  yearId: string;
}

interface SylloraContextType {
  profile: StudentProfile;
  setProfile: (profile: StudentProfile) => void;
  subjects: Subject[];
  selectedSubjectId: string;
  setSelectedSubjectId: (id: string) => void;
  updateSubject: (updatedSubject: Subject) => void;
  resetData: () => void;
  getUniversity: () => UniversityOption;
  getDegree: () => DegreeOption;
  getBranch: () => BranchOption;
  getYearLabel: () => string;
}

const DEFAULT_PROFILE: StudentProfile = {
  universityId: 'stanford',
  degreeId: 'btech',
  branchId: 'cse',
  yearId: '3'
};

const SylloraContext = createContext<SylloraContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY_PROFILE = 'syllora_student_profile_v1';
const LOCAL_STORAGE_KEY_SUBJECTS = 'syllora_subjects_v1';
const LOCAL_STORAGE_KEY_SELECTED_SUB = 'syllora_selected_subject_v1';

export const SylloraProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfileState] = useState<StudentProfile>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_PROFILE);
      return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
    } catch {
      return DEFAULT_PROFILE;
    }
  });

  const [subjects, setSubjectsState] = useState<Subject[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_SUBJECTS);
      return saved ? JSON.parse(saved) : INITIAL_SUBJECTS;
    } catch {
      return INITIAL_SUBJECTS;
    }
  });

  const [selectedSubjectId, setSelectedSubjectIdState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_SELECTED_SUB);
      return saved || 'dsa';
    } catch {
      return 'dsa';
    }
  });

  const setProfile = (newProfile: StudentProfile) => {
    setProfileState(newProfile);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_PROFILE, JSON.stringify(newProfile));
    } catch (e) {
      console.error(e);
    }
  };

  const setSelectedSubjectId = (id: string) => {
    setSelectedSubjectIdState(id);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_SELECTED_SUB, id);
    } catch (e) {
      console.error(e);
    }
  };

  const updateSubject = (updatedSubject: Subject) => {
    setSubjectsState(prev => {
      const next = prev.map(s => s.id === updatedSubject.id ? updatedSubject : s);
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY_SUBJECTS, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const resetData = () => {
    setProfileState(DEFAULT_PROFILE);
    setSubjectsState(INITIAL_SUBJECTS);
    setSelectedSubjectIdState('dsa');
    localStorage.removeItem(LOCAL_STORAGE_KEY_PROFILE);
    localStorage.removeItem(LOCAL_STORAGE_KEY_SUBJECTS);
    localStorage.removeItem(LOCAL_STORAGE_KEY_SELECTED_SUB);
  };

  const getUniversity = (): UniversityOption => UNIVERSITIES.find(u => u.id === profile.universityId) ?? UNIVERSITIES[0];
  const getDegree = (): DegreeOption => DEGREES.find(d => d.id === profile.degreeId) ?? DEGREES[0];
  const getBranch = (): BranchOption => BRANCHES.find(b => b.id === profile.branchId) ?? BRANCHES[0];
  const getYearLabel = (): string => YEARS.find(y => y.id === profile.yearId)?.label ?? YEARS[2].label;

  return (
    <SylloraContext.Provider
      value={{
        profile,
        setProfile,
        subjects,
        selectedSubjectId,
        setSelectedSubjectId,
        updateSubject,
        resetData,
        getUniversity,
        getDegree,
        getBranch,
        getYearLabel
      }}
    >
      {children}
    </SylloraContext.Provider>
  );
};

export function useSylloraStore() {
  const context = useContext(SylloraContext);
  if (!context) {
    throw new Error('useSylloraStore must be used within a SylloraProvider');
  }
  return context;
}
