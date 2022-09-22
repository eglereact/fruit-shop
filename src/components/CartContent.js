import { useCartContext } from "../context/cart_context";
import CartItem from "./CartItem";

function CartContent() {
  const { cart, clearCart } = useCartContext();
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mx-4">
        <div className="flex font-bold text-gray-800 py-4 text-xl border-b border-gray-200">
          <div className="w-1/2">
            <h2>Products</h2>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <h2 className="cart-item">Price</h2>
            <h2 className="cart-item">Quantity</h2>
            <h2 className="cart-item">Total</h2>
            <h2 className="w-1/6"></h2>
          </div>
        </div>
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CartContent;
