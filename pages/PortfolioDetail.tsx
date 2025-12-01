import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { portfolioProjects } from '../data/mockData';

const PortfolioDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = portfolioProjects.find(p => p.id === Number(id));

  // Redirect if project not found
  useEffect(() => {
    if (!project) {
        navigate('/portfolio');
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="relative h-[60vh] bg-slate-900 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-30 absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-20">
                <Link to="/portfolio" className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors">
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back to Portfolio
                </Link>
                <span className="block text-primary-400 font-bold uppercase tracking-wider mb-2 animate-slide-up">{project.category}</span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-slide-up delay-100">{project.title}</h1>
                <p className="text-xl text-slate-200 max-w-2xl animate-slide-up delay-200">
                    {project.description}
                </p>
            </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-24">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
                
                {/* Main Content */}
                <div className="lg:col-span-2 p-8 md:p-12 space-y-12">
                    
                    {/* Challenge */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">The Challenge</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            {project.challenge}
                        </p>
                    </section>

                    {/* Solution */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Solution</h2>
                        <p className="text-slate-600 leading-relaxed text-lg mb-6">
                            {project.solution}
                        </p>
                        <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
                            <h3 className="font-bold text-primary-800 mb-4">Technologies & Strategies</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white text-primary-600 rounded-lg text-sm font-medium shadow-sm border border-primary-100">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Results */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Results</h2>
                        <div className="grid gap-4">
                            {project.results.map((result, idx) => (
                                <div key={idx} className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700 font-medium">{result}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="bg-slate-50 p-8 md:p-12 lg:border-l border-slate-100">
                    <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wide">Project Details</h3>
                    
                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center text-slate-500 mb-2">
                                <User className="h-4 w-4 mr-2" />
                                <span className="text-sm font-medium">Client</span>
                            </div>
                            <p className="text-lg font-semibold text-slate-900">{project.client}</p>
                        </div>

                        <div>
                            <div className="flex items-center text-slate-500 mb-2">
                                <Calendar className="h-4 w-4 mr-2" />
                                <span className="text-sm font-medium">Year</span>
                            </div>
                            <p className="text-lg font-semibold text-slate-900">{project.year}</p>
                        </div>

                        <div>
                            <div className="flex items-center text-slate-500 mb-2">
                                <Tag className="h-4 w-4 mr-2" />
                                <span className="text-sm font-medium">Category</span>
                            </div>
                            <p className="text-lg font-semibold text-slate-900">{project.category}</p>
                        </div>

                        <div className="pt-8 mt-8 border-t border-slate-200">
                            <h4 className="font-bold text-slate-900 mb-4">Impact Highlight</h4>
                            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                                <p className="text-4xl font-extrabold text-primary-600 mb-2">{project.stats.value}</p>
                                <p className="text-slate-500 text-sm font-medium uppercase">{project.stats.label}</p>
                            </div>
                        </div>

                        <div className="pt-8">
                             <Link to="/contact" className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center hover:bg-slate-800 transition-colors shadow-lg">
                                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                             </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
