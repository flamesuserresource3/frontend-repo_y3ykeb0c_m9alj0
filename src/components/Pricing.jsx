import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    desc: 'For personal projects and early exploration.',
    features: ['3 projects', 'Basic automations', 'Community support'],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Team',
    price: '$12',
    suffix: '/user/mo',
    desc: 'Everything you need to ship together faster.',
    features: ['Unlimited projects', 'Advanced automations', 'Dashboards & reports', 'Priority support'],
    cta: 'Start 14-day trial',
    highlighted: true,
  },
  {
    name: 'Business',
    price: '$24',
    suffix: '/user/mo',
    desc: 'More control and advanced security for orgs.',
    features: ['SSO & RBAC', 'Audit logs', 'Data residency options', 'Uptime SLA'],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-stone-700">Start for free. Upgrade when your team is ready.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border ${t.highlighted ? 'border-amber-300' : 'border-stone-200'} bg-white p-6 shadow-sm`}>
              {t.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  Most popular
                </div>
              )}
              <h3 className="text-lg font-semibold text-stone-900">{t.name}</h3>
              <p className="mt-1 text-stone-700">{t.desc}</p>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-stone-900">{t.price}</span>
                {t.suffix && <span className="text-stone-600">{t.suffix}</span>}
              </div>
              <ul className="mt-6 space-y-2 text-sm text-stone-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check size={16} className="text-amber-700" />{f}</li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-flex w-full items-center justify-center px-4 py-2.5 rounded-lg font-semibold shadow-sm ${t.highlighted ? 'bg-amber-700 text-white hover:bg-amber-800' : 'bg-stone-100 text-stone-900 hover:bg-stone-200'}`}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
