import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Category.css';

const Category = () => {
  const { categoryName } = useParams();
  const { addToCart } = useCart();

  // Complete category data
  const categoryData = {
    'bistro-furniture': {
      name: 'Bistro Furniture',
      products: [
        { id: 1, name: 'Parisian Bistro Chair', price: 149.99, image: '/assets/bistro-chair.jpg' },
        { id: 2, name: 'Cafe Table Set', price: 299.99, image: '/assets/bistro-table.jpg' },
        { id: 3, name: 'Bar Stool', price: 129.99, image: '/assets/bistro-stool.jpg' },
        { id: 4, name: 'Bistro Bench', price: 199.99, image: '/assets/bistro-bench.jpg' },
        { id: 5, name: 'Round Bistro Table', price: 249.99, image: '/assets/bistro-round.jpg' },
        { id: 6, name: 'Metal Bistro Set', price: 399.99, image: '/assets/bistro-set.jpg' }
      ]
    },
    'home-decor': {
      name: 'Home Decor',
      products: [
        { id: 7, name: 'Decorative Pillows', price: 39.99, image: '/assets/decor-pillows.jpg' },
        { id: 8, name: 'Wall Art', price: 89.99, image: '/assets/decor-art.jpg' },
        { id: 9, name: 'Vases', price: 49.99, image: '/assets/decor-vase.jpg' },
        { id: 10, name: 'Candles', price: 24.99, image: '/assets/decor-candle.jpg' },
        { id: 11, name: 'Throw Blanket', price: 59.99, image: '/assets/decor-blanket.jpg' },
        { id: 12, name: 'Mirror', price: 129.99, image: '/assets/decor-mirror.jpg' }
      ]
    },
    'outdoor-patio': {
      name: 'Outdoor Patio',
      products: [
        { id: 13, name: 'Patio Dining Set', price: 899.99, image: '/assets/patio-set.jpg' },
        { id: 14, name: 'Adirondack Chair', price: 199.99, image: '/assets/patio-chair.jpg' },
        { id: 15, name: 'Outdoor Sectional', price: 1299.99, image: '/assets/patio-sectional.jpg' },
        { id: 16, name: 'Patio Umbrella', price: 149.99, image: '/assets/patio-umbrella.jpg' },
        { id: 17, name: 'Outdoor Coffee Table', price: 249.99, image: '/assets/patio-table.jpg' },
        { id: 18, name: 'Hanging Egg Chair', price: 349.99, image: '/assets/patio-hanging.jpg' }
      ]
    },
    'dining-room': {
      name: 'Dining Room',
      products: [
        { id: 19, name: 'Farmhouse Dining Table', price: 799.99, image: '/assets/dining-table.jpg' },
        { id: 20, name: 'Upholstered Dining Chairs', price: 179.99, image: '/assets/dining-chairs.jpg' },
        { id: 21, name: 'Modern Buffet', price: 599.99, image: '/assets/dining-buffet.jpg' },
        { id: 22, name: 'Formal Dining Set', price: 1499.99, image: '/assets/dining-set.jpg' },
        { id: 23, name: 'Bar Cart', price: 199.99, image: '/assets/dining-cart.jpg' },
        { id: 24, name: 'China Cabinet', price: 899.99, image: '/assets/dining-cabinet.jpg' }
      ]
    },
    'office': {
      name: 'Office',
      products: [
        { id: 25, name: 'Executive Desk', price: 699.99, image: '/assets/office-desk.jpg' },
        { id: 26, name: 'Ergonomic Chair', price: 349.99, image: '/assets/office-chair.jpg' },
        { id: 27, name: 'Bookshelf', price: 249.99, image: '/assets/office-shelf.jpg' },
        { id: 28, name: 'Filing Cabinet', price: 199.99, image: '/assets/office-cabinet.jpg' },
        { id: 29, name: 'Standing Desk', price: 499.99, image: '/assets/office-standing.jpg' },
        { id: 30, name: 'Office Lounge Chair', price: 399.99, image: '/assets/office-lounge.jpg' }
      ]
    }
  };

  const category = categoryData[categoryName] || categoryData['bistro-furniture'];

  return (
    <div className="category-page">
      <h1>{category.name}</h1>
      <div className="products-grid">
        {category.products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;