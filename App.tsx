import React, { useState } from 'react';
import MissionCountdown from './components/MissionCountdown';
import CosmosNewsFeed from './components/CosmosNewsFeed';
import PlanetComparison from './components/PlanetComparison';
import LaunchLiveStream from './components/LaunchLiveStream';
import { Menu, X, Rocket, Search } from 'lucide-react';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-space-900 text-white font-sans selection:bg-accent-cyan selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-space-900/80 backdrop-blur-lg border-b border-space-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-purple to-accent-cyan rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="font-mono text-xl font-bold tracking-widest uppercase">
                Astro<span className="text-accent-cyan">Nova</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider">Missions</a>
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider">News</a>
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider">Data Bank</a>
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider">Live</a>
            </div>

            {/* Search & CTA */}
            <div className="hidden md:flex items-center gap-4">
               <button className="p-2 text-gray-400 hover:text-white transition-colors">
                 <Search className="w-5 h-5" />
               </button>
               <button className="px-5 py-2 bg-white/10 border border-white/20 hover:bg-white/20 hover:border-accent-cyan text-white text-xs font-mono font-bold uppercase tracking-wider rounded transition-all duration-300">
                 Join Alliance
               </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-space-800 border-b border-space-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-space-700">Missions</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-space-700">News</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-space-700">Data Bank</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-space-700">Live</a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <MissionCountdown />
        <LaunchLiveStream />
        <CosmosNewsFeed />
        <PlanetComparison />
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-space-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
             <span className="font-mono text-lg font-bold tracking-widest uppercase text-white mb-2">
                Astro<span className="text-accent-purple">Nova</span>
             </span>
             <p className="text-gray-500 text-sm">Exploration is our destiny.</p>
          </div>
          
          <div className="flex gap-8 text-gray-500 text-sm font-mono uppercase tracking-wider">
            <a href="#" className="hover:text-accent-cyan transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent-cyan transition-colors">Terms</a>
            <a href="#" className="hover:text-accent-cyan transition-colors">Api</a>
            <a href="#" className="hover:text-accent-cyan transition-colors">Contact</a>
          </div>

          <div className="text-gray-600 text-xs">
            © 2024 AstroNova Corp. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
