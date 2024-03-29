import icon1 from '@/assets/competed.png';
import TotalEarn from '@/components/icons/dashbord/TotalEarn';
import CompletedTask from '@/components/icons/dashbord/completedTask';
import PendingTask from '@/components/icons/dashbord/pendingTask';
import TotalTask from '@/components/icons/dashbord/totalTask';
import MsudWallet from '@/components/icons/dashbord/msudWallet';
import TodayEarn from '@/components/icons/dashbord/todayEarn';
import Withdraw from '@/components/icons/dashbord/withdraw';
import Image from 'next/image';
import AvailableTask from './AvailableTask';

const Dashboard = () => {
  return (
    <>
      <div className="max-w-[1098px] mt-[50px] flex flex-col xl:flex-row items-center gap-[20px]">

        <div className="relative w-[350px] md:w-[714px] 2xl:w-[714px]">
          <div className='shape absolute -top-[29.5px] border-t-[30px] rounded-tl-[40px] w-[33%]  border-[#fff] border-opacity-[14%]  border-r-transparent border-l-transparent border-b-transparent '>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-8 rounded-2xl rounded-tl-none bg-[#fff]  pl-[27px] pr-[10px] py-20 bg-opacity-[14%]  text-[#E1E1E1]">
            <div className="relative border-[1px] flex flex-col justify-center rounded-tr-[130px] p-3 xl:p-5 rounded-2xl  w-[300px] 2xl:w-[330px] h-[150px] xl:h-[170px] border-[#B4B4B4]">
              <div className='absolute top-0 right-0 bg-[#FFEAD1] p-3 rounded-2xl w-fit'>
                <MsudWallet className="" />
              </div>
              <p className="text-lg font-semibold">MUSD WALLET</p>
              <h2 className="font-bold mt-3 xl:mt-5 text-base">$28.40</h2>
              <p className="font-medium mt-3 xl:mt-[28px]">TOTAL PORTFOLIO:  $28.4</p>
            </div>

            <div className="relative border-[1px] flex flex-col justify-center  rounded-tr-[130px] p-3 xl:p-5 rounded-2xl w-[300px] 2xl:w-[330px] h-[150px] xl:h-[170px] border-[#B4B4B4]">
              <div className='absolute top-0 right-0 bg-[#FFD7CB] p-3 rounded-2xl w-fit'>
                <TotalEarn className="" />
              </div>
              <p className="text-lg font-semibold">Total Earn</p>
              <h2 className="font-bold mt-3 xl:mt-5 text-base">$28.40</h2>
            </div>

            <div className="relative border-[1px] flex flex-col justify-center rounded-tr-[130px] p-3 xl:p-5 rounded-2xl w-[300px] 2xl:w-[330px] h-[150px] xl:h-[170px] border-[#B4B4B4]">
              <div className='absolute top-0 right-0 bg-[#FFD8FB] p-3 rounded-2xl w-fit'>
                <TodayEarn className="" />
              </div>
              <p className="text-lg font-semibold">Today Earn</p>
              <h2 className="font-bold mt-3 xl:mt-5 text-base">$28.40</h2>
            </div>

            <div className="relative border-[1px] flex flex-col justify-center rounded-tr-[130px] p-3 xl:p-5 rounded-2xl w-[300px] 2xl:w-[330px] h-[150px] xl:h-[170px] border-[#B4B4B4]">
              <div className='absolute top-0 right-0 bg-[#FFF1E9] p-3 rounded-2xl w-fit'>
                <Withdraw className="" />
              </div>
              <p className="text-lg font-semibold">Withdraw</p>
              <h2 className="font-bold mt-3 xl:mt-5 text-base">$28.40</h2>
            </div>

          </div>
        </div>

        <div className="relative w-[350px] xl:w-[350px] mt-7 xl:mt-0 2xl:w-[359px]">
          <div className='shape2 absolute -top-[29.5px] right-0 ms-auto border-t-[30px] rounded-tr-[40px] w-[33%]  border-[#fff] border-opacity-[14%]  border-r-transparent border-l-transparent border-b-transparent '>

          </div>
          <div className=" bg-[#fff] rounded-2xl rounded-tr-none px-3 xl:pl-[27px] xl:pr-[10px] py-10 bg-opacity-[14%]  text-[#E1E1E1]">
            <h2 className="text-[18px] font-bold pb-10 ">Task Summary</h2>
            <div className='flex flex-col gap-3 xl:gap-6'>
              <div className="border-[2px] border-[#B4B4B4] p-2 pr-5 place-items-center rounded-[40px] flex justify-between  gap-0">
                <div className='flex place-items-center gap-[20px]'>
                  <div className='bg-[#FFFFFF] p-3 rounded-full '>
                    <Image className='w-[28px]  h-[28px] xl:w-[35px]  xl:h-[35px]' src={icon1} alt="" />
                  </div>
                  <p>Available Task</p>
                </div>
                <h2 className='text-[24px] font-semibold '>33</h2>
              </div>


              <div className="border-[2px] border-[#B4B4B4] p-2 pr-5 place-items-center rounded-[40px] flex justify-between  gap-0">
                <div className='flex place-items-center gap-[20px]'>
                  <div className='bg-[#FFFFFF] p-3 rounded-full '>
                    <PendingTask />
                  </div>
                  <p>Pending Task</p>
                </div>
                <h2 className='text-[24px] font-semibold '>2</h2>
              </div>


              <div className="border-[2px] border-[#B4B4B4] p-2 pr-5 place-items-center rounded-[40px] flex justify-between  gap-0">
                <div className='flex place-items-center gap-[20px]'>
                  <div className='bg-[#FFFFFF] p-3 rounded-full '>
                    <CompletedTask />
                  </div>
                  <p>Completed Task</p>
                </div>
                <h2 className='text-[24px] font-semibold'>33</h2>
              </div>

              <div className="border-[2px] border-[#B4B4B4] p-2 pr-5 place-items-center rounded-[40px] flex justify-between  gap-0">
                <div className='flex place-items-center gap-[20px]'>
                  <div className='bg-[#FFFFFF] p-3 rounded-full '>
                    <TotalTask />
                  </div>
                  <p>Total Task</p>
                </div>
                <h2 className='text-[24px] font-semibold '>33</h2>
              </div>

            </div>
          </div>
        </div>

      </div>
      <AvailableTask />
    </>
  );
};

export default Dashboard;