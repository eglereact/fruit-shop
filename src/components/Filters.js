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
        </form>
      </div>
    </section>
  );
}

export default Filters;
