import Link from 'next/link'
import {
  ShieldCheck,
  ArrowRight,
  Star,
  LayoutGrid,
  Cpu,
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-48 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 z-10">
            <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-100 rounded-full px-4 py-1.5 shadow-sm">
              <span className="bg-zlot-yellow text-zlot-dark text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                Local
              </span>
              <span className="text-[12px] font-bold text-slate-500 uppercase tracking-wide">
                Built with Bengaluru in mind
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-zlot-dark leading-[0.9] tracking-tighter">
              Parking in <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-zlot-dark to-slate-500">
                Bengaluru.
              </span>
            </h1>

            <p className="text-xl text-slate-500 max-w-lg leading-relaxed font-medium">
              Find reliable parking in key Bengaluru neighborhoods like
              Koramangala, Indiranagar, and Whitefield. Built to reduce daily
              parking stress starting with select areas.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/find-parking"
                className="btn-primary px-10 py-4 rounded-xl flex items-center justify-center text-lg"
              >
                Find Parking <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/list-space"
                className="bg-white text-zlot-dark border border-slate-200 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
              >
                List Your Space
              </Link>
            </div>

            <div className="pt-4 flex items-center space-x-8">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-white shadow-sm grayscale"
                    src={`https://picsum.photos/100/100?random=${i + 30}`}
                    alt="user"
                  />
                ))}
              </div>
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">
                  Early Bengaluru Drivers
                </p>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 text-zlot-yellow fill-zlot-yellow"
                    />
                  ))}
                  <span className="text-sm font-bold text-zlot-dark ml-2">
                    Feedback from early users
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative md:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-zlot-yellow rounded-full blur-[140px] opacity-10 pointer-events-none"></div>
            <div className="relative bg-slate-50 p-4 rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2070&auto=format&fit=crop"
                alt="Parking in Bengaluru"
                className="rounded-[1.8rem] w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zlot-dark/40 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl flex items-center space-x-4 border border-white/20">
                  <div className="bg-zlot-dark p-2 rounded-lg">
                    <Cpu className="text-zlot-yellow w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Pilot Launch
                    </p>
                    <p className="text-sm font-black text-zlot-dark">
                      Available in select Bengaluru locations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Traction */}
      <section className="py-20 bg-zlot-dark text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'PILOT AREAS LIVE', value: 'Pilot Areas Live' },
              { label: 'NEIGHBORHOODS COVERED', value: 'Neighborhoods Covered' },
              { label: 'BUILT WITH PROPERTY OWNERS', value: 'Built with Owners' },
              { label: 'FOCUSED ON DAILY DRIVERS', value: 'Focused on Drivers' },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-3xl md:text-4xl font-black text-zlot-yellow">
                  {stat.value}
                </h3>
                <p className="text-slate-400 font-medium uppercase text-[10px] tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <h2 className="text-sm font-black text-zlot-yellow uppercase tracking-[0.3em] mb-6">
              Why ZLOT
            </h2>
            <h3 className="text-5xl font-black text-zlot-dark tracking-tighter leading-none mb-8">
              Built around real Bengaluru parking problems.
            </h3>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              We&apos;re starting small, working closely with drivers and
              property owners, and improving the experience step by step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: LayoutGrid,
                title: 'Local First',
                desc: 'Focused on specific streets and neighborhoods where parking is genuinely difficult.',
              },
              {
                icon: ShieldCheck,
                title: 'Trust & Safety',
                desc: 'Clear access rules, verified spaces, and simple guidelines for both drivers and owners.',
              },
              {
                icon: Cpu,
                title: 'Built to Grow',
                desc: 'Simple systems today, better features tomorrow expanding only when it makes sense.',
              },
            ].map((feature, i) => (
              <div key={i} className="card-seamless p-12 bg-white">
                <feature.icon className="w-8 h-8 text-zlot-dark mb-6" />
                <h4 className="text-2xl font-black mb-4 text-zlot-dark">
                  {feature.title}
                </h4>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* CTA */}
<section className="py-24">
  <div className="container mx-auto px-6">
    <div className="bg-zlot-dark rounded-[3rem] px-10 py-20 md:px-20 md:py-28 text-center">
      
      <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
        <span className="block">Namma Bengaluru.</span>
        <span className="block text-zlot-yellow">Namma Parking.</span>
      </h2>

      <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12">
        Join thousands of Bengaluru property owners earning up to ₹25,000
        monthly from their unused parking spaces.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <Link
          href="/signup"
          className="bg-zlot-yellow text-zlot-dark px-10 py-4 rounded-xl font-black text-lg hover:scale-[1.02] transition-transform shadow-lg"
        >
          Start Earning
        </Link>

        <Link
          href="/about"
          className="text-white font-bold flex items-center gap-2 hover:text-zlot-yellow transition-colors"
        >
          Our Bengaluru Vision <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
          </div>
        </div>
      </section>
    </div>
  )
}
