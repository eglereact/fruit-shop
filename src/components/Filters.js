import { useFilterContext } from "../context/filter_context";
import { AiOutlineSearch } from "react-icons/ai";
import { getUniqueValues } from "../utils/helpers";

function Filters() {
  const {
    filters: { text, category, size, color, mix_price, price, max_price },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();
  const categories = getUniqueValues(all_products, "category");
  const sizes = getUniqueValues(all_products, "size");
  const colors = getUniqueValues(all_products, "color");

  return (
    <section>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="relative w-full">
            <input
              type="text"
              name="text"
              placeholder="Search"
              className="bg-gray-50 border border-gray-300 text-gray-900  rounded-2xl  block w-full pl-3 p-2 outline-none"
              value={text}
              autoComplete="off"
              onChange={updateFilters}
            />
            <button
              type="button"
              className="flex absolute inset-y-0 right-0 items-center pr-3 text-xl  text-gray-500 dark:text-gray-400"
            >
              <AiOutlineSearch />
            </button>
          </div>
          <div className="mb-4">
            <h3 className="text-gray-800 font-bold text-2xl my-4">
              Department
            </h3>
            <div className="flex flex-wrap md:flex-col items-start">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  onClick={updateFilters}
                  name="category"
                  type="button"
                  className={`${
                    category === cat.toLowerCase() &&
                    "font-bold border-b-2 border-[#7fad39]"
                  } capitalize mr-4 md:mb-3 text-gray-800`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-gray-800 font-bold text-2xl my-4">
              Popular Size
            </h3>
            <div className="flex flex-wrap items-start">
              {sizes.map((s, index) => (
                <button
                  key={index}
                  onClick={updateFilters}
                  name="size"
                  type="button"
                  className={`${
                    size.toLowerCase() === s.toLowerCase() &&
                    "font-bold text-gray-800 bg-gray-200"
                  } capitalize mr-4 md:mb-3 text-gray-400 bg-gray-100 py-2 px-6 text-sm mb-2`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Filters;
