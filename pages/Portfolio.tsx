import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, BarChart, Eye, TrendingUp } from 'lucide-react';
import { portfolioProjects } from '../data/mockData';

const Portfolio: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-slate-900 to-secondary-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-slide-up">Our Work</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto animate-slide-up delay-100">
            We don't just promise results; we prove them. Explore how we've helped ambitious brands transform their digital presence.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link 
                      to={`/portfolio/${project.id}`}
                      className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold flex items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-slate-100"
                    >
                      View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 uppercase tracking-wide">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase">{project.stats.label}</p>
                      <p className="text-xl font-bold text-primary-600">{project.stats.value}</p>
                    </div>
                    <div className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to be our next success story?</h2>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-full font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-primary-600/50">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Trusted By Strip */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
               <h3 className="text-2xl font-black text-slate-600">ACME Corp</h3>
               <h3 className="text-2xl font-black text-slate-600">Globex</h3>
               <h3 className="text-2xl font-black text-slate-600">Soylent</h3>
               <h3 className="text-2xl font-black text-slate-600">Initech</h3>
               <h3 className="text-2xl font-black text-slate-600">Umbrella</h3>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
