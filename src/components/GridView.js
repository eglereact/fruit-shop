import FeaturedCard from "./FeaturedCard";

function GridView({ products }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <FeaturedCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default GridView;
