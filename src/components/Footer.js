import { Link } from "react-router-dom";
import { socialIcons } from "../data.js";
import logo from "../images/logo.png";

function Footer() {
  return (
    <main className="bg-gray-100 pt-10 ">
      <div className="max-w-6xl mx-auto ">
        <div className="grid md:grid-cols-3 mx-4">
          <div className="space-y-2 mb-4">
            <Link to="/">
              <img src={logo} className="h-10 mb-6" alt="logo" />
            </Link>
            <p>Address: River str. 16, Vilnius</p>
            <p>Phone: +123 4569 874</p>
            <p>Email: hello@fruitshop.com</p>
          </div>
          <div className="mb-4">
            <h2 className="font-bold mb-2">Useful Links</h2>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-[#7FAD39]">
                About us
              </Link>
              <a href="https://www.pngall.com" className="hover:text-[#7FAD39]">
                PNG Images
              </a>
              <Link to="/" className="hover:text-[#7FAD39]">
                Delivery Infomation
              </Link>
              <Link to="/" className="hover:text-[#7FAD39]">
                Privacy Policy
              </Link>
              <Link to="/contacts" className="hover:text-[#7FAD39]">
                Contacts
              </Link>
            </div>
          </div>
          <div className="text-gray-800">
            <h2 className="font-bold mb-2">Join Our Newsletter Now</h2>
            <p className="text-sm">
              Get E-mail updates about our latest shop and special offers.
            </p>
            <div className="w-full flex my-6">
              <input
                className="flex-grow border p-3 border-gray-100 outline-none "
                placeholder="Enter your mail"
              />
              <button className="bg-[#7FAD39] py-3 px-4 text-white font-bold uppercase">
                subscribe
              </button>
            </div>
            <div className="flex space-x-6 mb-4">
              {socialIcons.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="hover:bg-[#7fad39] hover:text-white text-lg border border-gray-200 p-3 bg-white rounded-full transition-all"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className=" border-t border-gray-200 py-4 text-gray-500 mx-4">
          Copyright ©
          <span className="text-[#7fad39] font-semibold">
            {new Date().getFullYear()}
          </span>{" "}
          All rights reserved
        </p>
      </div>
    </main>
  );
}

export default Footer;
