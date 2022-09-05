import { Link } from "react-router-dom";

function DiscountAdd({ color, img, title, text, link }) {
  return (
    <div className={`flex ${color} items-center justify-center h-64 w-full`}>
      <div className="flex items-center justify-center">
        <img src={img} alt={title} className="object-contain h-48 w-full" />
      </div>
      <div className="px-5">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-600 text-sm mt-2">{text}</p>
        <Link
          to={link}
          className="bg-white px-6 inline-block py-2 mt-4 text-[#7FAD39] font-bold rounded-sm
           hover:bg-gray-800 hover:text-white transition-all uppercase"
        >
          Shop now
        </Link>
      </div>
    </div>
  );
}

export default DiscountAdd;
