export default function CartSummary({ total }) {
    return (
      <div className="mt-4">
        <div className="font-bold border-t pt-4">
          Total: ${total}
        </div>
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Checkout
        </button>
      </div>
    );
  }