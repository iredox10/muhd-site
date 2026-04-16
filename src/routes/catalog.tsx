import { Route, Link } from '@tanstack/react-router'
import { rootRoute } from './__root'
import { useCartStore } from '../store/cartStore'
import { ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import { products, categories } from '../data/products'
import { motion, AnimatePresence } from 'framer-motion'

export const catalogRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/catalog',
  component: Catalog,
})

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function Catalog() {
  const { addItem } = useCartStore();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white pt-10 pb-32"
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="mb-16 border-b border-neutral-200 pb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl font-bold tracking-tighter text-neutral-950 mb-6"
          >
            The <span className="italic font-light text-rose-600">Collection</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-neutral-500 font-light max-w-2xl"
          >
            Explore our meticulously curated selection of premium print materials and corporate gifting essentials.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="sticky top-32">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-6">Categories</h3>
              <ul className="space-y-4">
                {categories.map((cat, i) => (
                  <li key={i}>
                    <button 
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-sm font-medium transition-colors ${selectedCategory === cat ? 'text-rose-600' : 'text-neutral-500 hover:text-neutral-900'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <motion.main 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            key={selectedCategory} 
            className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div 
                  variants={itemVariants}
                  layout
                  key={product.id} 
                  className="group cursor-pointer"
                >
                  <Link to="/catalog/$productId" params={{ productId: product.id.toString() }} className="block relative">
                    <div className={`aspect-[4/5] w-full ${product.imgColor} rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center`}>
                      <motion.img 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-neutral-900/10 lg:bg-transparent lg:group-hover:bg-neutral-900/10 transition-colors duration-300 flex flex-col justify-end p-4 lg:p-6 pointer-events-none">
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            addItem(product);
                          }}
                          className="bg-white/90 backdrop-blur-sm text-neutral-900 hover:bg-rose-600 hover:text-white px-6 py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 shadow-lg flex items-center justify-center gap-2 pointer-events-auto"
                        >
                          <ShoppingBag className="w-5 h-5" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </Link>
                  <div className="flex justify-between items-start gap-4">
                    <Link to="/catalog/$productId" params={{ productId: product.id.toString() }} className="block flex-1">
                      <h3 className="font-serif font-bold text-xl text-neutral-900 mb-1 group-hover:text-rose-600 transition-colors line-clamp-2">
                        {product.title}
                      </h3>
                      <p className="text-neutral-500 text-sm">{product.category}</p>
                    </Link>
                    <span className="font-medium text-neutral-900 whitespace-nowrap">{product.price}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.main>
        </div>
      </div>
    </motion.div>
  )
}
