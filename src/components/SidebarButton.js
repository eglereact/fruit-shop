import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { departments } from "../data.js";

function SidebarButton() {
  return (
    <Menu as="div" className="relative inline-block text-left z-40 w-full">
      <Menu.Button
        className="inline-flex w-full items-center px-4 py-3 justify-center space-x-2 bg-[#7FAD39] text-white
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 font-bold"
      >
        <AiOutlineMenu /> <p>Departments</p>
        <BiChevronDown />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Menu.Items className="absolute right-0 w-full origin-top-right divide-y divide-gray-100 bg-white shadow-lg  focus:outline-none">
          <div className=" py-1 ">
            {departments.map((dep) => (
              <Menu.Item key={dep.id}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-900"
                    } group flex w-full items-center  px-2 py-2 text-sm`}
                  >
                    {dep.name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default SidebarButton;
