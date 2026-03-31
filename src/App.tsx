import React, { useState, useEffect } from 'react';
import { Navbar, Footer } from './components/Navigation';
import { Home } from './components/Home';
import { About, Products, Export, Blog, FAQ, OrderPage, Tracking, Contact } from './components/Pages';
import { Page } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setPage={setCurrentPage} />;
      case 'about': return <About />;
      case 'products': return <Products />;
      case 'export': return <Export />;
      case 'blog': return <Blog />;
      case 'faq': return <FAQ />;
      case 'order': return <OrderPage />;
      case 'tracking': return <Tracking />;
      case 'contact': return <Contact />;
      default: return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setPage={setCurrentPage} />
    </div>
  );
}
