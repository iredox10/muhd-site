import { Route } from '@tanstack/react-router'
import { rootRoute } from './__root'

export const termsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/terms',
  component: Terms,
})

function Terms() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-32 antialiased">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tighter text-neutral-950 mb-12">
          Terms of <span className="italic font-light text-rose-600">Service</span>
        </h1>
        
        <div className="prose prose-neutral max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:font-light prose-p:leading-relaxed prose-p:text-neutral-600">
          <p className="text-lg">Last Updated: April 16, 2026</p>
          
          <h2>1. Introduction</h2>
          <p>
            Welcome to AS Design Craft. These Terms of Service ("Terms") govern your access to and use of the AS Design Craft website, products, and services. By accessing or using our services, you agree to be bound by these Terms.
          </p>

          <h2>2. Orders and Proofing</h2>
          <p>
            All custom print orders require client approval of a digital proof before production begins. Once a proof is approved, AS Design Craft is not responsible for any typographical, spelling, or design errors. Volume corporate orders may require a physical proof at an additional cost.
          </p>

          <h2>3. Payment and Pricing</h2>
          <p>
            Prices are listed in Nigerian Naira (₦) and are subject to change without notice. Full payment is required for all retail orders before production. Corporate volume orders may be eligible for a split payment structure (e.g., 70% deposit, 30% upon completion) subject to approval by our enterprise team.
          </p>

          <h2>4. Turnaround and Delivery</h2>
          <p>
            Standard turnaround times are estimated and not guaranteed unless explicitly stated as a "Rush Order" for an additional fee. AS Design Craft is not liable for delays caused by third-party shipping carriers, customs, or acts of God.
          </p>

          <h2>5. Returns and Refunds</h2>
          <p>
            Due to the custom nature of our printed products and corporate gifts, we do not accept returns or offer refunds unless the product is defective or damaged upon arrival. Claims for defects must be made within 48 hours of delivery.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            You represent and warrant that you own or have the appropriate licenses to use all designs, logos, and materials submitted to us for printing. AS Design Craft retains the right to use photos of produced work in our portfolio and marketing materials unless a strict NDA is signed.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at <strong>hello@asdesigncraft.com</strong>.
          </p>
        </div>
      </div>
    </div>
  )
}