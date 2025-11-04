import React from 'react';
import { Check, Shield, Settings, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Settings,
    title: 'Unified workspace',
    desc: 'Bring tasks, docs, and timelines together with simple building blocks your team already knows.'
  },
  {
    icon: Shield,
    title: 'Secure by default',
    desc: 'Enterprise-grade security with SSO, audit logs, role-based access, and regional data residency.'
  },
  {
    icon: BarChart3,
    title: 'Insights that matter',
    desc: 'Turn raw activity into clean dashboards. Track progress and predict blockers before they happen.'
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">Manage everything in one place</h2>
          <p className="mt-3 text-stone-700">Designed for clarity and speed so your team can focus on the work that matters.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-800 inline-flex items-center justify-center">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-stone-900">{f.title}</h3>
              <p className="mt-2 text-stone-700">{f.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-stone-700">
                <li className="flex items-center gap-2"><Check className="text-amber-700" size={16} />Fast, minimal UI</li>
                <li className="flex items-center gap-2"><Check className="text-amber-700" size={16} />Custom views & filters</li>
                <li className="flex items-center gap-2"><Check className="text-amber-700" size={16} />Automations & alerts</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
