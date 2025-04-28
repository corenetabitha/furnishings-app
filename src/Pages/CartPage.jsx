import CartItem from '../Components/CartItem';
import CartSummary from '../Components/CartSummary';

export default function CartPage({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2 className="text-2xl mb-4">Your Cart</h2>
      
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="bg-gray-100 p-4 rounded">
          <div className="space-y-2">
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