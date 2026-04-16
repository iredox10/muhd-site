import { Route } from '@tanstack/react-router'
import { rootRoute } from './__root'

export const corporateRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/corporate',
  component: Corporate,
})

function Corporate() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen pt-32 pb-32 antialiased selection:bg-rose-500">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Hero */}
        <section className="relative min-h-[70vh] flex flex-col justify-center items-start mb-32 z-10">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-rose-600 rounded-full blur-[150px] opacity-10 mix-blend-screen pointer-events-none -z-10"></div>
          
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900 text-rose-400 text-xs font-bold uppercase tracking-widest mb-10 border border-neutral-800">
            <span>B2B & Enterprise Solutions</span>
          </div>

          <h1 className="text-[5rem] md:text-[8rem] lg:text-[10rem] leading-[0.8] font-serif font-black text-white tracking-tighter mb-12 text-balance">
            Leave a <br/> <span className="italic font-light text-rose-500">Legacy.</span>
          </h1>

          <p className="text-xl md:text-3xl text-neutral-400 font-light max-w-3xl leading-relaxed mb-16">
            We handle end-to-end corporate gifting and large-scale print production for Nigeria's most distinguished brands. 
            From conceptualization to doorstep delivery.
          </p>

          <button className="bg-rose-600 hover:bg-rose-700 text-white px-12 py-6 rounded-full text-lg font-bold uppercase tracking-wider transition-all duration-300 shadow-2xl shadow-rose-600/20">
            Request a Consultation
          </button>
        </section>

        {/* Value Props */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-48">
          <div>
            <span className="text-rose-500 font-serif text-6xl italic font-light mb-6 block">01</span>
            <h3 className="text-2xl font-bold font-serif mb-4">Dedicated Account Manager</h3>
            <p className="text-neutral-400 font-light leading-relaxed">
              Every enterprise client is assigned a dedicated expert to oversee your print runs and corporate packages, ensuring 100% accuracy and timely delivery.
            </p>
          </div>
          <div>
            <span className="text-rose-500 font-serif text-6xl italic font-light mb-6 block">02</span>
            <h3 className="text-2xl font-bold font-serif mb-4">Volume Pricing & Scalability</h3>
            <p className="text-neutral-400 font-light leading-relaxed">
              Enjoy tiered pricing structures designed for scale. Whether you need 50 executive gift boxes or 50,000 branded lanyards.
            </p>
          </div>
          <div>
            <span className="text-rose-500 font-serif text-6xl italic font-light mb-6 block">03</span>
            <h3 className="text-2xl font-bold font-serif mb-4">Premium Sourcing</h3>
            <p className="text-neutral-400 font-light leading-relaxed">
              We source the finest materials globally. If you can envision it, we can produce it with uncompromising quality.
            </p>
          </div>
        </section>

        {/* Contact Form CTA */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-900/20 blur-3xl rounded-full"></div>
          <div className="max-w-3xl relative z-10">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8">Ready to elevate your corporate presence?</h2>
            <p className="text-xl text-neutral-400 mb-12">Our enterprise team is ready to craft the perfect solution for your next event, onboarding, or client appreciation strategy.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Company Name" className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-rose-500 transition-colors" />
                <input type="email" placeholder="Work Email" className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-rose-500 transition-colors" />
              </div>
              <textarea placeholder="Tell us about your project or volume needs..." rows={4} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-rose-500 transition-colors resize-none"></textarea>
              <button type="submit" className="bg-white text-neutral-950 hover:bg-neutral-200 px-10 py-5 rounded-full font-bold uppercase tracking-wider transition-colors w-full md:w-auto">
                Submit Inquiry
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}