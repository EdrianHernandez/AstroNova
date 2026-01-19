import React from 'react';
import { PlanetData } from '../types';
import { Info } from 'lucide-react';

const planets: PlanetData[] = [
  { name: 'Mercury', gravity: '3.7 m/s²', atmosphere: 'None (Trace)', diameter: '4,879 km', dayLength: '4,222 hrs', temp: '167°C' },
  { name: 'Venus', gravity: '8.87 m/s²', atmosphere: 'CO2, N2', diameter: '12,104 km', dayLength: '2,802 hrs', temp: '464°C' },
  { name: 'Earth', gravity: '9.81 m/s²', atmosphere: 'N2, O2', diameter: '12,742 km', dayLength: '24 hrs', temp: '15°C' },
  { name: 'Mars', gravity: '3.71 m/s²', atmosphere: 'CO2, Ar', diameter: '6,779 km', dayLength: '24.6 hrs', temp: '-65°C' },
  { name: 'Jupiter', gravity: '24.79 m/s²', atmosphere: 'H2, He', diameter: '139,820 km', dayLength: '9.9 hrs', temp: '-110°C' },
  { name: 'Saturn', gravity: '10.44 m/s²', atmosphere: 'H2, He', diameter: '116,460 km', dayLength: '10.7 hrs', temp: '-140°C' },
];

const PlanetComparison: React.FC = () => {
  return (
    <section className="bg-space-900 py-20 border-y border-space-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-mono font-bold text-white mb-4">Planetary Database</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Comparative analysis of celestial bodies within the Sol system. Vital statistics for potential colonization and resource extraction.</p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-space-700 shadow-2xl bg-space-800/50 backdrop-blur-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-space-800 border-b border-space-700">
                <th className="p-6 font-mono text-xs font-bold text-accent-cyan uppercase tracking-wider sticky left-0 bg-space-800 z-10">Celestial Body</th>
                <th className="p-6 font-mono text-xs font-bold text-gray-300 uppercase tracking-wider">Gravity</th>
                <th className="p-6 font-mono text-xs font-bold text-gray-300 uppercase tracking-wider">Atmosphere</th>
                <th className="p-6 font-mono text-xs font-bold text-gray-300 uppercase tracking-wider">Diameter</th>
                <th className="p-6 font-mono text-xs font-bold text-gray-300 uppercase tracking-wider">Day Length</th>
                <th className="p-6 font-mono text-xs font-bold text-gray-300 uppercase tracking-wider">Avg Temp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-space-700">
              {planets.map((planet, index) => (
                <tr key={planet.name} className="group hover:bg-space-700/50 transition-colors duration-150">
                  <td className="p-6 font-bold text-white font-mono sticky left-0 bg-space-800/50 backdrop-blur-md group-hover:bg-space-700/80 group-hover:text-accent-cyan transition-colors border-r border-space-700/50">
                    {planet.name}
                  </td>
                  <td className="p-6 text-gray-300 font-mono text-sm">{planet.gravity}</td>
                  <td className="p-6 text-gray-300 font-mono text-sm">
                    <span className="bg-space-900 border border-space-600 px-2 py-1 rounded text-xs">{planet.atmosphere}</span>
                  </td>
                  <td className="p-6 text-gray-300 font-mono text-sm">{planet.diameter}</td>
                  <td className="p-6 text-gray-300 font-mono text-sm">{planet.dayLength}</td>
                  <td className="p-6 font-mono text-sm">
                    <span className={`${parseInt(planet.temp) > 100 ? 'text-red-400' : parseInt(planet.temp) < 0 ? 'text-blue-400' : 'text-green-400'}`}>
                      {planet.temp}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
          <Info className="w-4 h-4" />
          <p>Data sourced from Planetary Science Data System (PSDS) v4.2. Values are approximations based on equatorial measurements.</p>
        </div>
      </div>
    </section>
  );
};

export default PlanetComparison;
