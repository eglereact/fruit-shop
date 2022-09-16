import { BsFillGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { useFilterContext } from "../context/filter_context";

function Sort() {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    updateSort,
    sort,
  } = useFilterContext();
  return (
    <section className="flex justify-between items-center border-t border-gray-200 py-10 ">
      <form>
        <label htmlFor="sort" className="text-gray-400 capitalize">
          sort by
        </label>
        <select
          name="sort"
          id="sort"
          className="capitalize font-bold text-gray-800 ml-2 outline-none"
          value={sort}
          onChange={updateSort}
        >
          <option value="price-lowest">price ( lowest )</option>
          <option value="price-highest">price ( highest )</option>
          <option value="name-a">name ( a-z )</option>
          <option value="name-z">name ( z-a )</option>
        </select>
      </form>
      <p className="text-gray-400">
        <span className="text-gray-800 font-bold">{products.length}</span>{" "}
        Products found
      </p>
      <div className="text-gray-400 space-x-2 text-xl">
        <button
          type="button"
          className={`${grid_view && "text-[#7FAD39]"}`}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type="button"
          className={`${!grid_view && "text-[#7FAD39]"}`}
          onClick={setListView}
        >
          <FaList />
        </button>
      </div>
    </section>
  );
}

export default Sort;
