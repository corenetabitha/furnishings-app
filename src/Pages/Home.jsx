import { Link } from 'react-router-dom';

export default function Home({ setCurrentPage }) {
  const featuredCategories = [
    {
      id: 1,
      name: "Patio Furniture",
      slug: "patio",
      image: "/patio-category.jpg",
      description: "Refresh your outdoor living space"
    },
    {
      id: 2,
      name: "Dining Sets",
      slug: "dining",
      image: "/dining-category.jpg",
      description: "Elegant solutions for family meals"
    },
    {
      id: 3,
      name: "Home Office",
      slug: "office",
      image: "/office-category.jpg",
      description: "Productive and comfortable workspaces"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah J.",
      comment: "The patio set transformed our backyard into a vacation spot!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael T.",
      comment: "Excellent quality furniture at reasonable prices.",
      rating: 4
    },
    {
      id: 3,
      name: "Emma R.",
      comment: "Fast delivery and easy assembly. Will shop again!",
      rating: 5
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Elevate Your Living Space</h1>
          <p>Premium furniture for every room in your home</p>
          <button 
            className="cta-button"
            onClick={() => setCurrentPage('products')}
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="featured-categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          {featuredCategories.map(category => (
            <div key={category.id} className="category-card">
              <div className="category-image">
                <img src={category.image} alt={category.name} />
              </div>
              <div className="category-info">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <button 
                  className="category-button"
                  onClick={() => setCurrentPage('products')}
                >
                  View Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offer */}
      <section className="special-offer">
        <div className="offer-content">
          <h2>Summer Sale</h2>
          <p>Up to 30% off selected items</p>
          <button 
            className="offer-button"
            onClick={() => setCurrentPage('products')}
          >
            Shop the Sale
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="comment">"{testimonial.comment}"</p>
              <p className="name">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <h2>Stay Updated</h2>
        <p>Subscribe for exclusive offers and design tips</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
}