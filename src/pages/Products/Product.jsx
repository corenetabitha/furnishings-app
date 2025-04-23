import { Link } from 'react-router-dom';
import './Products.css';
// Import images
import bistroImg from '../../assets/bistro.jpg';
import decorImg from '../../assets/home-decor.jpg';
import patioImg from '../../assets/patio.jpg';
import diningImg from '../../assets/dining.jpg';
import officeImg from '../../assets/office.jpg';

const Products = () => {
  const categories = [
    {
      name: 'Bistro Furniture',
      image: bistroImg,
      route: 'bistro-furniture'
    },
    {
      name: 'Home Decor',
      image: decorImg,
      route: 'home-decor'
    },
    {
      name: 'Outdoor Patio',
      image: patioImg,
      route: 'outdoor-patio'
    },
    {
      name: 'Dining Room',
      image: diningImg,
      route: 'dining-room'
    },
    {
      name: 'Office',
      image: officeImg,
      route: 'office'
    }
  ];

  return (
    <div className="products-page">
      <h1>Our Product Categories</h1>
      <div className="products-grid">
        {categories.map((category, index) => (
          <Link 
            to={`/category/${category.route}`} 
            key={index} 
            className="product-category-card"
          >
            <img 
              src={category.image} 
              alt={category.name}
              className="category-image"
            />
            <h3>{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;