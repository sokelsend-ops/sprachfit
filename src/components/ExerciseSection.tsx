import React, { useState } from 'react';
import { Exercise } from '../data/lessons';
import { CheckCircle2, XCircle, ArrowRight, RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ExerciseSectionProps {
  exercises: Exercise[];
}

export const ExerciseSection: React.FC<ExerciseSectionProps> = ({ exercises }) => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentExercise = exercises[currentExerciseIndex];

  const handleOptionSelect = (option: string) => {
    if (showResult) return;
    setSelectedOption(option);
    const correct = option === currentExercise.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    if (correct) setScore(prev => prev + 1);
  };

  const nextExercise = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsCorrect(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
    }
  };

  const resetExercises = () => {
    setCurrentExerciseIndex(0);
    setSelectedOption(null);
    setIsCorrect(null);
    setShowResult(false);
    setScore(0);
    setIsFinished(false);
  };

  if (exercises.length === 0) return null;

  if (isFinished) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[2.5rem] p-12 border border-brand-blue/5 shadow-xl text-center space-y-6"
      >
        <div className="w-24 h-24 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-12 h-12 text-brand-orange" />
        </div>
        <h3 className="text-3xl font-black text-brand-blue">Lektion abgeschlossen!</h3>
        <p className="text-zinc-500 font-medium">Du hast {score} von {exercises.length} Aufgaben richtig gelöst.</p>
        <div className="flex justify-center gap-4 pt-4">
          <button 
            onClick={resetExercises}
            className="flex items-center gap-2 px-8 py-4 bg-brand-blue text-white rounded-2xl font-bold hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/20"
          >
            <RefreshCcw className="w-5 h-5" />
            Nochmal versuchen
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black text-brand-blue/40 uppercase tracking-widest">Aufgabe {currentExerciseIndex + 1} von {exercises.length}</span>
        </div>
        <div className="h-2 w-32 bg-brand-blue/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-brand-orange"
            initial={{ width: 0 }}
            animate={{ width: `${((currentExerciseIndex + 1) / exercises.length) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={currentExerciseIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-brand-blue/5 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
            <CheckCircle2 className="w-32 h-32 text-brand-blue" />
          </div>

          <h3 className="text-2xl font-black text-brand-blue mb-8 leading-tight">
            {currentExercise.question}
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {currentExercise.options?.map((option, i) => (
              <button
                key={i}
                onClick={() => handleOptionSelect(option)}
                disabled={showResult}
                className={`
                  group flex items-center justify-between p-6 rounded-2xl border-2 transition-all text-left font-bold
                  ${!showResult 
                    ? 'border-brand-blue/5 hover:border-brand-orange/30 hover:bg-brand-orange/5 text-brand-blue' 
                    : option === currentExercise.correctAnswer
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : option === selectedOption
                        ? 'border-red-500 bg-red-50 text-red-700'
                        : 'border-brand-blue/5 opacity-50 text-brand-blue'
                  }
                `}
              >
                <span>{option}</span>
                {showResult && option === currentExercise.correctAnswer && <CheckCircle2 className="w-6 h-6 text-green-500" />}
                {showResult && option === selectedOption && option !== currentExercise.correctAnswer && <XCircle className="w-6 h-6 text-red-500" />}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {showResult && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 flex items-center justify-between pt-8 border-t border-brand-blue/5"
              >
                <div className="flex items-center gap-3">
                  {isCorrect ? (
                    <div className="flex items-center gap-2 text-green-600 font-bold">
                      <CheckCircle2 className="w-6 h-6" />
                      <span>Richtig! Gut gemacht.</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-red-600 font-bold">
                      <XCircle className="w-6 h-6" />
                      <span>Leider falsch. Die richtige Antwort ist: {currentExercise.correctAnswer}</span>
                    </div>
                  )}
                </div>
                <button
                  onClick={nextExercise}
                  className="flex items-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-2xl font-bold hover:bg-brand-orange/90 transition-all shadow-lg shadow-brand-orange/20"
                >
                  {currentExerciseIndex === exercises.length - 1 ? 'Abschließen' : 'Nächste'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
