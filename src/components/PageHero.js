import { Link } from "react-router-dom";

function PageHero({ title, image }) {
  return (
    <div className="relative w-full h-40 overflow-hidden my-6">
      <img src={image} alt="Avatar" className="object-cover w-full h-full" />
      <div
        className="absolute w-full h-full bottom-0 flex justify-center items-center inset-x-0 bg-gray-800/30
        text-white text-xs text-center leading-4"
      >
        <h3 className="text-4xl">
          <Link to="/" className="hover:text-gray-800">
            Home
          </Link>{" "}
          / <span className="font-bold">{title}</span>
        </h3>
      </div>
    </div>
  );
}

export default PageHero;
