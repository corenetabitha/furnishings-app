import ProductCard from '../Components/ProductCard';

export default function CategoryPage({ category, products, addToCart }) {
  return (
    <div className="category-page">
      <h1 className="text-3xl font-bold mb-8">{category.name} Collection</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
      
      {products.length === 0 && (
        <p className="text-gray-500">No products found in this category.</p>
      )}
    </div>
  );
}