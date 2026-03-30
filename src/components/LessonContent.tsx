import React from 'react';
import { Lesson } from '../data/lessons';
import { BookOpen, GraduationCap, Languages, MessageSquare, CheckCircle2, PencilLine } from 'lucide-react';
import { motion } from 'motion/react';
import { ExerciseSection } from './ExerciseSection';

interface LessonContentProps {
  lesson: Lesson;
}

export const LessonContent: React.FC<LessonContentProps> = ({ lesson }) => {
  return (
    <div className="space-y-12 pb-24">
      <header className="relative">
        <div className="flex items-center gap-4 text-brand-blue/60 mb-3">
          <span className="text-xs font-black uppercase tracking-[0.3em] bg-brand-blue/5 px-3 py-1 rounded-full">Lektion {lesson.id}</span>
        </div>
        <h1 className="text-5xl font-black text-brand-blue mb-3 tracking-tight">{lesson.title}</h1>
        <p className="text-3xl font-medium text-brand-orange/80 italic">{lesson.arabicTitle}</p>
        <div className="absolute -left-8 top-0 bottom-0 w-1 bg-brand-orange rounded-full opacity-20" />
      </header>

      {/* Objectives */}
      <section id="objectives" className="bg-gradient-to-br from-brand-orange to-orange-600 rounded-[2rem] p-8 text-white shadow-xl shadow-brand-orange/20 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-110 transition-transform duration-700" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h2 className="font-bold uppercase tracking-[0.2em] text-xs">Unterrichtsidee / فكرة الدرس</h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lesson.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span className="font-medium text-sm leading-relaxed">{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Vocabulary */}
        <section id="vocabulary" className="lg:col-span-1 space-y-6">
          <div className="flex items-center gap-3 text-brand-blue border-b-2 border-brand-blue/10 pb-4">
            <div className="p-2 bg-brand-blue/5 rounded-xl">
              <Languages className="w-5 h-5" />
            </div>
            <h2 className="font-black uppercase tracking-[0.2em] text-xs">Wortschatz / المفردات</h2>
          </div>
          <div className="space-y-3">
            {lesson.vocabulary.map((vocab, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group flex justify-between items-center p-4 rounded-2xl bg-white border border-brand-blue/5 hover:border-brand-orange/30 hover:shadow-lg hover:shadow-brand-orange/5 transition-all cursor-default"
              >
                <div className="flex flex-col">
                  <span className="font-bold text-brand-blue group-hover:text-brand-orange transition-colors">{vocab.german}</span>
                  {vocab.type && <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mt-0.5">{vocab.type}</span>}
                </div>
                <span className="font-medium text-zinc-500 text-right">{vocab.arabic}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Grammar & Key Sentences */}
        <div className="lg:col-span-2 space-y-12">
          <section id="grammar" className="space-y-6">
            <div className="flex items-center gap-3 text-brand-blue border-b-2 border-brand-blue/10 pb-4">
              <div className="p-2 bg-brand-blue/5 rounded-xl">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="font-black uppercase tracking-[0.2em] text-xs">Grammatik / القواعد</h2>
            </div>
            <div className="space-y-8">
              {lesson.grammar.map((g, i) => (
                <div key={i} className="bg-white rounded-[2.5rem] p-8 border border-brand-blue/5 shadow-sm hover:shadow-xl hover:shadow-brand-blue/5 transition-all relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-brand-blue opacity-10 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-xl font-black text-brand-blue mb-3 tracking-tight">{g.title}</h3>
                  <p className="text-zinc-600 text-sm mb-6 leading-relaxed font-medium">{g.explanation}</p>
                  <div className="space-y-4">
                    {g.examples.map((ex, j) => (
                      <div key={j} className="bg-brand-light-blue/50 p-5 rounded-3xl border border-brand-blue/5 group/ex hover:bg-brand-light-blue transition-colors">
                        <p className="font-bold text-brand-blue text-lg group-hover/ex:text-brand-orange transition-colors">{ex.german}</p>
                        <p className="text-brand-blue/60 text-sm italic mt-1 font-medium">{ex.arabic}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="sentences" className="space-y-6">
            <div className="flex items-center gap-3 text-brand-blue border-b-2 border-brand-blue/10 pb-4">
              <div className="p-2 bg-brand-blue/5 rounded-xl">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h2 className="font-black uppercase tracking-[0.2em] text-xs">Wichtige Sätze / جمل أساسية</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {lesson.keySentences.map((s, i) => (
                <div key={i} className="flex justify-between items-center p-6 rounded-3xl border border-brand-blue/5 bg-white hover:border-brand-orange/20 hover:shadow-xl hover:shadow-brand-orange/5 transition-all group">
                  <span className="font-black text-brand-blue text-lg group-hover:text-brand-orange transition-colors">{s.german}</span>
                  <span className="font-bold text-zinc-400 text-sm">{s.arabic}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Exercises Section */}
          <section id="exercises" className="space-y-6">
            <div className="flex items-center gap-3 text-brand-blue border-b-2 border-brand-blue/10 pb-4">
              <div className="p-2 bg-brand-blue/5 rounded-xl">
                <PencilLine className="w-5 h-5" />
              </div>
              <h2 className="font-black uppercase tracking-[0.2em] text-xs">Übungen / التمارين</h2>
            </div>
            <ExerciseSection exercises={lesson.exercises} />
          </section>
        </div>
      </div>
    </div>
  );
};
