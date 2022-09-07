import { MdMail, MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import { socialIcons } from "../data.js";
import LanguageButton from "./LanguageButton";

function TopHeader() {
  return (
    <div className="w-full bg-gray-100 text-gray-800 hidden md:block">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4">
        <div className="flex items-center space-x-4 divide-x ml-4">
          <h2 className="flex items-center text-sm">
            <MdMail className="mr-2" />
            hello@fruitshop.com
          </h2>
          <h2 className="text-sm pl-4">Free Shipping for all Order of $99</h2>
        </div>
        <div className="flex items-center space-x-2 divide-x mr-4">
          <div className="flex space-x-4 pr-2">
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
          <LanguageButton />
          <Link to="/login" className="text-sm flex items-center pl-4 ">
            <MdPerson className="mr-2" /> Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
