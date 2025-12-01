import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-tr from-primary-500 to-secondary-500 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Lumina</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              We are a full-service digital marketing agency dedicated to elevating brands through creative strategy and data-driven results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-primary-400 transition-colors">Blog & Insights</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">SEO Optimization</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">Content Strategy</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">Paid Advertising</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">Social Media</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">Web Development</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary-600 transition-colors hover:-translate-y-1 transform duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary-600 transition-colors hover:-translate-y-1 transform duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary-600 transition-colors hover:-translate-y-1 transform duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary-600 transition-colors hover:-translate-y-1 transform duration-200">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-6 text-slate-400 text-sm">
              hello@lumina-agency.com<br />
              +1 (555) 123-4567
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Lumina Market Agency. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;