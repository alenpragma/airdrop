import React from 'react';

const Modal = () => {
  return (
    <div className='bg-[#1B1B1B] max-w-[1098px] p-5 lg:p-8 mt-5 border-2 rounded-2xl'>
      <div className=' '>
        <div className='relative'>
          <p className='absolute top-0 right-0 bg-[#FF9F2E] text-[48px]  w-[60px] h-[60px] text-center justify-start rounded-[5px] text-[#2A2A2A]'>X</p>
        </div>
        <p className='font-medium text w-[90%] text-[24px] '>Take 2 or 3 pictures of the tasks you complete each day and copy the explanation and share it on your Facebook page. Submit Your Daily work Image and send us the link</p>
        <hr className='border-b-[1px] my-[22px] border-[#BBBBBB]' />
        <p className='text-xl'>Submit Task Url</p>
        <input className='mb-3 mt-4 border-[1px] max-w-full w-[834px] h-[55px] border-[#B8B8B8] rounded-xl bg-transparent px-2' type="text" />
        <div className=''>
          <h3 className='text-[#FF9F2E] text-xl font-medium inline-block '>Attention!! </h3> <span className='text-[#FF3A3A] '>{"If don't have link, upload screenshot and create a link from "}</span> <span className='text-[#80FF00] text-xl'>Here</span>
        </div>
        <hr className='border-b-[1px] my-[22px] mt-[70px] mb-[67px] border-[#BBBBBB]' />
        <div className='flex gap-5 justify-end'>
          <button className='text-[#2A2A2A] rounded-xl bg-[#FF9F2E] px-14 py-5 text-lg font-bold'>Submitrd</button>
          <button className='text-[#2A2A2A] rounded-xl bg-[#DE0D00] px-14 py-5 text-lg font-bold'>Submitrd</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;