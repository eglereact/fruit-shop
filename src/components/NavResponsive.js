import { Transition } from "@headlessui/react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { links, socialIcons } from "../data.js";
import LanguageButton from "./LanguageButton";
import { MdMail, MdPerson } from "react-icons/md";

function NavResponsive() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white md:hidden">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <img src={logo} className="h-10" alt="logo" />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-800 rounded-md outline-none focus:border-[#7fad39] focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={navbar}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="justify-center space-x-10 items-center flex ml-2">
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
            <div className="flex space-x-4 justify-center py-4">
              {socialIcons.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="hover:text-[#7fad39]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <div className="flex justify-center items-center">
              <LanguageButton />
              <Link to="/login" className="text-sm flex items-center">
                <MdPerson className="mr-2" /> Login
              </Link>
            </div>
            <div className="flex justify-center items-center py-4 flex-wrap">
              <h2 className="flex items-center text-sm">
                <MdMail className="mr-2" />
                hello@fruitshop.com
              </h2>
              <h2 className="text-sm pl-4">
                Free Shipping for all Order of $99
              </h2>
            </div>
          </div>
        </Transition>
      </div>
    </nav>
  );
}

export default NavResponsive;
