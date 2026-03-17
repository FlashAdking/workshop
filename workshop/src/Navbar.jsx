
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold">
              V
            </div>
            <span className="text-xl font-bold tracking-tight">Vite+React</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="hover:text-indigo-400 px-3 py-2 transition-colors">Home</a>
              <a href="#" className="hover:text-indigo-400 px-3 py-2 transition-colors">Docs</a>
              <a href="#" className="hover:text-indigo-400 px-3 py-2 transition-colors">Components</a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-indigo-500/20">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="block px-3 py-2 rounded-md hover:bg-slate-700">Home</a>
          <a href="#" className="block px-3 py-2 rounded-md hover:bg-slate-700">Docs</a>
          <a href="#" className="block px-3 py-2 rounded-md hover:bg-slate-700">Components</a>
          <button className="w-full mt-2 bg-indigo-600 px-3 py-2 rounded-md">Get Started</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;