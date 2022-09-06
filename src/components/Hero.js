import apple from "../images/apples.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="py-4 grid sm:grid-cols-3 md:grid-cols-4 lg:gap-10 gap-2 mx-4">
      <div className="hidden md:inline-block"></div>
      <div className=" col-span-3 w-full">
        <div className="relative">
          <img src={apple} className="w-full" alt="hero fruit" />
          <div className="absolute text-gray-800 top-8 sm:top-12 lg:top-24 left-4 sm:left-10">
            <p className="uppercase font-bold text-[#7fad39]">Fresh & Tasty</p>
            <h1 className="text-3xl sm:text-5xl font-bold mb-3 mt-1 w-80 ">
              100% Organic Fruits
            </h1>
            <p className="text-gray-400">Free Pickup and Delivery Available</p>
            <div className="mt-4 sm:mt-10">
              <Link
                to="/shop"
                className="bg-[#7fad39] px-5 py-3 font-bold  text-white"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
