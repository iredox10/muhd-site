import { Route } from '@tanstack/react-router'
import { rootRoute } from './__root'

export const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

function About() {
  return (
    <div className="bg-[#F5F5F0] min-h-screen pt-32 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h1 className="font-serif text-5xl md:text-8xl font-bold tracking-tighter text-neutral-950 mb-12">
          We believe <span className="italic font-light text-rose-600">quality</span> is the loudest voice.
        </h1>
        
        <div className="aspect-video w-full bg-neutral-200 rounded-[2rem] mb-24 overflow-hidden relative">
          <div className="absolute inset-0 bg-neutral-900/5 mix-blend-multiply"></div>
          <div className="w-full h-full flex items-center justify-center text-neutral-400 italic font-serif text-2xl">
            Atelier / Studio Image
          </div>
        </div>

        <div className="prose prose-lg md:prose-xl text-neutral-600 mx-auto font-light leading-relaxed text-left">
          <p className="drop-cap">
            <span className="float-left text-7xl font-serif font-bold text-neutral-950 mr-4 leading-none mt-2">G</span>
            iftPrint began with a simple observation: the Nigerian printing and corporate gifting industry was saturated with low-quality, mass-produced items that failed to capture the true essence of the brands they represented.
          </p>
          <p className="mt-8">
            We set out to change that. Operating out of our state-of-the-art facilities in Kano and Katsina, we merge traditional craftsmanship with modern printing technology. 
          </p>
          <p className="mt-8">
            Every business card, every luxury package, every branded mug is treated not as a mere commodity, but as a tangible extension of your identity. We are obsessed with paper weights, foil stamping, structural integrity, and the unboxing experience.
          </p>
          
          <blockquote className="border-l-4 border-rose-600 pl-8 my-16 text-3xl font-serif italic text-neutral-900 leading-snug">
            "A gift is a statement. A poorly printed card is an apology. We only deal in statements."
          </blockquote>
          
          <p>
            Whether you are a local startup looking for your first set of premium business cards or an enterprise corporation ordering 5,000 executive gift boxes, our promise remains the same: <strong>Uncompromising Quality. Delivered.</strong>
          </p>
        </div>
      </div>
    </div>
  )
}