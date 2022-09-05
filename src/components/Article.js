import { AiOutlineCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";

function Article({ article }) {
  const { img, title, date, text, link } = article;
  return (
    <div>
      <img src={img} alt={title} className="object-cover md:h-64" />
      <h4 className="flex items-center text-gray-400 my-2">
        <AiOutlineCalendar className="mr-1" />
        {date}
      </h4>
      <Link to={link} className="text-lg text-gray-800 font-bold mb-2">
        {title}
      </Link>
      <p className="text-gray-500">{text.substring(0, 120)}...</p>
    </div>
  );
}

export default Article;
