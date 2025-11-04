import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Pricing from './components/Pricing.jsx';

function Footer() {
  return (
    <footer id="contact" className="border-t border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-amber-700 text-white inline-flex items-center justify-center font-bold">R</div>
          <div className="">
            <p className="font-semibold text-stone-900">Renotake</p>
            <p className="text-sm text-stone-600">Management tools for modern teams</p>
          </div>
        </div>
        <div className="text-sm text-stone-600">
          © {new Date().getFullYear()} Renotake. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
