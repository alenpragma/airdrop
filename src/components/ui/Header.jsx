import React from 'react';
import icon from '@/assets/image 2.png';
import icon2 from '@/assets/image 3.png';
import Image from 'next/image';

const Header = ({ setShow, show }) => {
  return (
    <div className='h-[73px] border-b-[1px] bg-[#1B1B1B] text-white font-semibold flex w-full  items-center px-4'>
      <div className='flex w-full items-center place-items-center justify-between'>
        <div>
          <h2>Dashboard</h2>
        </div>
        <div className='flex place-items-center gap-3'>
          <div className='flex gap-3'>
            <Image src={icon2} alt="" />
            <Image src={icon} alt="" />
          </div>
          <div onClick={() => setShow(!show)}>
            <p className='border lg:hidden p-1 rounded-md'>ICON</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;