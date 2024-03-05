"use client";
import Link from "next/link";
// import Dashboard from "@/components/icons/dashboard";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SidebarItems = ({ setShow, show }) => {
  const [toggle, setToggle] = useState(false);

  const pathname = usePathname();
  const formattedPath = pathname.slice(1).replace(/-/g, " ");
  return (
    <>
      <div className='flex flex-col p-1 gap-4'>
        {/* Deshbord */}
        <Link href={"/dashbord"} onClick={() => setShow(!show)}>
          <div
            className={` ${formattedPath == "dashbord"
              ? "bg-[#383838] font-semibold"
              : "font-medium "
              }  cursor-pointer rounded-[5px]  p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            <div>
              {/* <Dashboard
                color={` ${formattedPath == "dashbord" ? "#fff" : "#B4B4B4"} `}
              /> */}
            </div>
            <span className=' '>Dashbord</span>
          </div>
        </Link>

        {/* Tasks */}
        <Link href={"/tasks"} onClick={() => setShow(!show)}>
          <div
            className={` ${formattedPath == "tasks"
              ? "bg-[#383838] font-semibold"
              : "font-medium "
              }  cursor-pointer rounded-[5px]  p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            <div>
              {/* <Dashboard
                color={` ${formattedPath == "dashbord" ? "#fff" : "#B4B4B4"} `}
              /> */}
            </div>
            <span className=' '>Tasks</span>
          </div>
        </Link>

        {/* Wallet */}
        <Link href={"/wallet"} onClick={() => setShow(!show)}>
          <div
            className={` ${formattedPath == "wallet"
              ? "bg-[#383838] font-semibold"
              : "font-medium "
              }  cursor-pointer rounded-[5px]  p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            <div>
              {/* <Dashboard
                color={` ${formattedPath == "dashbord" ? "#fff" : "#B4B4B4"} `}
              /> */}
            </div>
            <span className=' '>Wallet</span>
          </div>
        </Link>
        {/* Community */}
        <Link href={"/community"} onClick={() => setShow(!show)}>
          <div
            className={` ${formattedPath == "community"
              ? "bg-[#383838] font-semibold"
              : "font-medium "
              }  cursor-pointer rounded-[5px]  p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            <div>
              {/* <Dashboard
                color={` ${formattedPath == "dashbord" ? "#fff" : "#B4B4B4"} `}
              /> */}
            </div>
            <span className=' '>Community</span>
          </div>
        </Link>
        {/* Contact Us  */}
        <Link href={"/contactUs"} onClick={() => setShow(!show)}>
          <div
            className={` ${formattedPath == "contactUs"
              ? "bg-[#383838] font-semibold"
              : "font-medium"
              }  cursor-pointer rounded-[5px]  p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            <div>
              {/* <Dashboard
                color={` ${formattedPath == "dashbord" ? "#fff" : "#B4B4B4"} `}
              /> */}
            </div>
            <span className=''>Contact Us </span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SidebarItems;
