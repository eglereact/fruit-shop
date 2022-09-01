function Search() {
  return (
    <div className="w-full flex">
      <input
        className="flex-grow border p-3 border-gray-100 placeholder:text-gray-300 outline-none "
        placeholder="What do you need today?"
      />
      <button className="bg-[#7FAD39] py-3 px-4 text-white font-bold">
        Search
      </button>
    </div>
  );
}

export default Search;
