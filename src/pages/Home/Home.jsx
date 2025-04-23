import { Link } from 'react-router-dom';
import './Home.css';

import bistroImg from '../../assets/bistro.jpg';
import decorImg from '../../assets/home decor.jpg';
import patioImg from '../../assets/patio.jpg';
import diningImg from '../../assets/dining.jpg';
import officeImg from '../../assets/office.jpg';


const Home = () => {
  const categories = [
    {
      name: 'Bistro Furniture',
      image: '/assets/bistro.jpg',
      description: 'Charming café-style furniture for your home'
    },
    {
      name: 'Home Decor',
      image: '/assets/home decor.jpg',
      description: 'Elevate your space with our curated collection'
    },
    {
      name: 'Outdoor Patio',
      image: '/assets/patio.jpg',
      description: 'Durable and stylish outdoor furnishings'
    },
    {
      name: 'Dining Room',
      image: '/assets/dining.jpg',
      description: 'Gather around our beautiful dining sets'
    },
    {
      name: 'Office',
      image: '/assets/office.jpg',
      description: 'Productivity meets comfort'
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Crafty Furnishings</h1>
          <p>Premium customizable home furnishings</p>
          <Link to="/products" className="btn">Shop Now</Link>
        </div>
      </section>

      <section className="categories">
        <h2>Shop By Category</h2>
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link 
              to={`/category/${category.name.toLowerCase().replace(' ', '-')}`} 
              key={index} 
              className="category-card"
            >
              <div 
                className="category-image" 
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              <div className="category-info">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;