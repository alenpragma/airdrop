"use client";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";
import React, { useEffect, useState } from "react";

const DashboardLayout = ({ children }) => {
  const [show, setShow] = useState(true);
  // const width = window?.screen?.width;
  const width = typeof window !== "undefined" ? window?.screen?.width : null;

  if (width < 768 && show == false) {
    console.log("size", width);
    setShow(!show);
  }
  //   const closeSide = () => {
  // };

  // useEffect(() => {
  //   closeSide();
  // }, []);
  return (
    <div className=' flex  bg-[#1B1B1B]'>

      <div className="lg:hidden bg-black fixed shadow-[0_0px_30px_-15px] shadow-white  flex items-center justify-center">
        <Sidebar setShow={setShow} show={show} />
      </div>

      <div className=" hidden  bg-black lg:block">
        <Sidebar />
      </div>

      <div className="w-full">
        <div>
          <Header setShow={setShow} show={show} />
        </div>
        <div className="max-w-[1440px] text-white px-2 xl:px-12 min-h-screen min-w-full">
          {children}
        </div>
      </div>

    </div>
  );
};

export default DashboardLayout;
