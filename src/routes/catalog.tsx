import { Route } from '@tanstack/react-router'
import { rootRoute } from './__root'

export const catalogRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/catalog',
  component: Catalog,
})

function Catalog() {
  const categories = [
    "All", "Corporate Packages", "Business Print", "Drinkware", "Bags & Packaging", "Stationery"
  ];

  const products = [
    { id: 1, title: "The Executive Box", price: "₦45,000", category: "Corporate Packages", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop", imgColor: "bg-neutral-900" },
    { id: 2, title: "Premium Matte Business Cards (x100)", price: "₦12,500", category: "Business Print", image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop", imgColor: "bg-rose-50" },
    { id: 3, title: "Minimalist Ceramic Mug", price: "₦5,000", category: "Drinkware", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800&auto=format&fit=crop", imgColor: "bg-stone-200" },
    { id: 4, title: "Luxury Paper Bags (x50)", price: "₦35,000", category: "Bags & Packaging", image: "https://images.unsplash.com/photo-1558024220-b4afce668d88?q=80&w=800&auto=format&fit=crop", imgColor: "bg-neutral-100" },
    { id: 5, title: "Foil Stamped Letterheads", price: "₦28,000", category: "Business Print", image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=800&auto=format&fit=crop", imgColor: "bg-orange-50" },
    { id: 6, title: "Onboarding Kit", price: "₦30,000", category: "Corporate Packages", image: "https://images.unsplash.com/photo-1513885058097-f586940eb1d2?q=80&w=800&auto=format&fit=crop", imgColor: "bg-blue-50" },
  ];

  return (
    <div className="min-h-screen bg-white pt-10 pb-32">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="mb-16 border-b border-neutral-200 pb-16">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter text-neutral-950 mb-6">
            The <span className="italic font-light text-rose-600">Collection</span>
          </h1>
          <p className="text-xl text-neutral-500 font-light max-w-2xl">
            Explore our meticulously curated selection of premium print materials and corporate gifting essentials.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="sticky top-32">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-6">Categories</h3>
              <ul className="space-y-4">
                {categories.map((cat, i) => (
                  <li key={i}>
                    <button className={`text-sm font-medium transition-colors ${i === 0 ? 'text-rose-600' : 'text-neutral-500 hover:text-neutral-900'}`}>
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className={`aspect-[4/5] w-full ${product.imgColor} rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center`}>
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 transition-colors duration-300"></div>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-neutral-900 mb-1 group-hover:text-rose-600 transition-colors line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-neutral-500 text-sm">{product.category}</p>
                  </div>
                  <span className="font-medium text-neutral-900 whitespace-nowrap">{product.price}</span>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  )
}