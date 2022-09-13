import { useState } from "react";
import { tabs } from "../data.js";
function SingleProductTab() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="flex">
        <div className="w-full">
          <ul
            className="flex mb-0 items-center justify-center list-none pt-4 pb-4  "
            role="tablist"
          >
            <hr className="flex-auto " />
            {tabs.map((tab) => (
              <li key={tab.id} className="-mb-px mr-2 last:mr-0 text-center">
                <a
                  className={
                    "font-bold px-5 py-3 leading-normal " +
                    (openTab === tab.id ? " text-gray-800" : "text-gray-500")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(tab.id);
                  }}
                  data-toggle="tab"
                  href={`#link${tab.id}`}
                  role="tablist"
                >
                  {tab.name}
                </a>
              </li>
            ))}
            <hr className="flex-auto " />
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 ">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <h2 className="text-gray-800 mb-5 font-bold">
                  Products Infomation
                </h2>
                {tabs.map((tab) => (
                  <div
                    className={openTab === tab.id ? "block" : "hidden"}
                    id={`link${tab.id}`}
                    key={tab.id}
                  >
                    <p className="text-gray-600">
                      {tab.paragraph1}
                      <br />
                      <br />
                      {tab.paragraph2}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProductTab;
