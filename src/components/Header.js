import { NavLink, Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { BsFillHandbagFill } from "react-icons/bs";
import logo from "../images/logo.png";

function Header() {
  return (
    <nav className="max-w-5xl mx-auto grid grid-cols-4">
      <div className="">
        <Link to="/">
          <img src={logo} className="h-10 my-4" />
        </Link>
      </div>
      <div className="col-span-2 space-x-10 flex items-center ">
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
      <div className="flex items-center justify-end space-x-4">
        <span className="relative inline-block cursor-pointer">
          <AiFillHeart className="text-[24px]" />
          <span className="badge">3</span>
        </span>
        <span className="relative inline-block cursor-pointer">
          <BsFillHandbagFill className="text-[24px]" />
          <span className="badge">5</span>
        </span>
        <p>
          item: <span className="font-bold text-sm">$150.00</span>
        </p>
      </div>
    </nav>
  );
}

const links = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Shop", url: "/shop" },
  { id: 3, name: "Blog", url: "/blog" },
  { id: 4, name: "Contacts", url: "/contacts" },
];

export default Header;
