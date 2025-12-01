import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, Globe, Users, Zap, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-secondary-500/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold">
                <span className="flex h-2 w-2 rounded-full bg-primary-600 mr-2 animate-pulse"></span>
                Top Rated Agency 2024
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Scale Your Brand <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Beyond Limits
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                We blend creativity with data-driven strategies to help ambitious businesses grow their revenue and market presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
                >
                  View Services
                </Link>
              </div>
              
              <div className="pt-8 flex items-center gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>No Lock-in Contracts</span>
                </div>
              </div>
            </div>

            <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in delay-200">
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                 <img 
                   src="https://picsum.photos/800/800?random=1" 
                   alt="Team working" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                    <p className="text-white font-bold text-xl">Marketing Excellence</p>
                    <p className="text-slate-200">Crafting stories that sell.</p>
                 </div>
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 animate-bounce delay-700 z-20 hidden md:block">
                 <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                       <BarChart2 className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                       <p className="text-slate-500 text-sm font-medium">Revenue Growth</p>
                       <p className="text-slate-900 text-2xl font-bold">+127%</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Active Clients", value: "200+", icon: Users },
                { label: "Projects Completed", value: "1.5k", icon: CheckCircle },
                { label: "Team Experts", value: "50+", icon: Zap },
                { label: "Countries Served", value: "12", icon: Globe },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="bg-primary-50 p-4 rounded-full mb-4 text-primary-600">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-4xl font-extrabold text-slate-900 mb-2">{stat.value}</h3>
                  <p className="text-slate-500 font-medium">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Features/Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Comprehensive Solutions for Digital Growth</h3>
            <p className="text-lg text-slate-600">We don't just execute; we strategize, innovate, and optimize to ensure your brand stands out in the crowded digital landscape.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "SEO Optimization",
                desc: "Rank higher on search engines and drive organic traffic with our data-backed SEO strategies.",
                img: "https://picsum.photos/600/400?random=2"
              },
              {
                title: "Social Media Marketing",
                desc: "Engage your audience and build community with compelling social content and management.",
                img: "https://picsum.photos/600/400?random=3"
              },
              {
                title: "PPC Advertising",
                desc: "Maximize ROI with precision-targeted paid campaigns across Google, Meta, and LinkedIn.",
                img: "https://picsum.photos/600/400?random=4"
              }
            ].map((feature, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img src={feature.img} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                  <p className="text-slate-600 mb-6">{feature.desc}</p>
                  <Link to="/services" className="text-primary-600 font-semibold inline-flex items-center group-hover:text-primary-700">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Join hundreds of successful brands who have trusted Lumina to elevate their digital presence.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/contact" className="px-8 py-4 bg-primary-600 text-white rounded-full font-bold text-lg hover:bg-primary-500 transition-colors shadow-lg hover:shadow-primary-500/50">
                 Get Your Free Audit
               </Link>
               <Link to="/about" className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                 Meet Our Team
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;