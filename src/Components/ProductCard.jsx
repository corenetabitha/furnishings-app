export default function ProductCard({ product, onAddToCart }) {
    return (
      <div className="bg-white p-4 shadow rounded">
        <div className="bg-gray-200 h-40 mb-2"></div>
        <h3 className="font-bold">{product.name}</h3>
        <p className="mb-2">${product.price}</p>
        <button 
          onClick={onAddToCart}
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    );
  }