import React from 'react';

interface InfoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-[#111122]/80 backdrop-blur-sm border border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 transition-colors duration-300">
      <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-4 text-cyan-400">
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-2 text-white">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};