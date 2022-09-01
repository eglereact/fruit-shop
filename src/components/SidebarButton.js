import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

function SidebarButton() {
  return (
    <Menu as="div" className="relative inline-block text-left z-50 w-full">
      <div>
        <Menu.Button
          className="inline-flex w-full items-center px-4 py-3 justify-center space-x-2 bg-[#7FAD39] text-white
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 font-bold"
        >
          <AiOutlineMenu /> <p>All Departments</p>
          <BiChevronDown />
        </Menu.Button>
      </div>
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
              <Menu.Item>
                {({ active }) => (
                  <button
                    key={dep.id}
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

const departments = [
  { id: 1, name: "Fresh Meat" },
  { id: 2, name: "Vegetables" },
  { id: 3, name: "Fruit & Nut Gifts" },
  { id: 4, name: "Fresh Berries" },
  { id: 5, name: "Butter & Eggs" },
  { id: 6, name: "Fastfood" },
  { id: 7, name: "Fresh Onion" },
  { id: 8, name: "Papayaya & Crisps" },
  { id: 9, name: "Oatmeal" },
  { id: 10, name: "Fresh Bananas" },
];

export default SidebarButton;
