import { NavLink, Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { BsFillHandbagFill } from "react-icons/bs";
import logo from "../images/logo.png";
import { links } from "../data.js";
import { useCartContext } from "../context/cart_context";

function Header() {
  const { total_items, total_amount } = useCartContext();
  return (
    <nav className="max-w-6xl mx-auto grid md:grid-cols-4 gap-2 lg:gap-10">
      <div className="hidden md:block ml-4">
        <Link to="/">
          <img src={logo} className="h-10 my-4" alt="logo" />
        </Link>
      </div>
      <div className="col-span-2 space-x-10 items-center hidden md:flex ml-2">
        {links.map((link) => (
          <NavLink
            key={link.id}
            to={link.url}
            className={({ isActive }) =>
              `uppercase font-bold text-sm hover:text-[#7fad39] { ${
                isActive ? "text-[#7fad39]" : "text-gray-800"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center justify-center py-3 md:py-0 md:justify-end space-x-4 mr-4">
        <span className="relative inline-block -z-10 md:z-0 cursor-pointer">
          <AiFillHeart className="text-[24px]" />
          <span className="badge">3</span>
        </span>
        <Link
          to="/cart"
          className="relative inline-block -z-10 md:z-0 cursor-pointer"
        >
          <BsFillHandbagFill className="text-[24px]" />
          <span className="badge">{total_items}</span>
        </Link>
        <p>
          item:{" "}
          <span className="font-bold text-sm">${total_amount.toFixed(2)}</span>
        </p>
      </div>
    </nav>
  );
}

export default Header;
