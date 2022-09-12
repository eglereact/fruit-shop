import { Link } from "react-router-dom";

function PageHero({ title, image, product }) {
  return (
    <div className="relative w-full h-40 overflow-hidden my-6">
      <img src={image} alt="Avatar" className="object-cover w-full h-full" />
      <div
        className="absolute w-full h-full bottom-0 flex justify-center items-center inset-x-0 bg-gray-800/30
        text-white text-xs text-center leading-4 flex-col"
      >
        <h2 className="text-4xl font-bold mb-2 capitalize">{title}</h2>
        <h3 className="text-2xl">
          <Link to="/" className="hover:text-gray-800">
            Home
          </Link>{" "}
          /{" "}
          {product && (
            <>
              <Link to="/shop" className="hover:text-gray-800">
                Shop
              </Link>
              <span> / </span>
            </>
          )}
          <span className="font-bold capitalize">{title}</span>
        </h3>
      </div>
    </div>
  );
}

export default PageHero;
