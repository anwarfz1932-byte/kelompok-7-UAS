import React from 'react';
import { GlitchTitle } from './GlitchTitle';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#050510]">
        {/* Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/30 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-900/30 rounded-full blur-[128px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center space-y-8 mt-20 md:mt-0">
        <div className="mb-8">
           <span className="inline-block py-1 px-3 rounded-full border border-yellow-500/30 bg-yellow-900/10 text-yellow-400 text-xs font-bold tracking-widest uppercase mb-4">
             Alpha Techies Presents
           </span>
        </div>

        <GlitchTitle />

        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
            "Posting Jangan <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic">Nge-roasting!</span>"
          </h2>
          
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Cyber bullying adalah penindasan. Bersembunyi di balik layar cantik tidak membuatnya kurang mengandung kebencian.
          </p>
        </div>

        {/* Decorative 'Screen Break' Visual */}
        <div className="mt-12 relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img 
              src="https://picsum.photos/400/400?grayscale&blur=2" 
              alt="Silhouette" 
              className="relative w-full h-full object-cover rounded-2xl border-2 border-slate-700/50 mix-blend-overlay opacity-60 mask-image-gradient"
            />
            {/* Overlaying glitch lines */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-cyan-400 shadow-[0_0_10px_#22d3ee] transform -rotate-12 translate-y-4"></div>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-fuchsia-500 shadow-[0_0_10px_#e879f9] transform -rotate-6 -translate-y-4"></div>
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-bounce text-slate-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};