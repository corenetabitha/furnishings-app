import CartItem from '../Components/CartItem';
import CartSummary from '../Components/CartSummary';

export default function CartPage({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl mb-4">Your cart is empty</p>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="space-y-4">
            {cart.map((item, index) => (
              <CartItem 
                key={index}
                item={item}
                onRemove={() => removeFromCart(item.id)}
              />
            ))}
          </div>
          
          <CartSummary total={total} />
        </div>
      )}
    </div>
  );
}