import { ImStarFull, ImStarEmpty, ImStarHalf } from "react-icons/im";

function Stars({ rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index} className="text-yellow-400">
        {rating >= index + 1 ? (
          <ImStarFull />
        ) : rating >= number ? (
          <ImStarHalf />
        ) : (
          <ImStarEmpty />
        )}
      </span>
    );
  });

  return (
    <div className="flex space-x-2 items-center">
      <div className="flex space-x-1">{stars}</div>
      <p className="text-sm text-red-500">(12 costumer reviews)</p>
    </div>
  );
}

export default Stars;
