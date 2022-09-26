import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCartContext } from "../context/cart_context";

function CartItem({ item }) {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(item.id, "inc");
  };
  const decrease = () => {
    toggleAmount(item.id, "dec");
  };

  return (
    <div className="flex py-6 border-b border-gray-100">
      <div className="w-1/2 flex items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 bg-gray-100 p-2"
        />
        <p className="capitalize text-lg ml-8">{item.name}</p>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <p className="cart-item font-bold">${item.price}</p>
        <div className="cart-item">
          <div className="flex items-center justify-center bg-gray-100">
            <button
              type="button"
              className="cart-btn  w-10 h-10"
              onClick={decrease}
            >
              <AiOutlineMinus />
            </button>
            <h2 className="cart-btn  w-10 h-10">{item.amount}</h2>
            <button
              type="button"
              className="cart-btn w-10 h-10"
              onClick={increase}
            >
              <AiOutlinePlus />
            </button>
          </div>
        </div>
        <p className="cart-item font-bold">
          ${(item.price * item.amount).toFixed(2)}
        </p>
        <button
          type="button"
          className="w-1/6 text-gray-400 flex justify-end"
          onClick={() => removeItem(item.id)}
        >
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
