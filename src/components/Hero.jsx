import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center py-20">
        <div className="">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 shadow-sm">New • Management Suite</span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-stone-900">
            Streamlined management for teams that move fast.
          </h1>
          <p className="mt-4 text-lg text-stone-700 max-w-prose">
            Renotake is a modern toolkit for planning, tracking, and reporting. Keep projects aligned, automate workflows, and turn data into clear decisions — all in one light, minimalist workspace.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-amber-700 text-white font-semibold shadow-sm hover:bg-amber-800">
              Start free trial
            </a>
            <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-stone-300 text-stone-800 bg-white hover:bg-stone-50 font-medium">
              See features
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-stone-600">
            <span>Light theme • Minimal UI</span>
            <span className="h-1 w-1 rounded-full bg-stone-400" />
            <span>Brown accent</span>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
