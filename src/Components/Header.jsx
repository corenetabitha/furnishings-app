export default function Header({ cartCount, setCurrentPage }) {
    return (
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <h1 
            className="text-xl font-bold cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            Furnish Haven
          </h1>
          <div className="flex gap-4">
            <button 
              className="hover:underline"
              onClick={() => setCurrentPage('products')}
            >
              Products
            </button>
            <button 
              className="hover:underline"
              onClick={() => setCurrentPage('cart')}
            >
              Cart ({cartCount})
            </button>
          </div>
        </div>
      </header>
    );
  }