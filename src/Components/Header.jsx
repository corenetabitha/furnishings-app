export default function Header({ user, cartCount, setCurrentPage }) {
  return (
    <header className="bg-primary-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 
          className="text-2xl font-bold cursor-pointer hover:text-accent-300 transition-colors font-display"
          onClick={() => setCurrentPage('home')}
        >
          Crafty Furnishings
        </h1>
        <nav className="flex items-center space-x-6">
          {user ? (
            <span className="text-sm">Welcome, {user.email}</span>
          ) : (
            <button 
              className="hover:text-accent-300 transition-colors"
              onClick={() => setCurrentPage('signup')}
            >
              Sign Up
            </button>
          )}
          <button 
            className="hover:text-accent-300 transition-colors"
            onClick={() => setCurrentPage('products')}
          >
            Products
          </button>
          <button 
            className="hover:text-accent-300 transition-colors"
            onClick={() => setCurrentPage('about')}
          >
            About
          </button>
          <button 
            className="flex items-center hover:text-accent-300 transition-colors"
            onClick={() => setCurrentPage('cart')}
          >
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="ml-1 bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}