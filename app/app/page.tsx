import { ArrowRight, Check, Gauge, LineChart, MousePointerClick } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Outcomes />
      <MiniWork />
      <Results />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-neutral-50">
      <div className="container grid gap-10 py-20 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Websites that <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">load fast, rank fast, and convert</span>.
          </h1>
          <p className="text-lg text-neutral-700">
            I design and build revenue-focused sites: clean UX, Core Web Vitals in the green, and copy that turns clicks into customers.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-primary">
              Start a project <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#work" className="btn btn-outline">See live work</a>
          </div>
          <ul className="mt-4 grid gap-2 text-sm text-neutral-600 md:grid-cols-3">
            <li className="badge"><Gauge className="h-4 w-4"/> LCP &lt; 2.0s</li>
            <li className="badge"><MousePointerClick className="h-4 w-4"/> Clear CTAs</li>
            <li className="badge"><LineChart className="h-4 w-4"/> ROI-first</li>
          </ul>
        </div>
        <div className="card">
          <div className="aspect-video w-full overflow-hidden rounded-xl bg-neutral-100" />
          <p className="mt-4 text-sm text-neutral-600">Demo space for a scroll video or before/after speed slider.</p>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-y bg-white">
      <div className="container flex flex-wrap items-center justify-center gap-8 py-6 text-neutral-500">
        <span className="text-sm">Core Web Vitals: Green</span>
        <span className="text-sm">Next.js • Tailwind • GA4</span>
        <span className="text-sm">SSL • Schema • SEO</span>
      </div>
    </section>
  );
}

function Outcomes() {
  const items = [
    { title: 'More qualified leads', desc: 'Focused landing flows and persuasive copy.', icon: Check },
    { title: 'Performance that ranks', desc: 'Image CDN, optimized payloads, clean markup.', icon: Gauge },
    { title: 'Analytics that matter', desc: 'GA4 + event tracking on forms and CTAs.', icon: LineChart }
  ];
  return (
    <section id="services" className="bg-neutral-50">
      <div className="container grid gap-6 py-16 md:grid-cols-3">
        {items.map(({ title, desc, icon: Icon }) => (
          <div key={title} className="card">
            <div className="mb-3 flex items-center gap-2">
              <Icon className="h-5 w-5"/>
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <p className="text-neutral-700">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MiniWork() {
  const work = [
    { title: 'Funding Studio', metric: '+72% form starts', href: '#', img: '' },
    { title: 'Construction Co', metric: 'LCP 3.4s → 1.6s', href: '#', img: '' },
    { title: 'Dental Group', metric: 'Bounce −22%', href: '#', img: '' }
  ];
  return (
    <section id="work">
      <div className="container py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Selected work</h2>
          <a href="#contact" className="text-sm underline">Book similar build</a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {work.map((w) => (
            <a key={w.title} href={w.href} className="card group">
              <div className="aspect-video w-full rounded-xl bg-neutral-100" />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{w.title}</h3>
                  <p className="text-sm text-neutral-600">{w.metric}</p>
                </div>
                <ArrowRight className="h-5 w-5 opacity-0 transition group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  const stats = [
    { label: 'Avg. LCP (mobile)', value: '1.7s' },
    { label: 'Lead volume (30d)', value: '+38%' },
    { label: 'CLS', value: '0.01' }
  ];
  return (
    <section id="results" className="bg-neutral-50">
      <div className="container py-16">
        <h2 className="mb-8 text-2xl font-semibold">Results that matter</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map(s => (
            <div key={s.label} className="card">
              <div className="text-3xl font-semibold">{s.value}</div>
              <div className="mt-2 text-sm text-neutral-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <div className="container grid gap-8 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Start a project</h2>
          <p className="mt-3 text-neutral-700">Tell me your goal and timeline. I’ll reply with a 2–3 option plan and a link to book a call.</p>
          <ul className="mt-6 space-y-2 text-sm text-neutral-600">
            <li className="badge">Fixed scopes. Weekly artifacts.</li>
            <li className="badge">Green Web Vitals target.</li>
            <li className="badge">Repo access on day 1.</li>
          </ul>
        </div>
        <form className="card grid gap-4" action="/api/contact" method="post">
          <input className="rounded-xl border p-3" name="name" placeholder="Your name" required />
          <input className="rounded-xl border p-3" name="email" type="email" placeholder="Email" required />
          <input className="rounded-xl border p-3" name="url" type="url" placeholder="Current site URL (optional)" />
          <select className="rounded-xl border p-3" name="budget" defaultValue="">
            <option value="" disabled>Budget range</option>
            <option>Under $2,500</option>
            <option>$2,500–$6,000</option>
            <option>$6,000–$12,000</option>
            <option>$12,000+</option>
          </select>
          <textarea className="rounded-xl border p-3" name="goal" rows={4} placeholder="Main goal (e.g., more leads, speed rescue, redesign)" required />
          <button className="btn btn-primary" type="submit">Send brief</button>
          <p className="text-xs text-neutral-500">By submitting, you agree to be contacted about your project.</p>
        </form>
      </div>
    </section>
  );
}
