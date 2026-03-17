import React from 'react';
import heroImg from './assets/hero.png'; // Using your existing import

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 lg:py-32">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 blur-3xl opacity-20 pointer-events-none">
        <div className="aspect-[1100/600] w-[70rem] bg-gradient-to-tr from-indigo-500 to-purple-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Build your next <span className="text-indigo-400">Vite project</span> faster.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Stop fighting with configuration. Start building with a modern stack 
              designed for speed, scalability, and developer happiness. 
              Everything you need, right out of the box.
            </p>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
              >
                Get Started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white hover:text-indigo-400 transition-colors">
                Live Demo <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Image/Visual */}
          <div className="relative">
             <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                <img
                  src={heroImg}
                  alt="App Screenshot"
                  className="w-full rounded-2xl shadow-2xl ring-1 ring-white/10"
                />
                {/* Optional: Glow effect behind image */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur-xl -z-10"></div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;