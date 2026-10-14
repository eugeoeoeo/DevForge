import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import BottomNav from './components/BottomNav.jsx';
import HomeView from './components/HomeView.jsx';
import LessonViewer from './components/LessonViewer.jsx';
import ExamEngine from './components/ExamEngine.jsx';
import ProgressDashboard from './components/ProgressDashboard.jsx';
import { loadUserProgress, saveUserProgress } from './utils/storage.js';
import { COURSES } from './data/courses.js';

export default function App() {
  const [progress, setProgress] = useState(loadUserProgress());
  const [activeCourse, setActiveCourse] = useState(() => {
    const saved = loadUserProgress();
    return saved.activeCourse || 'webdev';
  });
  const [activeTab, setActiveTab] = useState('home');

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

  const handleSwitchCourse = (courseId) => {
    setActiveCourse(courseId);
    const updated = { ...progress, activeCourse: courseId };
    setProgress(updated);
    saveUserProgress(updated);
    // If switching to electives and currently in lessons, switch to exam
    if (courseId === 'electives' && activeTab === 'lessons') {
      setActiveTab('exam');
    }
  };

  const currentCourse = COURSES[activeCourse] || COURSES.webdev;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      {/* Top Header with Subject Switcher */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeCourse={activeCourse}
        onSwitchCourse={handleSwitchCourse}
        progress={progress}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-3 sm:px-4 md:px-6 py-4 pb-24 md:pb-8">
        {activeTab === 'home' && (
          <HomeView
            setActiveTab={setActiveTab}
            activeCourse={activeCourse}
            onSwitchCourse={handleSwitchCourse}
            progress={progress}
          />
        )}

        {activeTab === 'lessons' && currentCourse.hasLessons && (
          <LessonViewer
            progress={progress?.courses?.webdev || {}}
            onUpdateProgress={(updatedCourseData) => {
              const newProgress = {
                ...progress,
                courses: {
                  ...progress.courses,
                  webdev: { ...progress.courses.webdev, ...updatedCourseData }
                }
              };
              handleUpdateProgress(newProgress);
            }}
          />
        )}

        {activeTab === 'exam' && (
          <ExamEngine
            key={activeCourse}
            activeCourse={activeCourse}
            progress={progress}
            onExamComplete={(summary) => {
              const updated = loadUserProgress();
              setProgress(updated);
            }}
            onUpdateProgress={handleUpdateProgress}
          />
        )}

        {activeTab === 'progress' && (
          <ProgressDashboard
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            activeCourse={activeCourse}
            onSwitchCourse={handleSwitchCourse}
            setActiveTab={setActiveTab}
          />
        )}
      </main>

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeCourse={activeCourse}
        onSwitchCourse={handleSwitchCourse}
      />
    </div>
  );
}
