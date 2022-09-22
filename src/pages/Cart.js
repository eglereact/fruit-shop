import { Link } from "react-router-dom";
import CartContent from "../components/CartContent";
import CartTotals from "../components/CartTotals";
import PageHero from "../components/PageHero";
import { useCartContext } from "../context/cart_context";

export default function Cart() {
  const { cart, clearCart } = useCartContext();
  if (cart.length < 1) {
    return (
      <div className="flex flex-col items-center my-20 flex-grow">
        <h1 className="md:text-2xl text-gray-800">
          There are no products in your cart.
        </h1>
        <Link
          to="/shop"
          className="bg-[#7FAD39] py-3 px-6 uppercase text-white font-bold mt-4"
        >
          Fill It
        </Link>
      </div>
    );
  }
  return (
    <main>
      <PageHero
        title="Cart"
        image="https://as2.ftcdn.net/v2/jpg/02/71/31/53/1000_F_271315305_1adMzEYpMRFgYO5XdlQMPSJSO9GGYlhP.jpg"
      />
      <CartContent />
      <div className="max-w-6xl mx-auto ">
        <div className="flex justify-between py-6 mx-4">
          <Link
            to="/shop"
            className="uppercase font-bold bg-gray-100 px-8 py-2 text-gray-400"
          >
            Continue shopping
          </Link>
          <button
            className="uppercase font-bold bg-gray-100 px-8 py-2 text-gray-400"
            onClick={clearCart}
          >
            Clear cart
          </button>
        </div>
      </div>
      <CartTotals />
    </main>
  );
}
