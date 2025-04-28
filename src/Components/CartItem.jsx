export default function CartItem({ item, onRemove }) {
    return (
      <div className="flex justify-between items-center bg-white p-3 rounded">
        <div>
          <h3 className="font-medium">{item.name}</h3>
          <p>${item.price}</p>
        </div>
        <button 
          onClick={onRemove}
          className="text-red-600 hover:text-red-800"
        >
          Remove
        </button>
      </div>
    );
  }