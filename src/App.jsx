import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import BottomNav from './components/BottomNav.jsx';
import HomeView from './components/HomeView.jsx';
import LessonViewer from './components/LessonViewer.jsx';
import ExamEngine from './components/ExamEngine.jsx';
import ProgressDashboard from './components/ProgressDashboard.jsx';
import { loadUserProgress, saveUserProgress } from './utils/storage.js';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [progress, setProgress] = useState(loadUserProgress());

  useEffect(() => {
    const handleStorageChange = () => {
      setProgress(loadUserProgress());
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleUpdateProgress = (updated) => {
    setProgress(updated);
    saveUserProgress(updated);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        progress={progress}
      />

      {/* Main Container - with bottom padding for mobile navigation bar */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-3 sm:px-4 md:px-6 py-4 pb-24 md:pb-8">
        {activeTab === 'home' && (
          <HomeView
            setActiveTab={setActiveTab}
            progress={progress}
          />
        )}

        {activeTab === 'lessons' && (
          <LessonViewer
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
          />
        )}

        {activeTab === 'exam' && (
          <ExamEngine
            progress={progress}
            onExamComplete={handleUpdateProgress}
            onUpdateProgress={handleUpdateProgress}
          />
        )}

        {activeTab === 'progress' && (
          <ProgressDashboard
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            setActiveTab={setActiveTab}
          />
        )}
      </main>

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}
