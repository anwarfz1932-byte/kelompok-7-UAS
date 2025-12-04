import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { ToxicityChecker } from './components/ToxicityChecker';
import { InfoCard } from './components/InfoCard';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050510] text-slate-200 selection:bg-cyan-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050510]/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg flex items-center justify-center font-bold text-black font-cyber">
               AT
             </div>
             <span className="font-bold tracking-wider hidden sm:block">Alpha Techies</span>
          </div>
          <a 
            href="#checker" 
            className="px-4 py-2 text-sm font-semibold text-cyan-400 border border-cyan-400/30 rounded hover:bg-cyan-400/10 transition-all"
          >
            Cek Postingan
          </a>
        </div>
      </nav>

      <main>
        <Hero />

        {/* Checker Section */}
        <section id="checker" className="py-20 px-4 relative">
          <div className="container mx-auto">
            <div className="text-center mb-12">
               <h3 className="text-3xl font-bold text-white mb-2">AI Toxicity Detector</h3>
               <p className="text-slate-400">Gunakan kecerdasan buatan untuk menciptakan internet yang lebih positif.</p>
            </div>
            <ToxicityChecker />
          </div>
        </section>

        {/* Info Grid */}
        <section className="py-20 px-4 bg-[#0a0a1a]">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">Kenali & Hindari</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InfoCard 
                title="Dampak Psikologis"
                description="Korban cyberbullying sering mengalami kecemasan, depresi, hingga trauma mendalam. Kata-katamu memiliki dampak nyata."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              />
              <InfoCard 
                title="Jejak Digital"
                description="Apa yang kamu posting hari ini bisa bertahan selamanya. Jangan biarkan komentar negatif menghancurkan masa depanmu sendiri."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>}
              />
              <InfoCard 
                title="Hukum ITE"
                description="Di Indonesia, pelaku cyberbullying dapat dijerat hukum UU ITE. Bijaklah dalam menggunakan jari jemarimu."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-slate-800 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Alpha Techies. Stop Cyber Bullying Campaign.
        </p>
      </footer>
    </div>
  );
};

export default App;