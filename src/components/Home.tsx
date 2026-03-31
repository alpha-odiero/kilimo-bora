import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Quote, ChevronRight, Leaf, Globe, Truck, ShieldCheck } from 'lucide-react';
import { Page, Product } from '../types';
import { PRODUCTS } from '../constants';

interface HomeProps {
  setPage: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ setPage }) => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/orchard.jpg" 
            alt="Kenyan Farm Landscape" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="section-padding relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-light px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
              Est. 2010 • Nairobi, Kenya
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Premium Kenyan Farm Produce for <span className="text-primary-light">Local & Global</span> Markets
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-xl">
              We grow, sell, and export the finest agricultural products from the heart of Kenya. From our fertile soils to your doorstep, quality is our promise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setPage('products')}
                className="btn-primary flex items-center justify-center gap-2"
              >
                View Products <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => setPage('order')}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Request Quote <Quote size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="section-padding py-0 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Hectares Farmed', value: '500+' },
            { label: 'Countries Exported', value: '15+' },
            { label: 'Local Partners', value: '200+' },
            { label: 'Quality Awards', value: '12' },
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="text-3xl font-serif font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="/assets/images/greens.jpg" 
            alt="Kilimo Bora farms" 
            className="rounded-3xl shadow-2xl relative z-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -right-6 bg-earth text-white p-8 rounded-2xl shadow-xl z-20 max-w-[240px]">
            <p className="text-sm font-medium opacity-80 mb-2 italic">"Our mission is to bridge the gap between the Kenyan farmer and the global consumer."</p>
            <p className="font-serif font-bold">— CEO, Kilimo Bora</p>
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        </motion.div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Nurturing the Soil, <span className="text-primary italic">Empowering</span> the People</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Kilimo Bora started as a small family farm in Limuru. Today, we manage over 500 hectares of diverse farmland across Kenya, employing hundreds of local farmers and using sustainable practices to ensure the highest quality produce.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Sustainable Farming', icon: <Leaf className="text-primary" /> },
              { title: 'Global Export Ready', icon: <Globe className="text-primary" /> },
              { title: 'Cold Chain Logistics', icon: <Truck className="text-primary" /> },
              { title: 'Certified Quality', icon: <ShieldCheck className="text-primary" /> },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="bg-primary/10 p-2 rounded-lg">{item.icon}</div>
                <span className="font-medium text-slate-800">{item.title}</span>
              </div>
            ))}
          </div>

          <button 
            onClick={() => setPage('about')}
            className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all group"
          >
            Learn More About Our Story <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-slate-50 section-padding">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Our <span className="text-primary">Featured</span> Harvest</h2>
            <p className="text-lg text-slate-600">Hand-picked, fresh, and ready for your kitchen or your international market shelf.</p>
          </div>
          <button 
            onClick={() => setPage('products')}
            className="btn-secondary whitespace-nowrap"
          >
            View All Products
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -10 }}
              className="card group cursor-pointer"
              onClick={() => setPage('products')}
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-sm text-slate-500 line-clamp-2 mb-4">{product.description}</p>
                <div className="flex items-center text-primary font-bold text-sm">
                  Details <ChevronRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding text-center">
        <div className="max-w-3xl mx-auto space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Why Global Buyers <span className="text-primary">Trust</span> Us</h2>
          <p className="text-lg text-slate-600">We don't just grow food; we cultivate trust through consistent quality and reliable logistics.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: 'Unmatched Freshness',
              desc: 'Our harvest-to-shipping window is less than 24 hours for most produce, ensuring peak freshness.',
              icon: <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6"><Star className="text-primary" size={32} /></div>
            },
            {
              title: 'Global Standards',
              desc: 'We comply with GlobalG.A.P. and other international food safety standards for all export markets.',
              icon: <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6"><ShieldCheck className="text-primary" size={32} /></div>
            },
            {
              title: 'Reliable Logistics',
              desc: 'Our dedicated cold chain fleet and partnerships with major airlines ensure timely global delivery.',
              icon: <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6"><Truck className="text-primary" size={32} /></div>
            }
          ].map((item, i) => (
            <div key={i} className="space-y-4 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-slate-100">
              {item.icon}
              <h3 className="text-2xl font-serif font-bold text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-earth text-white section-padding overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
          <Quote className="mx-auto text-primary-light opacity-50" size={64} />
          <h2 className="text-3xl md:text-4xl font-serif font-bold italic leading-relaxed">
            "Kilimo Bora has been our primary supplier for avocados and pineapples for over 5 years. Their consistency in quality and professional handling of export logistics is unmatched in the region."
          </h2>
          <div className="space-y-2">
            <p className="text-xl font-bold">Hans Müller</p>
            <p className="text-primary-light font-medium uppercase tracking-widest text-sm">Import Manager, FreshDirect Europe</p>
          </div>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="text-primary-light fill-primary-light" size={20} />)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-10"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif font-bold">Ready to Source the Best of <span className="text-primary-light italic">Kenya</span>?</h2>
            <p className="text-xl text-primary-light/90">Whether you are a local retailer or an international buyer, we have the capacity to meet your needs.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button 
                onClick={() => setPage('order')}
                className="bg-white text-primary hover:bg-slate-100 px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all active:scale-95"
              >
                Request a Quote
              </button>
              <button 
                onClick={() => setPage('contact')}
                className="bg-primary-dark text-white hover:bg-slate-900/20 border border-white/30 px-10 py-4 rounded-full font-bold text-lg transition-all active:scale-95"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
