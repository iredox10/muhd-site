import { Link } from '@tanstack/react-router'

export function Index() {
  return (
    <div className="w-full relative antialiased">
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 lg:px-24 xl:px-32 pt-20 pb-32 max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 min-h-[85vh]">
        <div className="flex-1 w-full relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-widest mb-8 border border-rose-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
            <span>Premium Print & Gifting</span>
          </div>
          
          <h1 className="text-[4rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.85] font-serif font-black text-neutral-950 tracking-tighter mb-10 text-balance relative">
            Print <br />
            <span className="italic font-light text-rose-600">Reimagined.</span>
            <span className="absolute -left-8 -top-8 w-24 h-24 bg-rose-200 rounded-full blur-3xl opacity-50 -z-10 mix-blend-multiply"></span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-600 font-light leading-relaxed max-w-2xl mb-12">
            Elevate your brand with world-class printing and curated corporate gifts. Crafted for those who demand excellence in every detail.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/catalog" className="bg-neutral-900 text-white hover:bg-rose-600 px-10 py-5 rounded-full text-lg font-medium transition-all duration-300 shadow-xl hover:shadow-rose-500/25 active:scale-95 flex items-center gap-3">
              Explore Catalog
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
            <Link to="/corporate" className="px-10 py-5 rounded-full text-lg font-medium text-neutral-900 border border-neutral-300 hover:border-rose-600 hover:text-rose-600 transition-all duration-300">
              Corporate Orders
            </Link>
          </div>
        </div>

        <div className="flex-1 w-full relative">
          {/* Aesthetic Imagery / Abstract shapes simulating a premium gift box/print stack */}
          <div className="relative aspect-[4/5] w-full max-w-lg mx-auto md:ml-auto md:mr-0 group">
            <div className="absolute inset-0 bg-neutral-200 rounded-[2rem] transform rotate-3 transition-transform duration-700 group-hover:rotate-6"></div>
            <div className="absolute inset-0 bg-rose-100 rounded-[2rem] transform -rotate-2 transition-transform duration-700 group-hover:-rotate-4"></div>
            
            <div className="relative h-full w-full bg-white rounded-[2rem] shadow-2xl shadow-neutral-900/10 overflow-hidden border border-neutral-100 flex flex-col justify-between transform transition-transform duration-700 hover:-translate-y-2 group-hover:scale-100">
              <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop" alt="Premium Gift Box" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
              </div>
              
              <div className="relative z-10 p-8 pt-auto flex flex-col h-full justify-between">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-auto shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                </div>
                
                <div className="mt-auto text-white">
                  <h3 className="font-serif text-3xl font-bold mb-4 text-balance">The Executive Box</h3>
                  <p className="text-neutral-200 mb-8 leading-relaxed">A luxury curation of branded essentials, perfect for high-value clients and executive teams.</p>
                  <div className="flex items-center justify-between border-t border-white/20 pt-6">
                    <span className="font-medium text-lg">From ₦45,000</span>
                    <Link to="/catalog" className="text-rose-400 font-semibold cursor-pointer hover:underline underline-offset-4 decoration-2">Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating aesthetic elements */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-yellow-200 rounded-full blur-2xl opacity-60 mix-blend-multiply"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-300 rounded-full blur-3xl opacity-40 mix-blend-multiply"></div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-white py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 mb-6 text-balance">
                Curated for <br/><span className="text-rose-600 italic font-light">Impact.</span>
              </h2>
              <p className="text-xl text-neutral-500 max-w-md font-light">We combine premium materials with unmatched craftsmanship to bring your ideas to life.</p>
            </div>
            <Link to="/catalog" className="text-neutral-900 font-semibold border-b-2 border-neutral-900 pb-1 hover:text-rose-600 hover:border-rose-600 transition-colors uppercase tracking-wider text-sm flex items-center gap-2">
              View All Categories 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Category 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-[#F5F5F0] rounded-2xl overflow-hidden relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <div className="w-full h-full bg-neutral-200 transform transition-transform duration-700 group-hover:scale-105 flex items-center justify-center text-neutral-400">
                  <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop" alt="Wedding Souvenirs" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-2xl font-bold font-serif mb-2 group-hover:text-rose-600 transition-colors">Wedding & Event Souvenirs</h3>
              <p className="text-neutral-500">Mugs, jotters, and premium paper bags crafted for unforgettable moments.</p>
            </div>

            {/* Category 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-[#F5F5F0] rounded-2xl overflow-hidden relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <div className="w-full h-full bg-rose-50 transform transition-transform duration-700 group-hover:scale-105 flex items-center justify-center text-rose-300">
                  <img src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1000&auto=format&fit=crop" alt="Brand Identity Print" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-2xl font-bold font-serif mb-2 group-hover:text-rose-600 transition-colors">Brand Identity & Print</h3>
              <p className="text-neutral-500">High-end business cards, letterheads, and promotional materials.</p>
            </div>

            {/* Category 3 */}
            <div className="group cursor-pointer lg:mt-12">
              <div className="aspect-[4/3] bg-[#F5F5F0] rounded-2xl overflow-hidden relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <div className="w-full h-full bg-neutral-900 transform transition-transform duration-700 group-hover:scale-105 flex items-center justify-center text-neutral-700">
                  <img src="https://images.unsplash.com/photo-1558024220-b4afce668d88?q=80&w=1000&auto=format&fit=crop" alt="Corporate Gifting" className="w-full h-full object-cover opacity-80" />
                </div>
              </div>
              <h3 className="text-2xl font-bold font-serif mb-2 group-hover:text-rose-600 transition-colors">Corporate Gifting</h3>
              <p className="text-neutral-500">Curated luxury packages starting from ₦18,000 for your best clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Banner Section */}
      <section className="bg-rose-600 text-white py-24 px-6 relative overflow-hidden">
        {/* Decorative background typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[15vw] opacity-10 font-black whitespace-nowrap pointer-events-none select-none italic">
          AS DESIGN CRAFT
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10 leading-tight">
            Stop settling for mediocre print. <br/>
            Demand the <span className="italic font-light text-rose-200">extraordinary.</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-12 text-rose-100">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2">10k+</span>
              <span className="text-sm uppercase tracking-widest">Happy Clients</span>
            </div>
            <div className="w-px h-12 bg-rose-400/50 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2">24h</span>
              <span className="text-sm uppercase tracking-widest">Turnaround</span>
            </div>
            <div className="w-px h-12 bg-rose-400/50 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2">100%</span>
              <span className="text-sm uppercase tracking-widest">Quality Guarantee</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
