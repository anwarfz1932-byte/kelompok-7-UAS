import React, { useState } from 'react';
import { analyzeTextToxicity } from '../services/geminiService';
import { ToxicityResult } from '../types';

export const ToxicityChecker: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ToxicityResult | null>(null);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const data = await analyzeTextToxicity(input);
      setResult(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-1 relative group">
      {/* Neon Border Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-fuchsia-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative bg-[#0a0a1a] border border-slate-800 rounded-lg p-6 md:p-8 shadow-2xl">
        <h3 className="text-2xl font-cyber mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
          Saring Sebelum Sharing
        </h3>
        <p className="text-slate-400 text-center mb-6 text-sm">
          Cek apakah tulisanmu mengandung unsur bullying atau kebencian menggunakan AI.
        </p>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ketik komentar atau statusmu di sini..."
          className="w-full h-32 bg-[#151525] border border-slate-700 rounded-md p-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none mb-4"
        />

        <div className="flex justify-end">
          <button
            onClick={handleAnalyze}
            disabled={loading || !input.trim()}
            className={`
              px-6 py-2 rounded font-bold uppercase tracking-wider transition-all duration-300
              ${loading 
                ? 'bg-slate-700 text-slate-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.8)]'
              }
            `}
          >
            {loading ? 'Menganalisa...' : 'Cek Sekarang'}
          </button>
        </div>

        {result && (
          <div className={`mt-6 p-4 rounded border-l-4 animate-in fade-in slide-in-from-bottom-4 duration-500 ${
            result.isToxic 
              ? 'bg-red-900/20 border-red-500' 
              : 'bg-green-900/20 border-green-500'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`font-bold font-cyber ${result.isToxic ? 'text-red-400' : 'text-green-400'}`}>
                {result.category}
              </span>
              <span className="text-xs text-slate-500">Toxicity Score: {result.score}%</span>
            </div>
            <p className="text-slate-200 text-sm leading-relaxed">
              {result.advice}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};