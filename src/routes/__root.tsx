import { Outlet } from '@tanstack/react-router'
export function Root() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-neutral-900 font-sans selection:bg-rose-500 selection:text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between border-b border-neutral-200/50 bg-[#F5F5F0]/80 backdrop-blur-md">
        <div className="font-serif text-2xl font-bold tracking-tighter">
          <span className="text-rose-600">Gift</span>Print
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-rose-600 transition-colors">Catalog</a>
          <a href="#" className="hover:text-rose-600 transition-colors">Corporate</a>
          <a href="#" className="hover:text-rose-600 transition-colors">About Us</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-sm font-medium hover:text-rose-600 transition-colors">Log in</button>
          <button className="bg-neutral-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-rose-600 transition-colors shadow-lg shadow-neutral-900/10">
            Start Creating
          </button>
        </div>
      </nav>
      
      <main className="pt-24">
        <Outlet />
      </main>

      <footer className="bg-neutral-900 text-neutral-400 py-16 px-6 md:px-12 mt-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="font-serif text-3xl font-bold text-white tracking-tighter mb-6">
              <span className="text-rose-500">Gift</span>Print
            </div>
            <p className="max-w-sm mb-8">Elevate your brand and celebrations with world-class printing and premium corporate gifting.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-6">Products</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-rose-400 transition-colors">Business Cards</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Corporate Gifts</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Premium Souvenirs</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Marketing Materials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-rose-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
