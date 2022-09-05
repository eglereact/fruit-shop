function FeaturedCategories({ filterProducts, categories, active }) {
  return (
    <div className="text-center my-10 text-xl space-x-8">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => filterProducts(category)}
          className={`text-gray-800 ${
            active === category && " border-b-2 border-[#7FAD39]"
          } capitalize py-1`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default FeaturedCategories;
