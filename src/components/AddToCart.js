import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";

function AddToCart({ product }) {
  const { id } = product;
  const { addToCart } = useCartContext();
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount(amount + 1);
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <section className="flex items-center justify-start space-x-2">
      <div className="flex items-center justify-center bg-gray-100">
        <button type="button" className="cart-btn" onClick={decrease}>
          <AiOutlineMinus />
        </button>
        <h2 className="cart-btn">{amount}</h2>
        <button type="button" className="cart-btn" onClick={increase}>
          <AiOutlinePlus />
        </button>
      </div>
      <Link
        to="/cart"
        className="text-white font-bold uppercase px-8 h-12 flex items-center bg-[#7FAD39]"
        onClick={() => addToCart(id, amount, product)}
      >
        add to cart
      </Link>
      <button className="cart-btn text-xl bg-gray-100">
        <AiOutlineHeart />
      </button>
    </section>
  );
}

export default AddToCart;
