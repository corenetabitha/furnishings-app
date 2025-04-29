import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Home from './Pages/Home';
import ProductsPage from './Pages/ProductsPage';
import CategoryPage from './Pages/CategoryPage';
import CartPage from './Pages/CartPage';
import AboutPage from './Pages/AboutPage';
import SignUpPage from './Pages/SignUpPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentCategory, setCurrentCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [furnitureData, setFurnitureData] = useState({
    categories: [],
    products: {}
  });

  useEffect(() => {
    const data = {
      categories: [
        { id: 1, name: "Patio", slug: "patio", image: "/patio-category.jpg" },
        { id: 2, name: "Dining", slug: "dining", image: "/dining-category.jpg" },
        { id: 3, name: "Office", slug: "office", image: "/office-category.jpg" },
        { id: 4, name: "Home Decor", slug: "home-decor", image: "/home decor-category.jpg" },
        { id: 5, name: "Bistro", slug: "bistro", image: "/bistro-category.jpg" },
        { id: 6, name: "Bedroom", slug: "bedroom", image: "/bedroom-category.jpg" }
      ],
      products: {
        patio: [
          { id: 1, name: "Patio Chair Set", price: 399, image: "/patio-chair.jpg", description: "Weather-resistant wicker chairs (set of 4)" },
          { id: 2, name: "Outdoor Table", price: 299, image: "/patio-table.jpg", description: "Teak wood dining table, seats 6" },
          { id: 3, name: "Sun Lounger", price: 199, image: "/patio-lounger.jpg", description: "Adjustable reclining outdoor chair" },
          { id: 4, name: "Patio Umbrella", price: 129, image: "/patio-umbrella.jpg", description: "10ft cantilever umbrella with tilt" },
          { id: 5, name: "Outdoor Sofa", price: 599, image: "/patio-sofa.jpg", description: "3-seater all-weather sectional" },
          { id: 6, name: "Garden Bench", price: 249, image: "/patio-bench.jpg", description: "Rustic wooden bench with backrest" }
        ],
        dining: [
          { id: 7, name: "Dining Table", price: 499, image: "/dining-table.jpg", description: "Solid oak dining table, seats 8" },
          { id: 8, name: "Dining Chairs", price: 199, image: "/dining-chair.jpg", description: "Set of 4 upholstered dining chairs" },
          { id: 9, name: "Buffet Table", price: 399, image: "/dining-buffet.jpg", description: "Mid-century modern buffet with storage" },
          { id: 10, name: "Wine Cart", price: 149, image: "/dining-cart.jpg", description: "Set of 2 adjustable bar stools" },
          { id: 11, name: "Dining Bench", price: 249, image: "/dining-bench.jpg", description: "Wooden bench for dining table" },
          { id: 12, name: "China Cabinet", price: 599, image: "/dining-cabinet.jpg", description: "Glass-front cabinet for dishes" }
        ],
        home_decor: [
          { id: 13, name: "Wall Art", price: 99, image: "/home decor-art.jpg", description: "Abstract canvas painting" }, 
          { id: 14, name: "Decorative Mirror", price: 149, image: "/home decor-mirror.jpg", description: "Round wall mirror with gold frame" },
          { id: 15, name: "Table Lamp", price: 79, image: "/home decor-lamp.jpg", description: "Modern table lamp with LED bulb" },
          { id: 16, name: "Throw Pillows", price: 39, image: "/home decor-pillows.jpg", description: "Set of 2 decorative pillows" },
          { id: 17, name: "Area Rug", price: 199, image: "/home decor-rug.jpg", description: "Soft area rug, 5x7 ft" },
          { id: 18, name: "Vase Set", price: 89, image: "/home decor-vases.jpg", description: "Set of 2 blackout curtains" }
        ],
        office: [
          { id: 19, name: "Office Desk", price: 349, image: "/office-desk.jpg", description: "L-shaped desk with storage" },
          { id: 20, name: "Ergonomic Chair", price: 199, image: "/office-chair.jpg", description: "Adjustable office chair with lumbar support" },
          { id: 21, name: "Bookshelf", price: 299, image: "/office-bookshelf.jpg", description: "5-shelf bookcase in walnut finish" },
          { id: 22, name: "Desk Lamp", price: 59, image: "/office-lamp.jpg", description: "LED desk lamp with USB port" },
          { id: 23, name: "Filing Cabinet", price: 129, image: "/office-cabinet.jpg", description: "2-drawer metal filing cabinet" },
          { id: 24, name: "Office Organizer", price: 49, image: "/office-organizer.jpg", description: "Wooden desk organizer" }
        ],
        bistro: [
          { id: 25, name: "Bistro Table", price: 199, image: "/bistro-table.jpg", description: "Round bistro table with metal base" },
          { id: 26, name: "Bistro Chairs", price: 149, image: "/bistro-chairs.jpg", description: "Set of 2 stackable chairs" },
          { id: 27, name: "Folding Chairs", price: 299, image: "/bistro-folding.jpg", description: "Propane patio heater for outdoor use" },
          { id: 28, name: "Dining Set", price: 399, image: "/bistro-set.jpg", description: "Bar cart with storage and wheels" },
          { id: 29, name: "Side Table", price: 79, image: "/bistro-side.jpg", description: "Outdoor string lights for ambiance" },
          { id: 30, name: "Bar Stool", price: 49, image: "/bistro-stool.jpg", description: "Set of 2 outdoor planters" }
        ],
        bedroom: [
          { id: 31, name: "Bed Frame", price: 499, image: "/bedroom-bed.jpg", description: "Queen size bed frame with storage" },
          { id: 32, name: "Vanity", price: 599, image: "/bedroom-vanity.jpg", description: "Memory foam mattress, queen size" },
          { id: 33, name: "Nightstand", price: 199, image: "/bedroom-nightstand.jpg", description: "Wooden nightstand with drawer" },
          { id: 34, name: "Dresser", price: 399, image: "/bedroom-dresser.jpg", description: "6-drawer dresser in oak finish" },
          { id: 35, name: "Bedside Lamp", price: 129, image: "/bedroom-lamp.jpg", description: "Queen size bedding set with duvet" },
          { id: 36, name: "Amoire", price: 699, image: "/bedroom-amoire.jpg", description: "Large wardrobe with mirror" }
        ],     
        // ... other categories with 6 products each
      }
    };
    setFurnitureData(data);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const navigateToCategory = (category) => {
    setCurrentCategory(category);
    setCurrentPage('category');
  };

  const handleSignUp = (email) => {
    setUser({ email });
    setCurrentPage('home');
  };

  return (
    <div className="App min-h-screen flex flex-col bg-background-100">
      <Header 
        user={user} 
        cartCount={cart.length} 
        setCurrentPage={setCurrentPage} 
      />
      
      <main className="flex-grow container mx-auto p-4">
        {currentPage === 'home' && (
          <Home 
            categories={furnitureData.categories} 
            navigateToCategory={navigateToCategory}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === 'products' && (
          <ProductsPage 
            categories={furnitureData.categories}
            navigateToCategory={navigateToCategory}
          />
        )}
        {currentPage === 'category' && currentCategory && (
          <CategoryPage 
            category={currentCategory} 
            products={furnitureData.products[currentCategory.slug] || []}
            addToCart={addToCart}
          />
        )}
        {currentPage === 'cart' && (
          <CartPage 
            cart={cart} 
            removeFromCart={removeFromCart}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage />
        )}
        {currentPage === 'signup' && (
          <SignUpPage 
            onSignUp={handleSignUp}
            setCurrentPage={setCurrentPage}
          />
        )}
      </main>
      
      <footer className="bg-primary-800 text-white p-4 text-center">
        © {new Date().getFullYear()} Crafty Furnishings. All rights reserved.
      </footer>
    </div>
  );
}

export default App;