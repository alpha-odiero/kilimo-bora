import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, Globe, Truck, ShieldCheck, Leaf, Users, Target, 
  ChevronDown, ChevronUp, Search, Filter, Calendar, Clock, User, 
  ArrowRight, Mail, Phone, MapPin, Send, Package, SearchIcon, X
} from 'lucide-react';
import { Page, Product, BlogPost, FAQItem, Order } from '../types';
import { PRODUCTS, BLOG_POSTS, FAQS } from '../constants';

// --- ABOUT PAGE ---
export const About: React.FC = () => (
  <div className="pt-32 pb-20">
    <div className="section-padding grid md:grid-cols-2 gap-16 items-center mb-24">
      <div className="space-y-8">
        <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Story</span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-tight">
          Rooted in <span className="text-primary italic">Kenya</span>, Serving the World
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Kilimo Bora was founded in 2010 with a simple mission: to provide the freshest, highest-quality produce to our local community while showcasing the agricultural potential of Kenya to the global market.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          What started as a 5-hectare family plot in Limuru has grown into a multi-regional operation spanning over 500 hectares. We combine traditional wisdom with modern sustainable farming techniques to ensure our soil remains fertile and our produce remains pure.
        </p>
        <div className="flex gap-8 pt-4">
          <div>
            <p className="text-4xl font-serif font-bold text-primary">15+</p>
            <p className="text-sm text-slate-500 uppercase tracking-wider">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-serif font-bold text-primary">500+</p>
            <p className="text-sm text-slate-500 uppercase tracking-wider">Hectares Farmed</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <img 
          src="/assets/images/greens.jpg" 
          alt="Kenyan Farm" 
          className="rounded-3xl shadow-2xl relative z-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-earth/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </div>

    <div className="bg-slate-900 text-white py-24">
      <div className="section-padding grid md:grid-cols-3 gap-12">
        <div className="space-y-6 text-center md:text-left">
          <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto md:mx-0">
            <Target className="text-primary-light" size={32} />
          </div>
          <h3 className="text-2xl font-serif font-bold">Our Mission</h3>
          <p className="text-slate-400 leading-relaxed">To bridge the gap between the Kenyan farmer and the global consumer through sustainable practices and reliable logistics.</p>
        </div>
        <div className="space-y-6 text-center md:text-left">
          <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto md:mx-0">
            <Globe className="text-primary-light" size={32} />
          </div>
          <h3 className="text-2xl font-serif font-bold">Our Vision</h3>
          <p className="text-slate-400 leading-relaxed">To be the leading exporter of premium Kenyan agricultural products, recognized globally for quality, ethics, and sustainability.</p>
        </div>
        <div className="space-y-6 text-center md:text-left">
          <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto md:mx-0">
            <Users className="text-primary-light" size={32} />
          </div>
          <h3 className="text-2xl font-serif font-bold">Our Community</h3>
          <p className="text-slate-400 leading-relaxed">We empower over 200 local smallholder farmers by providing them with training, high-quality seeds, and a guaranteed market for their produce.</p>
        </div>
      </div>
    </div>

    <div className="section-padding py-24">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-4xl font-serif font-bold text-slate-900">Sustainability at Our Core</h2>
        <p className="text-lg text-slate-600">We believe that great produce starts with a healthy planet. Our farming practices are designed to protect the environment for future generations.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: 'Water Conservation', desc: 'Advanced drip irrigation systems to minimize water waste.', icon: <CheckCircle2 className="text-primary" /> },
          { title: 'Soil Health', desc: 'Crop rotation and organic composting to maintain soil fertility.', icon: <CheckCircle2 className="text-primary" /> },
          { title: 'Zero Waste', desc: 'Repurposing farm waste into organic fertilizers and animal feed.', icon: <CheckCircle2 className="text-primary" /> },
          { title: 'Clean Energy', desc: 'Solar-powered cold storage and processing facilities.', icon: <CheckCircle2 className="text-primary" /> },
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center">{item.icon}</div>
            <h4 className="text-xl font-serif font-bold">{item.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- PRODUCTS PAGE ---
export const Products: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const categories = ['All', 'Vegetables', 'Fruits', 'Grains', 'Herbs & Spices'];
  
  const filteredProducts = PRODUCTS
    .filter(p => filter === 'All' || p.category === filter)
    .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                p.description.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="pt-32 pb-20">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-5xl font-serif font-bold text-slate-900">Our <span className="text-primary italic">Fresh</span> Harvest</h1>
          <p className="text-lg text-slate-600">Explore our wide range of premium Kenyan produce, grown with care and harvested at peak maturity.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${filter === cat ? 'bg-primary text-white shadow-lg' : 'bg-white text-slate-600 border border-slate-200 hover:border-primary'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-auto md:min-w-[300px]">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="card group"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">{product.name}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{product.description}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                    <span className="text-sm font-bold text-primary uppercase tracking-widest">Available Now</span>
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="text-slate-900 font-bold flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Details <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[2.5rem] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-6 right-6 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="aspect-video overflow-hidden relative rounded-t-[2.5rem]">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-primary text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                      {selectedProduct.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12 space-y-6">
                  <div>
                    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">{selectedProduct.name}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">{selectedProduct.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                    <div className="space-y-4">
                      <h3 className="text-xl font-serif font-bold text-slate-900">Product Details</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Category:</span>
                          <span className="font-medium">{selectedProduct.category}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Origin:</span>
                          <span className="font-medium">Kenya</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Quality:</span>
                          <span className="font-medium">Premium Grade</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Availability:</span>
                          <span className="font-medium text-primary">In Stock</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-serif font-bold text-slate-900">Ordering Information</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Minimum Order:</span>
                          <span className="font-medium">50kg</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Packaging:</span>
                          <span className="font-medium">Custom Available</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Shelf Life:</span>
                          <span className="font-medium">7-14 days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 pt-6">
                    <button className="flex-1 btn-primary">
                      Request Quote
                    </button>
                    <button className="flex-1 btn-secondary">
                      Contact Sales
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- EXPORT PAGE ---
export const Export: React.FC = () => (
  <div className="pt-32 pb-20">
    <div className="section-padding grid md:grid-cols-2 gap-16 items-center mb-24">
      <div className="space-y-8">
        <span className="text-primary font-bold uppercase tracking-widest text-sm">Global Reach</span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-tight">
          Kenyan Freshness, <span className="text-primary italic">Global</span> Delivery
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          We are a leading exporter of Kenyan agricultural products, specializing in high-value crops like avocados, pineapples, and premium vegetables. Our export division is built on three pillars: Quality, Reliability, and Speed.
        </p>
        <div className="space-y-4">
          {[
            { title: 'GlobalG.A.P. Certified', desc: 'Adhering to the highest international food safety standards.' },
            { title: 'Cold Chain Excellence', desc: 'State-of-the-art refrigerated transport from farm to airport.' },
            { title: 'Custom Packaging', desc: 'Tailored packaging solutions to meet specific market requirements.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="bg-primary/10 p-2 rounded-xl h-fit"><CheckCircle2 className="text-primary" /></div>
              <div>
                <h4 className="font-bold text-slate-900">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img src="/assets/images/maize.jpg" alt="Maize harvest" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-12" referrerPolicy="no-referrer" />
        <img src="/assets/images/avocado.jpg" alt="Avocado orchard" className="rounded-2xl shadow-lg w-full h-64 object-cover" referrerPolicy="no-referrer" />
        <img src="/assets/images/onions.jpg" alt="Onion harvest" className="rounded-2xl shadow-lg w-full h-64 object-cover" referrerPolicy="no-referrer" />
        <img src="/assets/images/beans.jpg" alt="Assorted beans" className="rounded-2xl shadow-lg w-full h-64 object-cover -mt-12" referrerPolicy="no-referrer" />
      </div>
    </div>

    <div className="bg-earth text-white py-24">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-serif font-bold">Our Global Markets</h2>
          <p className="text-lg opacity-80">We currently export to over 15 countries across three continents, with plans for further expansion.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <h3 className="text-5xl font-serif font-bold text-primary-light">Europe</h3>
            <p className="text-slate-300">Germany, Netherlands, UK, France, and Spain. Primary products: Avocados, French Beans, and Herbs.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-5xl font-serif font-bold text-primary-light">Middle East</h3>
            <p className="text-slate-300">UAE, Saudi Arabia, and Qatar. Primary products: Pineapples, Mangoes, and Onions.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-5xl font-serif font-bold text-primary-light">Asia</h3>
            <p className="text-slate-300">China, Japan, and Singapore. Primary products: Macadamia Nuts and Specialty Fruits.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- BLOG PAGE ---
export const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (selectedPost) {
    return (
      <div className="pt-32 pb-20">
        <div className="section-padding max-w-4xl">
          <button 
            onClick={() => setSelectedPost(null)}
            className="mb-8 text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all"
          >
            ← Back to Blog
          </button>
          
          <article className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">{selectedPost.date}</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">{selectedPost.title}</h1>
            </div>
            
            <div className="aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
              <p className="text-xl font-medium text-slate-600 mb-6 italic">{selectedPost.excerpt}</p>
              
              <p>Kilimo Bora continues to lead the way in sustainable agricultural practices across East Africa. Our commitment to environmentally friendly farming methods has not only improved our crop yields but also preserved the rich biodiversity of Kenya's fertile lands.</p>
              
              <h2>The Importance of Sustainable Farming</h2>
              <p>Sustainable farming is not just a trend—it's essential for the future of agriculture in Kenya. By implementing practices that protect our soil, conserve water, and promote biodiversity, we ensure that future generations can continue to benefit from Kenya's agricultural potential.</p>
              
              <h2>Our Approach</h2>
              <p>At Kilimo Bora, sustainability is integrated into every aspect of our operations. From seed selection to harvest, we prioritize methods that minimize environmental impact while maximizing productivity.</p>
              
              <blockquote>
                "The soil is the great connector of lives, the source and destination of all. It is the healer and restorer and resurrector, by which disease passes into health, age into youth, death into life."
                <footer>— Wendell Berry</footer>
              </blockquote>
              
              <h2>Looking Forward</h2>
              <p>As we continue to grow and expand our operations, our commitment to sustainable practices remains unwavering. We believe that profitable farming and environmental stewardship can go hand in hand.</p>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-5xl font-serif font-bold text-slate-900">Kilimo Bora <span className="text-primary italic">Insights</span></h1>
          <p className="text-lg text-slate-600">Stay updated with the latest trends in Kenyan agriculture, sustainable farming, and global export markets.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="card group cursor-pointer" onClick={() => setSelectedPost(post)}>
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.date}
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                <p className="text-slate-600 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all pt-2">
                  Read Full Article <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- FAQ PAGE ---
export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');
  
  return (
    <div className="pt-32 pb-20">
      <div className="section-padding max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-serif font-bold text-slate-900">Frequently Asked <span className="text-primary italic">Questions</span></h1>
          <p className="text-lg text-slate-600">Everything you need to know about our products, orders, and export services.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div key={faq.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
              >
                <div className="space-y-1">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest">{faq.category}</span>
                  <h3 className="text-xl font-serif font-bold text-slate-900">{faq.question}</h3>
                </div>
                {openId === faq.id ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-slate-400" />}
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- ORDER PAGE ---
export const OrderPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-20 section-padding text-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-xl mx-auto bg-white p-12 rounded-[3rem] shadow-2xl space-y-6"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="text-primary" size={40} />
          </div>
          <h2 className="text-4xl font-serif font-bold text-slate-900">Order Received!</h2>
          <p className="text-lg text-slate-600">Thank you for choosing Kilimo Bora. Our sales team will contact you shortly to confirm your order and arrange delivery.</p>
          <p className="text-sm text-slate-400">Order Reference: #GH-{Math.floor(Math.random() * 100000)}</p>
          <button onClick={() => setSubmitted(false)} className="btn-primary">Place Another Order</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="section-padding grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <h1 className="text-5xl font-serif font-bold text-slate-900">Place Your <span className="text-primary italic">Order</span></h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Fill out the form below to request a quote or place a bulk order. Our team handles both local retail supply and large-scale international exports.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 rounded-xl h-fit"><Package className="text-primary" /></div>
              <div>
                <h4 className="font-bold text-slate-900">Bulk Discounts</h4>
                <p className="text-sm text-slate-500">We offer competitive pricing for orders exceeding 500kg.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 rounded-xl h-fit"><Truck className="text-primary" /></div>
              <div>
                <h4 className="font-bold text-slate-900">Global Logistics</h4>
                <p className="text-sm text-slate-500">Full export documentation and cold chain support provided.</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Full Name</label>
              <input type="text" required className="input-field" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Phone Number</label>
              <input type="tel" required className="input-field" placeholder="+254..." />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Email Address</label>
            <input type="email" required className="input-field" placeholder="john@example.com" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Product Selection</label>
              <select className="input-field">
                {PRODUCTS.map(p => <option key={p.id}>{p.name}</option>)}
                <option>Mixed Export Crate</option>
                <option>Other (Specify in notes)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Quantity (kg/tons)</label>
              <input type="text" required className="input-field" placeholder="e.g. 500kg" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Delivery Location</label>
            <input type="text" required className="input-field" placeholder="City, Country" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Additional Notes</label>
            <textarea className="input-field min-h-[100px]" placeholder="Specific requirements, packaging needs, etc."></textarea>
          </div>
          <button type="submit" className="btn-primary w-full py-4 text-lg">Submit Order Request</button>
        </form>
      </div>
    </div>
  );
};

// --- TRACKING PAGE ---
export const Tracking: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  
  const handleTrack = () => {
    if (!orderId) return;
    const statuses = ['Pending', 'Processing', 'Shipped', 'Delivered'];
    setStatus(statuses[Math.floor(Math.random() * statuses.length)]);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="section-padding max-w-2xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-serif font-bold text-slate-900">Track Your <span className="text-primary italic">Shipment</span></h1>
          <p className="text-lg text-slate-600">Enter your Order ID to see the real-time status of your harvest delivery.</p>
        </div>

        <div className="flex gap-4 p-2 bg-white rounded-2xl shadow-lg border border-slate-100">
          <input 
            type="text" 
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Enter Order ID (e.g. GH-12345)" 
            className="flex-1 px-6 py-4 outline-none font-medium"
          />
          <button 
            onClick={handleTrack}
            className="bg-primary text-white p-4 rounded-xl hover:bg-primary-dark transition-colors"
          >
            <SearchIcon />
          </button>
        </div>

        {status && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-8"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="text-left">
                <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Order ID</p>
                <p className="text-xl font-serif font-bold text-slate-900">{orderId}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Current Status</p>
                <p className="text-xl font-serif font-bold text-primary">{status}</p>
              </div>
            </div>

            <div className="relative pt-10">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2"></div>
              <div className={`absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 transition-all duration-1000 ${status === 'Pending' ? 'w-1/4' : status === 'Processing' ? 'w-1/2' : status === 'Shipped' ? 'w-3/4' : 'w-full'}`}></div>
              
              <div className="relative flex justify-between">
                {['Pending', 'Processing', 'Shipped', 'Delivered'].map((s, i) => (
                  <div key={s} className="flex flex-col items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 border-4 border-white shadow-md ${status === s || ['Processing', 'Shipped', 'Delivered'].slice(0, i).includes(status!) ? 'bg-primary text-white' : 'bg-slate-200 text-slate-400'}`}>
                      <CheckCircle2 size={14} />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-tighter ${status === s ? 'text-primary' : 'text-slate-400'}`}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// --- CONTACT PAGE ---
export const Contact: React.FC = () => (
  <div className="pt-32 pb-20">
    <div className="section-padding grid lg:grid-cols-2 gap-16">
      <div className="space-y-12">
        <div className="space-y-6">
          <h1 className="text-5xl font-serif font-bold text-slate-900">Get in <span className="text-primary italic">Touch</span></h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Have questions about our produce or export services? Our team is ready to assist you. Visit our office in Nairobi or reach out through any of the channels below.
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="bg-primary/10 p-4 rounded-2xl h-fit"><MapPin className="text-primary" size={28} /></div>
            <div>
              <h4 className="text-xl font-serif font-bold text-slate-900">Head Office</h4>
              <p className="text-slate-500">123 Agribusiness Plaza, Ngong Road<br />Nairobi, Kenya</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="bg-primary/10 p-4 rounded-2xl h-fit"><Phone className="text-primary" size={28} /></div>
            <div>
              <h4 className="text-xl font-serif font-bold text-slate-900">Phone</h4>
              <p className="text-slate-500">+254 700 000 000<br />+254 711 000 000</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="bg-primary/10 p-4 rounded-2xl h-fit"><Mail className="text-primary" size={28} /></div>
            <div>
              <h4 className="text-xl font-serif font-bold text-slate-900">Email</h4>
              <p className="text-slate-500">info@greenharvest.co.ke<br />sales@greenharvest.co.ke</p>
            </div>
          </div>
        </div>
      </div>

      <form className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-6">
        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Send us a Message</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Name</label>
            <input type="text" required className="input-field" placeholder="Your Name" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Email</label>
            <input type="email" required className="input-field" placeholder="Your Email" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">Subject</label>
          <input type="text" required className="input-field" placeholder="How can we help?" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">Message</label>
          <textarea required className="input-field min-h-[150px]" placeholder="Tell us more..."></textarea>
        </div>
        <button type="submit" className="btn-primary w-full py-4 flex items-center justify-center gap-2">
          Send Message <Send size={18} />
        </button>
      </form>
    </div>
  </div>
);
