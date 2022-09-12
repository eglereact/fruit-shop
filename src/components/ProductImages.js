import { useState } from "react";

function ProductImages({ images = [{ url: "" }] }) {
  const [mainImage, setMainImage] = useState(images[0]);
  return (
    <section className="">
      <img
        src={mainImage.url}
        alt="Main Image"
        className="w-full p-8 bg-gray-100 flex items-center justify-center object-contain h-[600px]"
      />
      <div className="grid grid-cols-5 gap-2 my-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.filename}
            onClick={() => setMainImage(images[index])}
            className={`${
              image.url === mainImage.url &&
              "border border-gray-300 bg-gray-100"
            }  object-contain w-24 h-24 bg-gray-100 p-4 cursor-pointer`}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductImages;
