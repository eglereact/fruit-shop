import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";

function CartTotals() {
  const { total_amount, shipping_fee } = useCartContext();
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between mx-4 mt-4 mb-20">
        <div>
          <h2 className="text-gary-800 font-bold text-xl mb-6">
            Discount Codes
          </h2>
          <div className="flex space-x-4">
            <input
              placeholder="Enter your coupon code"
              className="outline-none border border-gray-200 px-6 py-2"
            />
            <button
              type="button"
              className="bg-gray-600 text-white uppercase px-6 py-2 font-bold text-sm"
            >
              Apply coupon
            </button>
          </div>
        </div>
        <div className="bg-gray-100 w-1/2 px-6 py-4">
          <h2 className="text-gary-800 font-bold text-xl mb-6">Cart Total</h2>
          <div className="flex justify-between items-center pb-4 border-b border-gray-200">
            <h3 className="font-bold text-gray-800"> Subtotal</h3>
            <h3 className="font-bold text-red-500 text-xl">
              ${total_amount.toFixed(2)}
            </h3>
          </div>
          <div className="flex justify-between items-center pt-4">
            <h3 className="font-bold text-gray-800">Total</h3>
            <h3 className="font-bold text-red-500 text-xl">
              ${(total_amount + shipping_fee).toFixed(2)}
            </h3>
          </div>
          <Link
            to="/checkout"
            className="uppercase bg-[#7FAD39] py-2 my-6 text-white font-bold block text-sm text-center"
          >
            PROCEED TO CHECKOUT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartTotals;
