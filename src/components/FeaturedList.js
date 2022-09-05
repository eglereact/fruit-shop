import { useState } from "react";
import { featuredList } from "../data.js";
import FeaturedCard from "./FeaturedCard.js";
import FeaturedCategories from "./FeaturedCategories.js";

const allCategories = [
  "all",
  ...new Set(featuredList.map((product) => product.category)),
];

console.log(allCategories);

function FeaturedList() {
  const [featuredProducts, setFeatureProducts] = useState(featuredList);
  const [categories, setCategories] = useState(allCategories);
  const [active, setActive] = useState(categories[0]);

  const filterProducts = (category) => {
    if (category === "all") {
      setFeatureProducts(featuredList);
      setActive(category);
      return;
    }
    const newProduct = featuredList.filter(
      (product) => product.category === category
    );
    setFeatureProducts(newProduct);
    setActive(category);
  };

  return (
    <main className="my-16">
      <section>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
          <div className="border-b-4 border-[#7FAD39] w-16"></div>
        </div>
        <FeaturedCategories
          categories={categories}
          filterProducts={filterProducts}
          active={active}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <FeaturedCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default FeaturedList;
