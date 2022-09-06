import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { departments } from "../data.js";

function FruitCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    superLargeDesktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    superLarge: {
      breakpoint: { max: 768, min: 520 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 520, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full my-8">
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={4000}
        customTransition="all 1s ease-out"
        centerMode={false}
        className=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        swipeable
      >
        {departments.map((card) => {
          return (
            <div className="mx-4 shadow-md" key={card.id}>
              <Link
                to="/shop"
                className="flex items-center justify-center flex-col"
              >
                <img className="h-52" src={card.img} alt="img" />
                <p className="bg-gray-100 w-full py-2 text-gray-800 font-bold text-center">
                  {card.name}
                </p>
              </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default FruitCarousel;
