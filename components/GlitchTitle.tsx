import React from 'react';

export const GlitchTitle: React.FC = () => {
  return (
    <div className="relative z-10 text-center select-none">
      <h1 className="font-cyber text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none relative">
        <span className="block text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] mix-blend-screen relative z-20">
          CYBER
        </span>
        <span className="block text-fuchsia-500 drop-shadow-[0_0_10px_rgba(232,121,249,0.8)] mix-blend-screen -mt-2 md:-mt-6 relative z-10">
          BULLYING
        </span>
      </h1>
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-t from-transparent via-blue-900/20 to-transparent blur-xl"></div>
      </div>
    </div>
  );
};