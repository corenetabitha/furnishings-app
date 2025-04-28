import { useEffect, useState } from 'react';
import Header from './Components/Header';
// import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import ProductListing from './Pages/ProductListing';
import CartPage from './Pages/CartPage';


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [furnitureData, setFurnitureData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Products")
    .then(res => res.json())
    .then(data => {
      setFurnitureData(data);
    })
  },[])
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="App">
      <Header cartCount={cart.length} setCurrentPage={setCurrentPage} />
      
      <main className="container mx-auto p-4">
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === 'products' && (
          <ProductListing 
            furnitureData={furnitureData}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            addToCart={addToCart}
          />
        )}
        {currentPage === 'cart' && (
          <CartPage 
            cart={cart} 
            removeFromCart={removeFromCart}
          />
        )}
      </main>
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;