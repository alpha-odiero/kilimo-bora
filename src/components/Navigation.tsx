import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Products', value: 'products' },
    { label: 'Export', value: 'export' },
    { label: 'Blog', value: 'blog' },
    { label: 'FAQ', value: 'faq' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setPage('home')}
        >
          <img
            src="/assets/images/kilimo-logo.png"
            alt="Kilimo Bora logo"
            className="h-12 w-auto rounded-md shadow-sm bg-white/80 backdrop-blur group-hover:scale-[1.03] transition-transform"
          />
          <span className={`text-2xl font-serif font-bold ${isScrolled ? 'text-primary' : 'text-primary-dark'}`}>
            Kilimo <span className="text-earth">Bora</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => setPage(link.value)}
              className={`text-sm font-medium transition-colors hover:text-primary ${currentPage === link.value ? 'text-primary border-b-2 border-primary' : 'text-slate-600'}`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => setPage('order')}
            className="btn-primary py-2 px-6 text-sm"
          >
            Order Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => {
                setPage(link.value);
                setIsOpen(false);
              }}
              className={`text-left text-lg font-medium py-2 ${currentPage === link.value ? 'text-primary' : 'text-slate-600'}`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => {
              setPage('order');
              setIsOpen(false);
            }}
            className="btn-primary w-full mt-4"
          >
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC<{ setPage: (page: Page) => void }> = ({ setPage }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-slate-900 text-slate-300 pt-20 pb-10">
      <div
        aria-hidden
        className="absolute inset-0 bg-[url('/assets/images/maize.jpg')] bg-cover bg-center opacity-30"
      />
      <div className="absolute inset-0 bg-slate-900/70" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <img
              src="/assets/images/kilimo-logo.png"
              alt="Kilimo Bora logo"
              className="h-12 w-auto rounded-md shadow-sm bg-white/80 backdrop-blur"
            />
            <span className="text-2xl font-serif font-bold text-white">
              Kilimo <span className="text-primary-light">Bora</span>
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Premium Kenyan farm produce for local and global markets. We are committed to sustainable farming and empowering our local communities.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-serif text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><button onClick={() => setPage('home')} className="hover:text-primary transition-colors">Home</button></li>
            <li><button onClick={() => setPage('about')} className="hover:text-primary transition-colors">About Us</button></li>
            <li><button onClick={() => setPage('products')} className="hover:text-primary transition-colors">Our Products</button></li>
            <li><button onClick={() => setPage('export')} className="hover:text-primary transition-colors">Export Services</button></li>
            <li><button onClick={() => setPage('tracking')} className="hover:text-primary transition-colors">Track Order</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif text-lg font-bold mb-6">Support</h4>
          <ul className="space-y-4">
            <li><button onClick={() => setPage('faq')} className="hover:text-primary transition-colors">FAQ</button></li>
            <li><button onClick={() => setPage('contact')} className="hover:text-primary transition-colors">Contact Us</button></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-serif text-lg font-bold mb-6">Stay Updated</h4>
          <p className="text-slate-400 text-sm leading-relaxed">Subscribe to our newsletter for the latest updates on our harvest and export news.</p>
          {subscribed ? (
            <div className="bg-primary/20 border border-primary/30 rounded-lg p-4 text-center">
              <p className="text-primary-light font-medium">Thank you for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
              <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>© 2026 Kilimo Bora. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <Globe size={16} />
          <span>Proudly Kenyan, Serving the World</span>
        </div>
      </div>
    </footer>
  );
};
