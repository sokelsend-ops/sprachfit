import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { Lesson } from '../data/lessons';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface AITutorProps {
  currentLesson: Lesson;
}

export const AITutor: React.FC<AITutorProps> = ({ currentLesson }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: `Hallo! Ich bin dein Deutsch-Tutor. Wir lernen gerade Lektion ${currentLesson.id}: "${currentLesson.title}". Wie kann ich dir helfen?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const model = "gemini-2.0-flash-exp";

      const systemInstruction = `You are a helpful German language tutor for an A2 level student. 
      The student is currently studying Lesson ${currentLesson.id}: "${currentLesson.title}" (${currentLesson.arabicTitle}).
      Objectives: ${currentLesson.objectives.join(', ')}.
      Vocabulary: ${currentLesson.vocabulary.map(v => v.german).join(', ')}.
      Grammar: ${currentLesson.grammar.map(g => g.title).join(', ')}.
      
      Guidelines:
      1. Keep explanations simple and appropriate for A2 level.
      2. Use a mix of German and English/Arabic for clarity.
      3. Encourage the student to practice the grammar points from the current lesson.
      4. If they ask about vocabulary, provide examples.
      5. Be encouraging and patient.`;

      const response = await ai.models.generateContent({
        model: model,
        contents: [{ role: 'user', parts: [{ text: userMessage }] }],
        config: { systemInstruction }
      });

      const aiText = response.text || "Entschuldigung, ich habe das nicht verstanden.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("AI Tutor Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Oje, ich habe gerade technische Probleme. Bitte versuche es später noch einmal." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-[2rem] border border-brand-blue/10 shadow-2xl overflow-hidden">
      <div className="p-6 bg-brand-blue text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/10 rounded-xl">
            <Sparkles className="w-5 h-5 text-brand-orange animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-black tracking-tight text-sm uppercase">AI Deutsch Tutor</span>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Lektion {currentLesson.id}</span>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-brand-light-blue/20">
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-3 max-w-[90%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${m.role === 'user' ? 'bg-brand-orange' : 'bg-white border border-brand-blue/10'}`}>
                  {m.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-brand-blue" />}
                </div>
                <div className={`p-4 rounded-[1.5rem] text-sm leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-brand-orange text-white rounded-tr-none' : 'bg-white border border-brand-blue/5 text-zinc-800 rounded-tl-none'}`}>
                  {m.text}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-brand-blue/5 p-4 rounded-2xl rounded-tl-none shadow-sm">
              <Loader2 className="w-4 h-4 animate-spin text-brand-orange" />
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t border-brand-blue/5">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Frag etwas auf Deutsch..."
            className="w-full pl-6 pr-14 py-4 bg-brand-light-blue/30 border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-brand-blue transition-all placeholder:text-brand-blue/30"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-brand-blue text-white rounded-xl hover:bg-brand-blue/90 disabled:opacity-50 transition-all shadow-lg shadow-brand-blue/20 active:scale-95"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
