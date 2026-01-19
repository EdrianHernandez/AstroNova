import React from 'react';
import { NewsArticle } from '../types';
import { ArrowRight, Star } from 'lucide-react';

const mockNews: NewsArticle[] = [
  {
    id: '1',
    title: 'James Webb Detects Water Vapor on K2-18b',
    summary: 'The latest spectral analysis confirms the presence of water molecules in the atmosphere of the habitable-zone exoplanet.',
    imageUrl: 'https://picsum.photos/id/1002/800/600',
    category: 'Discovery',
    timestamp: '2 hours ago'
  },
  {
    id: '2',
    title: 'SpaceX Starship Ready for Orbital Flight 5',
    summary: 'Engineers have completed the wet dress rehearsal. The massive booster is poised on the pad at Starbase, Texas.',
    imageUrl: 'https://picsum.photos/id/1036/800/600',
    category: 'Mission Update',
    timestamp: '5 hours ago'
  },
  {
    id: '3',
    title: 'Lunar Gateway Station Modules Assembled',
    summary: 'International partners have finalized the core structure of the new lunar space station, set to launch next year.',
    imageUrl: 'https://picsum.photos/id/1038/800/600',
    category: 'Infrastructure',
    timestamp: '1 day ago'
  },
  {
    id: '4',
    title: 'Europa Clipper Successfully Deploys Solar Arrays',
    summary: 'The spacecraft is now fully powered and communicating with the Deep Space Network on its journey to Jupiter.',
    imageUrl: 'https://picsum.photos/id/1043/800/600',
    category: 'Deep Space',
    timestamp: '2 days ago'
  },
  {
    id: '5',
    title: 'New Crater Discovered on Mars South Pole',
    summary: 'MRO imagery reveals a fresh impact site that exposes subsurface ice layers previously hidden from view.',
    imageUrl: 'https://picsum.photos/id/1015/800/600',
    category: 'Mars',
    timestamp: '2 days ago'
  },
  {
    id: '6',
    title: 'Commercial Space Station Contracts Awarded',
    summary: 'NASA selects three major aerospace companies to develop designs for post-ISS low earth orbit destinations.',
    imageUrl: 'https://picsum.photos/id/1019/800/600',
    category: 'Commercial',
    timestamp: '3 days ago'
  }
];

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
  <article className="group relative bg-space-800 border border-space-700 rounded-xl overflow-hidden hover:border-accent-cyan/50 transition-all duration-300 mission-card flex flex-col h-full">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={article.imageUrl} 
        alt={article.title} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute top-0 right-0 p-3">
        <span className="bg-black/70 backdrop-blur-sm text-accent-cyan text-xs font-mono font-bold px-2 py-1 rounded border border-accent-cyan/30 uppercase tracking-wider">
          {article.category}
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-space-900 to-transparent opacity-80"></div>
    </div>
    
    <div className="p-6 flex-1 flex flex-col relative z-10 -mt-10">
      <div className="flex items-center gap-2 mb-3 text-gray-400 text-xs font-mono">
        <Star className="w-3 h-3 text-accent-purple" />
        <span>{article.timestamp}</span>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-accent-cyan transition-colors">
        {article.title}
      </h3>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
        {article.summary}
      </p>
      
      <div className="flex items-center text-accent-cyan font-mono text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        Read Full Briefing <ArrowRight className="w-4 h-4 ml-2" />
      </div>
    </div>
  </article>
);

const CosmosNewsFeed: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-space-700 pb-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-2">Cosmos Intel Feed</h2>
          <p className="text-gray-400">Latest transmissions from deep space exploration.</p>
        </div>
        <button className="hidden md:flex items-center text-white hover:text-accent-cyan transition-colors font-mono text-sm uppercase tracking-widest mt-4 md:mt-0">
          View Archives <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cosmos-news-item">
        {mockNews.map(article => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>

      <div className="mt-8 md:hidden text-center">
         <button className="inline-flex items-center text-white hover:text-accent-cyan transition-colors font-mono text-sm uppercase tracking-widest">
          View Archives <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </section>
  );
};

export default CosmosNewsFeed;
