import { MdMail, MdFacebook, MdPerson } from "react-icons/md";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
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
            <a href="">
              <MdFacebook />
            </a>
            <a href="">
              <AiOutlineTwitter />
            </a>
            <a href="">
              <FaPinterestP />
            </a>
            <a href="">
              <AiFillLinkedin />
            </a>
          </div>
          {/* <div>
            <h2 className="text-sm flex items-center pl-4 cursor-pointer">
              English <BiChevronDown />
            </h2>
          </div> */}
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
