import React from 'react';
import { Rocket, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-700 text-white shadow-sm">
            <Rocket size={18} />
          </div>
          <span className="font-semibold text-lg tracking-tight text-stone-900">Renotake</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-stone-700">
          <a href="#features" className="hover:text-stone-900 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-stone-900 transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="px-4 py-2 text-sm font-medium text-stone-800 hover:text-stone-900">Sign in</a>
          <a href="#" className="px-4 py-2 text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-lg shadow-sm">Get started</a>
        </div>
        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-stone-200 text-stone-700">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}
