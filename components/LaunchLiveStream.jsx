import React from 'react';
import { Radio, Users, Signal } from 'lucide-react';

const LaunchLiveStream = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-space-900 to-space-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
             <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <h3 className="text-red-500 font-mono font-bold tracking-widest uppercase text-sm">Live Coverage</h3>
             </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Orbital Pad 39A Feed</h2>
            <p className="text-gray-400 mt-2">Live telemetry and visual confirmation of pre-flight operations.</p>
          </div>
          
          <div className="flex items-center gap-6 text-sm font-mono text-gray-400 border border-space-700 bg-space-900/50 p-3 rounded-lg backdrop-blur">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-accent-cyan" />
              <span>124k Watching</span>
            </div>
            <div className="flex items-center gap-2">
              <Signal className="w-4 h-4 text-green-500" />
              <span>Signal Stable</span>
            </div>
          </div>
        </div>

        <div className="relative aspect-video w-full bg-black rounded-xl overflow-hidden border border-space-700 shadow-2xl group">
          {/* Simulated Video Feed UI Overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
               <div className="bg-red-600/90 text-white text-xs font-bold px-3 py-1 rounded uppercase animate-pulse">
                 Live
               </div>
               <div className="text-right">
                 <div className="text-accent-cyan font-mono text-xs">CAM-04 [Main]</div>
                 <div className="text-white font-mono text-xl font-bold">T-Minus 72:14:00</div>
               </div>
            </div>
            
            <div className="flex justify-between items-end">
               <div className="font-mono text-xs text-gray-400">
                 <div className="flex items-center gap-2">
                   <div className="w-20 h-1 bg-space-700 rounded-full overflow-hidden">
                     <div className="h-full bg-green-500 w-3/4"></div>
                   </div>
                   <span>Bitrate: 4500kbps</span>
                 </div>
               </div>
               <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
                  <button className="p-2 bg-space-800 hover:bg-space-700 rounded-full text-white">
                    <Radio className="w-5 h-5" />
                  </button>
               </div>
            </div>
          </div>
          
          {/* Static Placeholder for Video content */}
          <img 
            src="https://picsum.photos/id/1000/1280/720" 
            alt="Live Stream Feed" 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
             <div className="w-20 h-20 rounded-full bg-accent-cyan/10 border border-accent-cyan/50 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchLiveStream;
