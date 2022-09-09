import { motion } from "framer-motion";
import {
  BsFillShareFill,
  BsFillCartFill,
  BsFillHeartFill,
} from "react-icons/bs";

function FeaturedCard({ product }) {
  return (
    <motion.div
      layout
      animate={{ scale: 1, opacity: 1 }}
      initial={{ scale: 0, opacity: 0 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="m-4 text-center"
    >
      <div className="h-60 bg-gray-100 w-full overflow-hidden  aspect-video cursor-pointer  relative group">
        <div
          className="z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute
           inset-x-0 -bottom-6 pt-30 text-white flex items-end"
        >
          <div
            className="w-full p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform 
            transition duration-300 ease-in-out"
          >
            <div className="font-bold flex items-center justify-center space-x-4">
              <div className="featured-icon">
                <BsFillHeartFill />
              </div>
              <div className="featured-icon">
                <BsFillShareFill />
              </div>
              <div className="featured-icon">
                <BsFillCartFill />
              </div>
            </div>
          </div>
        </div>
        <img
          alt=""
          className="object-contain w-full p-5 h-52"
          src={product.url}
        />
      </div>
      <h2 className="mt-2 capitalize">{product.name}</h2>
      <p className="font-bold">${product.price}</p>
    </motion.div>
  );
}

export default FeaturedCard;
