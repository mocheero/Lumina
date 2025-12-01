import React, { useState, useMemo } from 'react';
import { Calendar, User, Clock, ArrowRight, Search, Tag, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/mockData';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories
  const categories = useMemo(() => {
    const allCategories = blogPosts.map(post => post.category);
    return Array.from(new Set(allCategories));
  }, []);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-white pt-20 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block animate-fade-in">Insights & News</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 animate-slide-up">Marketing Intelligence</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto animate-slide-up delay-100 mb-8">
            Expert analysis, industry trends, and actionable advice to help your business grow.
          </p>

          {/* Search and Filter Section */}
          <div className="max-w-4xl mx-auto animate-slide-up delay-200 space-y-6">
            
            {/* Search Bar */}
            <div className="relative max-w-lg mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-4 border border-slate-200 rounded-full leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-500 sm:text-sm transition-shadow shadow-sm"
                placeholder="Search articles by keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  selectedCategory === null
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                All Posts
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border flex items-center ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white border-primary-600'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <Tag className="w-3 h-3 mr-2" />
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
             <div className="bg-slate-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
               <Search className="h-10 w-10 text-slate-400" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-2">No articles found</h3>
             <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
             <button 
               onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}
               className="mt-6 text-primary-600 font-medium hover:underline"
             >
               Clear all filters
             </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post, index) => (
              <article 
                key={post.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-700 shadow-sm">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-xs text-slate-500 mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-primary-600 transition-colors">
                    <Link to="#">{post.title}</Link>
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                    <div className="flex items-center text-sm font-medium text-slate-900">
                       <div className="h-6 w-6 rounded-full bg-slate-200 flex items-center justify-center mr-2 text-slate-500">
                          <User className="h-3 w-3" />
                       </div>
                       {post.author}
                    </div>
                    <Link to="#" className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center group">
                      Read Article <ArrowRight className="ml-1 h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-600 rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-white md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">Subscribe to our newsletter</h2>
                    <p className="text-slate-300">Get the latest marketing insights delivered directly to your inbox. No spam, just value.</p>
                </div>
                <div className="w-full md:w-auto flex-1 max-w-md">
                    <form className="flex flex-col sm:flex-row gap-3">
                        <input 
                          type="email" 
                          placeholder="Enter your email address" 
                          className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <button className="px-6 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-500 transition-colors">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
