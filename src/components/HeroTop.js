import { AiOutlinePhone } from "react-icons/ai";
import Search from "./Search";
import SidebarButton from "./SidebarButton";

function HeroTop() {
  return (
    <div className="max-w-5xl mx-auto ">
      <div className="grid md:grid-cols-4 py-2 content-center lg:gap-10 gap-2 mx-4">
        <div className="lg:w-52 w-full">
          <SidebarButton />
        </div>
        <div className="md:col-span-2">
          <Search />
        </div>
        <div className="flex items-center md:justify-end space-x-4">
          <p className=" h-10 w-10 flex justify-center items-center rounded-full bg-gray-100 text-gray-800">
            <AiOutlinePhone className="text-[#7FAD39]" />
          </p>
          <div>
            <h2 className="font-bold">+123 4569 874</h2>
            <p className="text-sm">support 24/7 time</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroTop;
