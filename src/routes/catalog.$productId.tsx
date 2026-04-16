import { Route, Link } from '@tanstack/react-router'
import { rootRoute } from './__root'
import { products } from '../data/products'
import { useCartStore } from '../store/cartStore'
import { ShoppingBag, ArrowLeft, Check } from 'lucide-react'
import { useState } from 'react'

export const productDetailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/catalog/$productId',
  component: ProductDetail,
})

function ProductDetail() {
  const { productId } = productDetailRoute.useParams();
  const product = products.find(p => p.id === Number(productId));
  const { addItem } = useCartStore();
  
  const [activeImage, setActiveImage] = useState(product?.image || '');
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-serif mb-4">Product Not Found</h1>
        <Link to="/catalog" className="text-rose-600 underline">Return to Catalog</Link>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white pt-10 pb-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <Link to="/catalog" className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 mb-10 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Catalog
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className={`aspect-square w-full rounded-3xl overflow-hidden ${product.imgColor} flex items-center justify-center p-8`}>
              <img src={activeImage} alt={product.title} className="w-full h-full object-cover shadow-2xl rounded-2xl" />
            </div>
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {product.gallery.map((img, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveImage(img)}
                    className={`shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${activeImage === img ? 'border-neutral-900' : 'border-transparent'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col pt-8">
            <div className="mb-2 text-rose-600 font-bold uppercase tracking-wider text-sm">
              {product.category}
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4">{product.title}</h1>
            <p className="text-2xl font-light text-neutral-500 mb-8">{product.price}</p>
            
            <div className="prose prose-neutral mb-10">
              <p className="text-neutral-600 leading-relaxed">{product.description}</p>
              
              <h3 className="text-lg font-bold text-neutral-900 mt-8 mb-4">Key Features</h3>
              <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                {product.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <button 
              onClick={handleAdd}
              className={`mt-auto w-full py-5 rounded-full font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3 ${
                added ? 'bg-green-600 text-white' : 'bg-neutral-900 text-white hover:bg-neutral-800'
              }`}
            >
              {added ? <Check className="w-5 h-5" /> : <ShoppingBag className="w-5 h-5" />}
              {added ? 'Added to Cart' : 'Add to Cart - ' + product.price}
            </button>
            
            <p className="text-center text-sm text-neutral-500 mt-4">
              Free nationwide delivery on orders over ₦100,000.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
