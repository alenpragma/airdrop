import icon1 from '@/assets/competed.png';
import Image from 'next/image';



const Dashboard = () => {
  return (
    <div className="mt-[50px] flex flex-col xl:flex-row items-center gap-6">

      <div className=" xl:w-[714px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 bg-[#fff]  pl-[27px] pr-[10px] py-20 bg-opacity-[9%]  text-[#E1E1E1]">
          <div className="border-[1px] flex flex-col justify-center rounded-tr-[130px] p-5 rounded-2xl w-[330px] h-[170px] border-[#B4B4B4]">
            <p className="text-lg font-semibold">MUSD WALLET</p>
            <h2 className="font-bold mt-5 text-base">$28.40</h2>
            <p className="font-medium mt-[28px]">TOTAL PORTFOLIO:  $28.4</p>
          </div>

          <div className="border-[1px] flex flex-col justify-center  rounded-tr-[130px] p-5 rounded-2xl w-[330px] h-[170px] border-[#B4B4B4]">
            <p className="text-lg font-semibold">Total Earn</p>
            <h2 className="font-bold mt-5 text-base">$28.40</h2>
          </div>

          <div className="border-[1px] flex flex-col justify-center rounded-tr-[130px] p-5 rounded-2xl w-[330px] h-[170px] border-[#B4B4B4]">
            <p className="text-lg font-semibold">Today Earn</p>
            <h2 className="font-bold mt-5 text-base">$28.40</h2>
          </div>

          <div className="border-[1px] flex flex-col justify-center rounded-tr-[130px] p-5 rounded-2xl w-[330px] h-[170px] border-[#B4B4B4]">
            <p className="text-lg font-semibold">Today Earn</p>
            <h2 className="font-bold mt-5 text-base">$28.40</h2>
          </div>

        </div>

      </div>


      <div className="w-[359px]  ">
        <div className=" bg-[#fff]  pl-[27px] pr-[10px] py-20 bg-opacity-[9%]  text-[#E1E1E1]">


          <h2 className="text-[18px] font-bold ">Task Summary</h2>

          <div className='flex flex-col gap-6'>

            <div className="border-[1px] border-white p-2 pr-5 place-items-center rounded-[40px] flex justify-between  gap-0">
              <div className='flex place-items-center gap-[20px]'>
                <div className='bg-[#FFFFFF] p-3 rounded-full '>
                  <Image className='w-[35px]  h-[35px]' src={icon1} alt="" />
                </div>
                <p>Available Task</p>
              </div>
              <h2 className='text-[24px] font-semibold '>33</h2>
            </div>


            <div className="border-[1px] border-white p-2 pr-5 place-items-center rounded-[40px] flex justify-between  gap-0">
              <div className='flex place-items-center gap-[20px]'>
                <div className='bg-[#FFFFFF] p-3 rounded-full '>
                  <Image className='w-[35px]  h-[35px]' src={icon1} alt="" />
                </div>
                <p>Available Task</p>
              </div>
              <h2 className='text-[24px] font-semibold '>33</h2>
            </div>


            <div className="border-[1px] border-white p-2 pr-5 place-items-center rounded-[40px] flex justify-between  gap-0">
              <div className='flex place-items-center gap-[20px]'>
                <div className='bg-[#FFFFFF] p-3 rounded-full '>
                  <Image className='w-[35px]  h-[35px]' src={icon1} alt="" />
                </div>
                <p>Available Task</p>
              </div>
              <h2 className='text-[24px] font-semibold '>33</h2>
            </div>

            <div className="border-[1px] border-white p-2 pr-5 place-items-center rounded-[40px] flex justify-between  gap-0">
              <div className='flex place-items-center gap-[20px]'>
                <div className='bg-[#FFFFFF] p-3 rounded-full '>
                  <Image className='w-[35px]  h-[35px]' src={icon1} alt="" />
                </div>
                <p>Available Task</p>
              </div>
              <h2 className='text-[24px] font-semibold '>33</h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

