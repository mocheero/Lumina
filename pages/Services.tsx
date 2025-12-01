import React from 'react';
import { Layout, PenTool, Search, Share2, Mail, Monitor, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO & Visibility',
      description: 'Dominate search results with our technical and content-driven SEO strategies tailored for your niche.',
      features: ['Keyword Research', 'On-Page Optimization', 'Backlink Building', 'Technical Audits']
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Build a loyal community and amplify your brand voice across Instagram, LinkedIn, Twitter, and TikTok.',
      features: ['Content Creation', 'Community Management', 'Influencer Partnerships', 'Analytics Reporting']
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'Establish authority with high-quality blogs, whitepapers, and videos that educate and convert.',
      features: ['Blog Writing', 'Video Production', 'Copywriting', 'E-books & Guides']
    },
    {
      icon: Monitor,
      title: 'Web Design & Dev',
      description: 'Create stunning, high-performance websites that provide exceptional user experiences and drive sales.',
      features: ['UI/UX Design', 'Responsive Development', 'E-commerce Solutions', 'Speed Optimization']
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Nurture leads and retain customers with personalized, automated email campaigns that convert.',
      features: ['Campaign Strategy', 'Newsletter Design', 'List Segmentation', 'A/B Testing']
    },
    {
      icon: Layout,
      title: 'Brand Identity',
      description: 'Stand out with a memorable brand identity including logo design, color palettes, and brand guidelines.',
      features: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'Rebranding']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Services</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We offer a full suite of digital marketing services designed to work together, creating a cohesive strategy that drives real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 flex flex-col animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary-600">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>
              
              <div className="bg-slate-50 rounded-xl p-4 mb-6">
                <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wider">Includes:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary-500 mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" className="text-center w-full py-3 border border-slate-200 rounded-lg font-semibold text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors">
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
           <div className="relative z-10 max-w-2xl mx-auto">
             <h2 className="text-3xl font-bold mb-6">Not sure what you need?</h2>
             <p className="text-indigo-100 text-lg mb-8">Schedule a free strategy call with our experts. We'll analyze your current presence and recommend the best path forward.</p>
             <Link to="/contact" className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-colors">
               Book Consultation
             </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Services;