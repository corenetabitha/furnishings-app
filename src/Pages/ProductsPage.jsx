export default function ProductsPage({ categories, navigateToCategory }) {
    return (
      <div className="products-page">
        <h1 className="text-3xl font-bold mb-8">All Categories</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
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
                  View Products →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }