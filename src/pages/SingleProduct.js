import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useProductsContext } from "../context/product_context";
import PageHero from "../components/PageHero";
import { socialIcons } from "../data.js";
import ProductImages from "../components/ProductImages";
import Stars from "../components/Stars";
import AddToCart from "../components/AddToCart";
import SingleProductTab from "../components/SingleProductTab";
import FeaturedCard from "../components/FeaturedCard";
import Loading from "../components/Loading";
import Error from "../components/Error";

function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
    products,
  } = useProductsContext();
  const single_product_url = `https://api-eglereact.netlify.app/api/fruitshop?id=`;

  useEffect(() => {
    fetchSingleProduct(`${single_product_url}${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const {
    name,
    rating,
    price,
    description,
    id: sku,
    image,
    category,
    shipping,
    weight,
    color,
    available,
  } = product?.fields || {};

  const { url } = image?.[0] || "";

  return (
    <main>
      <PageHero title={name} image={url} product />
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 mt-16 mx-4 gap-8">
          <section>
            <ProductImages images={image} />
          </section>
          <section>
            <h2 className="text-gray-800 text-4xl font-bold pb-2 capitalize">
              {name}
            </h2>
            <Stars rating={rating} />
            <h5 className="text-red-500 text-3xl py-4">${price}</h5>
            <p className="text-gray-500 mb-10">{description}</p>

            {available && <AddToCart product={product} />}

            <div className="border-b border-gray-200 my-10"></div>
            <div className="flex flex-col w-full text-gray-800">
              <p className="flex">
                <span className="product-info">Availability</span>{" "}
                {available ? "In Stock" : "Out of Stock"}
              </p>
              <p className="flex">
                <span className="product-info">Shipping</span> 01 day shipping.
                <span className="text-red-500 pl-1">Free pickup today</span>
              </p>
              <p className="flex">
                <span className="product-info">Weight</span> {weight} kg
              </p>
              <p className="flex items-center">
                <span className="product-info">Share on</span>
                {socialIcons.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    className="hover:text-[#7fad39] mr-4"
                  >
                    {item.icon}
                  </a>
                ))}
              </p>
            </div>
          </section>
        </div>
        <SingleProductTab />
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-4">Related Products</h2>
          <div className="border-b-4 border-[#7FAD39] w-16"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10">
          {products
            .filter((product) => product.category === category)
            .slice(0, 4)
            .map((product) => (
              <FeaturedCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </main>
  );
}

export default SingleProduct;
