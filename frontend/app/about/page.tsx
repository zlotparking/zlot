import Link from 'next/link'
import { Target, ShieldCheck, Heart, Users, MapPin } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-28 pb-20 bg-zlot-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Built for Bengaluru. <br />
            <span className="text-zlot-yellow">Starting with Parking.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto">
            ZLOT is an early-stage Bengaluru startup trying to solve one simple,
            everyday problem finding reliable parking in busy neighborhoods.
          </p>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-black text-zlot-yellow uppercase tracking-widest mb-4">
              Why We Exist
            </h2>
            <h3 className="text-4xl font-extrabold text-zlot-dark mb-8 tracking-tight">
              Parking in Bengaluru is broken.
            </h3>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Anyone who drives in Bengaluru knows the problem circles
                around the block, blocked driveways, unclear rules, and wasted
                time.
              </p>
              <p>
                At the same time, thousands of residential and commercial
                parking spaces sit unused every day. ZLOT exists to connect
                these two sides simply and responsibly.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <ShieldCheck className="text-zlot-yellow mb-3 w-8 h-8" />
                <h4 className="font-bold">Verified Spaces</h4>
                <p className="text-sm text-slate-500">
                  Every listed space is reviewed before going live.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <MapPin className="text-zlot-yellow mb-3 w-8 h-8" />
                <h4 className="font-bold">Local Focus</h4>
                <p className="text-sm text-slate-500">
                  We grow area by area, not city by city.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=1200&auto=format&fit=crop"
              alt="Bengaluru streets"
              className="rounded-3xl shadow-xl w-full object-cover aspect-\[4/5]"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-zlot-dark mb-4">
              What We Care About
            </h2>
            <p className="text-slate-500">
              Simple principles that guide how we build ZLOT.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Keep It Simple',
                desc: 'No complex systems. If it works on the street, it works for us.',
              },
              {
                icon: Heart,
                title: 'Respect Communities',
                desc: 'Parking affects neighborhoods. We build with residents in mind.',
              },
              {
                icon: Users,
                title: 'Fair for Everyone',
                desc: 'Clear pricing for drivers and honest earnings for owners.',
              },
            ].map((v, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-3xl border border-slate-200"
              >
                <div className="bg-slate-100 p-4 rounded-2xl inline-block mb-6">
                  <v.icon className="w-8 h-8 text-zlot-dark" />
                </div>
                <h4 className="text-2xl font-bold mb-4">{v.title}</h4>
                <p className="text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-zlot-dark">
            We’re just getting started.
          </h2>
          <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto">
            If you drive in Bengaluru or own unused parking space, we’d love
            for you to be part of ZLOT’s early journey.
          </p>

          <Link
            href="/signup"
            className="inline-block bg-zlot-yellow text-zlot-dark px-12 py-4 rounded-xl font-black text-lg hover:scale-[1.02] transition-transform shadow-lg"
          >
            Join Early
          </Link>
        </div>
      </section>
    </div>
  )
}
