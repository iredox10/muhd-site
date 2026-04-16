export type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  image: string;
  imgColor: string;
  description: string;
  features: string[];
  gallery: string[];
};

export const categories = [
  "All", "Corporate Packages", "Business Print", "Drinkware", "Bags & Packaging", "Stationery"
];

export const products: Product[] = [
  { 
    id: 1, 
    title: "The Executive Box", 
    price: "₦45,000", 
    category: "Corporate Packages", 
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop", 
    imgColor: "bg-neutral-900",
    description: "A meticulously curated executive gift box featuring premium materials. Perfect for welcoming new executives or thanking high-value clients.",
    features: ["Custom engraved pen", "Leather-bound notebook", "Minimalist ceramic mug", "Premium packaging"],
    gallery: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    ]
  },
  { 
    id: 2, 
    title: "Premium Matte Business Cards (x100)", 
    price: "₦12,500", 
    category: "Business Print", 
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop", 
    imgColor: "bg-rose-50",
    description: "Make a lasting impression with our ultra-thick, soft-touch matte business cards. Printed on 400gsm luxury cardstock.",
    features: ["400gsm premium stock", "Soft-touch matte finish", "Full color double-sided", "Includes custom design check"],
    gallery: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588697157833-289b4f51e064?q=80&w=800&auto=format&fit=crop"
    ]
  },
  { 
    id: 3, 
    title: "Minimalist Ceramic Mug", 
    price: "₦5,000", 
    category: "Drinkware", 
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800&auto=format&fit=crop", 
    imgColor: "bg-stone-200",
    description: "Elegant and understated, this 11oz ceramic mug is perfect for the modern office. Available with subtle logo engraving or printing.",
    features: ["11oz capacity", "Dishwasher safe", "Microwave safe", "Matte exterior, glossy interior"],
    gallery: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1481833759216-795a12261dc6?q=80&w=800&auto=format&fit=crop"
    ]
  },
  { 
    id: 4, 
    title: "Luxury Paper Bags (x50)", 
    price: "₦35,000", 
    category: "Bags & Packaging", 
    image: "https://images.unsplash.com/photo-1558024220-b4afce668d88?q=80&w=800&auto=format&fit=crop", 
    imgColor: "bg-neutral-100",
    description: "Elevate your brand packaging with our premium kraft and art paper bags. Features reinforced handles and a reinforced base.",
    features: ["Rope handles", "Reinforced base", "Foil stamping available", "Eco-friendly options"],
    gallery: [
      "https://images.unsplash.com/photo-1558024220-b4afce668d88?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800&auto=format&fit=crop"
    ]
  },
  { 
    id: 5, 
    title: "Foil Stamped Letterheads", 
    price: "₦28,000", 
    category: "Business Print", 
    image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=800&auto=format&fit=crop", 
    imgColor: "bg-orange-50",
    description: "Communicate with authority. Our foil-stamped letterheads are printed on 120gsm textured conqueror paper.",
    features: ["120gsm textured paper", "Gold or silver foil stamping", "Laser printer safe", "Pack of 500"],
    gallery: [
      "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=800&auto=format&fit=crop"
    ]
  },
  { 
    id: 6, 
    title: "Onboarding Kit", 
    price: "₦30,000", 
    category: "Corporate Packages", 
    image: "https://images.unsplash.com/photo-1513885058097-f586940eb1d2?q=80&w=800&auto=format&fit=crop", 
    imgColor: "bg-blue-50",
    description: "The perfect welcome for new hires. Includes essential branded merchandise to make them feel part of the team from day one.",
    features: ["Branded T-Shirt", "Notebook & Pen", "Lanyard & ID Holder", "Welcome Card"],
    gallery: [
      "https://images.unsplash.com/photo-1513885058097-f586940eb1d2?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop"
    ]
  },
];
