import React from "react";
import SidebarItems from "./SidebarItems";

const Sidebar = ({ show, setShow }) => {
  return (
    <div>
      <div
        className={`${show ? "hidden  lg:block" : ""
          } bg-[#323232]   h-full min-h-screen text-white`}
      >
        <div className='flex border-b bg-[#8000] z-50  2xl:w-[243px] py-6  px-3  gap-4 mb-[27px]'>
          <h2 className='font-bold'>MINDCHAIN</h2>
        </div>

        {/* menu items */}
        <div className=''>
          <SidebarItems setShow={setShow} show={show} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
