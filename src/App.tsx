import React, { useState } from 'react';
import { lessons, Lesson } from './data/lessons';
import { LessonContent } from './components/LessonContent';
import { AITutor } from './components/AITutor';
import { Logo } from './components/Logo';
import { 
  Menu, 
  X, 
  Sparkles, 
  ChevronRight, 
  Home,
  Info,
  GraduationCap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentLesson, setCurrentLesson] = useState<Lesson>(lessons[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showTutor, setShowTutor] = useState(false);

  return (
    <div className="min-h-screen bg-brand-light-blue/30 flex font-sans text-zinc-900">
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className="fixed inset-y-0 left-0 z-50 w-72 bg-brand-blue border-r border-brand-blue/20 shadow-2xl lg:relative"
          >
            <div className="flex flex-col h-full">
              <div className="p-8 flex flex-col items-center border-b border-white/10">
                <Logo className="mb-4 scale-125" />
                <div className="flex flex-col items-center">
                  <span className="text-white font-black tracking-widest text-xl">SPRACHFIT</span>
                  <span className="text-brand-orange text-[10px] font-bold uppercase tracking-[0.3em]">German A1</span>
                </div>
                <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden absolute top-4 right-4 p-2 text-white/50 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-4 space-y-2">
                <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Lektionen</div>
                {lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => setCurrentLesson(lesson)}
                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-sm transition-all group relative overflow-hidden ${
                      currentLesson.id === lesson.id 
                        ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20 scale-[1.02]' 
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black transition-colors ${
                      currentLesson.id === lesson.id ? 'bg-white text-brand-orange' : 'bg-white/10 text-white/50'
                    }`}>
                      {lesson.id}
                    </span>
                    <div className="flex flex-col items-start overflow-hidden">
                      <span className="font-bold truncate w-full tracking-tight">{lesson.title}</span>
                      <span className={`text-[10px] truncate w-full font-medium ${currentLesson.id === lesson.id ? 'text-white/80' : 'text-white/40'}`}>
                        {lesson.arabicTitle}
                      </span>
                    </div>
                    {currentLesson.id === lesson.id && (
                      <motion.div 
                        layoutId="active-pill"
                        className="absolute right-0 top-0 bottom-0 w-1 bg-white rounded-l-full"
                      />
                    )}
                  </button>
                ))}
              </nav>

              <div className="p-6 border-t border-white/10">
                <div className="bg-white/5 rounded-3xl p-5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Progress</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-brand-orange transition-all duration-500" 
                      style={{ width: `${(currentLesson.id / lessons.length) * 100}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-white/40 mt-2 font-medium">
                    Lesson {currentLesson.id} of {lessons.length}
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 relative">
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-brand-blue/5 px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {!isSidebarOpen && (
              <button onClick={() => setIsSidebarOpen(true)} className="p-3 bg-brand-blue text-white rounded-2xl shadow-lg shadow-brand-blue/20 hover:scale-105 transition-transform">
                <Menu className="w-5 h-5" />
              </button>
            )}
            <div className="flex items-center gap-3 text-zinc-400 text-sm font-medium">
              <Home className="w-4 h-4" />
              <ChevronRight className="w-3 h-3 opacity-30" />
              <span className="text-brand-blue font-bold tracking-tight">Lektion {currentLesson.id}</span>
            </div>
          </div>

          <button 
            onClick={() => setShowTutor(!showTutor)}
            className={`flex items-center gap-3 px-6 py-3 rounded-2xl text-sm font-bold transition-all ${
              showTutor 
                ? 'bg-brand-blue text-white shadow-xl shadow-brand-blue/20 scale-105' 
                : 'bg-white border border-brand-blue/10 text-brand-blue hover:border-brand-blue hover:shadow-lg'
            }`}
          >
            <Sparkles className={`w-4 h-4 ${showTutor ? 'text-brand-orange animate-pulse' : 'text-brand-orange'}`} />
            <span>AI Tutor</span>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-8 py-10 lg:px-16 max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentLesson.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <LessonContent lesson={currentLesson} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating AI Tutor Panel */}
        <AnimatePresence>
          {showTutor && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="fixed bottom-8 right-8 z-50 w-[420px] max-w-[calc(100vw-64px)] shadow-[0_32px_64px_-12px_rgba(30,58,138,0.25)]"
            >
              <AITutor currentLesson={currentLesson} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
