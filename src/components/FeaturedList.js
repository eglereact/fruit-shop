import { useEffect, useState } from "react";
import { useProductsContext } from "../context/product_context.js";
import { getUniqueValues } from "../utils/helpers.js";
import FeaturedCard from "./FeaturedCard.js";
import FeaturedCategories from "./FeaturedCategories.js";

function FeaturedList() {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();
  const [featuredProducts, setFeatureProducts] = useState(featured);
  const categories = getUniqueValues(featured, "category");
  const [active, setActive] = useState(categories[0]);

  useEffect(() => {
    setFeatureProducts(featured);
  }, [featured]);

  const filterProducts = (category) => {
    if (category === "all") {
      setFeatureProducts(featured);
      setActive(category);
      return;
    }
    const newProduct = featured.filter(
      (product) => product.category === category
    );
    setFeatureProducts(newProduct);
    setActive(category);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was in error</h1>;
  }

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
