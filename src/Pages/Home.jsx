export default function Home({ categories, navigateToCategory, setCurrentPage }) {
  const featuredProducts = [
    { id: 1, name: "Patio Chair Set", price: 399, image: "/patio-chair.jpg", category: "patio" },
    { id: 7, name: "Dining Table", price: 499, image: "/dining-table.jpg", category: "dining" },
    { id: 13, name: "Office Desk", price: 349, image: "/office-desk.jpg", category: "office" }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero bg-gray-800 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Elevate Your Living Space</h1>
          <p className="text-xl mb-8">Premium furnishings for every room in your home</p>
          <button 
            onClick={() => setCurrentPage('products')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
          >
            Shop All Products
          </button>
          <button 
  onClick={() => setCurrentPage('signup')}
  className="mt-4 bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-lg"
>
  Create Account
</button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 3).map(category => (
              <div 
                key={category.id} 
                className="category-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigateToCategory(category)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <button className="mt-2 text-blue-600 hover:text-blue-800">
                    View Collection →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="font-bold text-lg mb-2">${product.price}</p>
                  <button 
                    onClick={() => navigateToCategory(
                      categories.find(cat => cat.slug === product.category)
                    )}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    View Similar Products
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}