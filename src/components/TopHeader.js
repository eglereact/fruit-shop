import { MdMail, MdFacebook, MdPerson } from "react-icons/md";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";

import LanguageButton from "./LanguageButton";

function TopHeader() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4">
        <div className="flex items-center space-x-4 divide-x">
          <h2 className="flex items-center text-sm">
            <MdMail className="mr-2" />
            hello@fruitshop.com
          </h2>
          <h2 className="text-sm pl-4">Free Shipping for all Order of $99</h2>
        </div>
        <div className="flex items-center space-x-2 divide-x">
          <div className="flex space-x-4 pr-2">
            <a
              href="https://www.facebook.com/"
              className="hover:text-[#7fad39]"
            >
              <MdFacebook />
            </a>
            <a
              href="https://www.facebook.com/"
              className="hover:text-[#7fad39]"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://www.facebook.com/"
              className="hover:text-[#7fad39]"
            >
              <FaPinterestP />
            </a>
            <a
              href="https://www.facebook.com/"
              className="hover:text-[#7fad39]"
            >
              <AiFillLinkedin />
            </a>
          </div>
          <LanguageButton />
          <Link to="/login" className="text-sm flex items-center pl-4">
            <MdPerson className="mr-2" /> Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
