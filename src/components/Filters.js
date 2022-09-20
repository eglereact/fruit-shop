import { useFilterContext } from "../context/filter_context";
import { AiOutlineSearch } from "react-icons/ai";
import { getUniqueValues } from "../utils/helpers";
import { BsCheck } from "react-icons/bs";

function Filters() {
  const {
    filters: { text, category, size, color, min_price, price, max_price },
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
          <div>
            <h3 className="text-gray-800 font-bold text-2xl my-4">Price</h3>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
              className="w-full accent-red-500 border border-white "
            />
            <p className="text-red-500 font-bold">${price}</p>
          </div>
          <div>
            <h3 className="text-gray-800 font-bold text-2xl my-4">Colors</h3>
            <div className="grid grid-cols-2">
              {colors.map((c, index) => (
                <button
                  className={`${
                    color.toLowerCase() === c.toLowerCase() && "font-bold"
                  } flex items-center capitalize text-gray-800 mb-4`}
                  key={index}
                  name="color"
                  data-color={c}
                  onClick={updateFilters}
                >
                  <span
                    className={`${
                      c === "all"
                        ? "w-4 h-4 rounded-full mr-2 text-gray-800"
                        : "w-4 h-4 rounded-full border border-gray-200 mr-2 flex items-center justify-center text-gray-200"
                    } `}
                    style={{ background: c }}
                  >
                    {color === c && <BsCheck />}
                  </span>
                  {c}
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
        <button
          type="button"
          onClick={clearFilters}
          className="bg-[#7FAD39] w-full text-white font-bold py-2 mt-10 hover:bg-[#7FAD39]/90"
        >
          Clear Filters
        </button>
      </div>
    </section>
  );
}

export default Filters;
