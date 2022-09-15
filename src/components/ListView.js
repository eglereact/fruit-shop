import {
  BsFillCartFill,
  BsFillHeartFill,
  BsFillShareFill,
  BsSearch,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function ListView({ products }) {
  return (
    <div>
      {products.map((product) => {
        const { id, name, description, url, price } = product;
        console.log(product);
        return (
          <div className="flex items-center my-6" key={id}>
            <div>
              <div className="w-36 h-36 sm:w-60 sm:h-60 bg-gray-100 relative group flex justify-center items-center ">
                <img src={url} className="object-contain  p-4 " />
                <Link
                  to={`/shop/${product.id}`}
                  className=" opacity-0 w-36 h-36 sm:w-60 sm:h-60 group-hover:opacity-100 duration-300 absolute  bottom-0 flex justify-center items-center text-3xl bg-black/20 text-white"
                >
                  <BsSearch />
                </Link>
              </div>
            </div>

            <div className="ml-4">
              <Link
                to={`/shop/${product.id}`}
                className="text-gray-800 text-2xl font-bold block mb-1 hover:text-[#7fad39] capitalize"
              >
                {name}
              </Link>
              <h3 className="text-red-500 mb-2">${price}</h3>
              <p className="text-gray-500 mb-4 hidden sm:block">
                {description.substring(0, 190)}...
              </p>
              <div className="font-bold flex items-center space-x-4 z-30">
                <div className="featured-icon cursor-pointer">
                  <BsFillHeartFill />
                </div>
                <div className="featured-icon cursor-pointer">
                  <BsFillShareFill />
                </div>
                <div className="featured-icon cursor-pointer">
                  <BsFillCartFill />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListView;
