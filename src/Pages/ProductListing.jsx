import CategorySelector from '../Components/CategorySelector';
import ProductCard from '../Components/ProductCard';

export default function ProductListing({ 
  furnitureData, 
  selectedCategory, 
  setSelectedCategory, 
  addToCart 
}) {
  const getProducts = () => {
    if (selectedCategory) {
      return furnitureData.products[selectedCategory.slug] || [];
    }
    return Object.values(furnitureData.products).flat();
  };

  const products = getProducts();

  return (
    <div>
      <h2 className="text-2xl mb-4">Our Products</h2>
      
      <CategorySelector 
        categories={furnitureData.categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}