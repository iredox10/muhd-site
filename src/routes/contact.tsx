import { Route } from '@tanstack/react-router'
import { rootRoute } from './__root'

export const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
})

function Contact() {
  return (
    <div className="bg-[#F5F5F0] min-h-screen pt-32 pb-32 antialiased">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Info Section */}
          <div className="flex flex-col justify-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter text-neutral-950 mb-8">
              Get in <span className="italic font-light text-rose-600">Touch.</span>
            </h1>
            <p className="text-xl text-neutral-600 font-light mb-16 max-w-md leading-relaxed">
              Whether you have a question about our premium prints, need a custom corporate gifting quote, or just want to say hello, we are here for you.
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-2">Email</h3>
                <a href="mailto:hello@asdesigncraft.com" className="text-2xl font-serif font-medium text-neutral-900 hover:text-rose-600 transition-colors">
                  hello@asdesigncraft.com
                </a>
              </div>
              
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-2">Phone</h3>
                <a href="tel:+2348058573978" className="text-2xl font-serif font-medium text-neutral-900 hover:text-rose-600 transition-colors">
                  080 5857 3978
                </a>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-2">Studios</h3>
                <address className="not-italic text-lg text-neutral-600 font-light space-y-4">
                  <p>
                    <span className="font-medium text-neutral-900">Kano Studio:</span><br />
                    Zoo Road opp First Bank, Kano
                  </p>
                  <p>
                    <span className="font-medium text-neutral-900">Katsina Studio:</span><br />
                    IBB Way, Katsina
                  </p>
                </address>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white p-10 md:p-16 rounded-[2rem] shadow-xl shadow-neutral-900/5 border border-neutral-100 flex flex-col justify-center">
            <h2 className="font-serif text-3xl font-bold mb-8 text-neutral-900">Send a Message</h2>
            <form 
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for reaching out! A member of the AS Design Craft team will get back to you shortly.");
                (e.target as HTMLFormElement).reset();
              }}
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-neutral-700">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all" 
                  placeholder="Jane Doe" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-neutral-700">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all" 
                  placeholder="jane@company.com" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-700">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={5} 
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all resize-none" 
                  placeholder="How can we help you craft something extraordinary?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-neutral-900 hover:bg-rose-600 text-white px-10 py-5 rounded-xl font-bold uppercase tracking-wider transition-colors shadow-lg mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}