import Title from '@/components/ui/title';
import React from 'react';

const PendingTask = () => {
  return (
    <div className='max-w-[1098px] dashboardScroll mb-10   mt-4 px-3 xl:px-7 py-9 rounded-xl  bg-[#FFFFFF] text-[#CCCCCC] bg-opacity-[14%]'>

      <Title title={'Pending Task '} />
      <div className=' lg:max-w-[950px] border-[2px] mt-5 rounded-2xl xl:max-w-[1068px] '>
        <div className='  text-white overflow-x-auto rounded-2xl'>
          <table class=' min-w-full'>
            {/* <table class=' min-w-[1068px] rounded-2xl  border-[#fff] border-[2px]'> */}
            <thead className=' border-b '>
              <tr className='divide-x bg-gray-700'>
                <th class='px-2  py-3 text-center text-xs leading-4 font-medium text-[#CCCCCC] uppercase tracking-wider'>
                  Task Title
                </th>
                <th class='px-2  py-3 text-center text-xs leading-4 font-medium text-[#CCCCCC] uppercase tracking-wider'>
                  Task Description
                </th>
                <th class='px-2  py-3 text-center text-xs leading-4 font-medium text-[#CCCCCC] uppercase tracking-wider'>
                  Target Url
                </th>
                <th class='px-2  py-3 text-center text-xs leading-4 font-medium text-[#CCCCCC] uppercase tracking-wider'>
                  Task
                  Bonus
                </th>
                <th class='px-2  py-3 text-center text-xs leading-4 font-medium text-[#CCCCCC] uppercase tracking-wider'>
                  Task
                  Deadline
                </th>

                <th class='px-2  py-3 text-center text-xs leading-4 font-medium text-[#CCCCCC] uppercase tracking-wider'>
                  Task
                  Deadline
                </th>
                <th class='px-2  py-3 text-center text-xs leading-4 font-medium text-[#CCCCCC] uppercase tracking-wider'>
                  Submit
                </th>
              </tr>
            </thead>
            <tbody class='text-white   divide-y  divide-[#BDBDBD]'>
              {/* <!-- Table rows go here --> */}
              <tr className='divide-x '>
                <td class='pr-2 py-4 whitespace-no-wrap'>
                  <div class='ml-4'>
                    <div class='text-sm leading-5 font-medium '>
                      Take 2 or 3 pictures .... day and copy the                    </div>
                  </div>
                </td>
                <td class='px-2 py-1 whitespace-no-wrap'>
                  <div class='text-sm leading-5 '> {"I'm very happy to be with t......MindChain.Join our twitter:"} </div>
                </td>
                <td class='px-2 py-1  '>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold  '>
                    https:www....com/
                  </span>
                </td>
                <td class='px-2 py-1 whitespace-no-wrap'>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold  '>
                    https:www....com/
                  </span>
                </td>
                <td class='px-0 py-1 text-center'>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold  '>
                    2
                  </span>
                </td>
                <td class='px-2 py-1 whitespace-no-wrap'>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold  '>
                    21.02.2024
                  </span>
                </td>
                <td class='px-2 py-1 text-center'>
                  <button className='px-2 py-1 bg-[#FF9F2E]  rounded-xl font-semibold text-sm'>Submit</button>
                </td>
              </tr>
              <tr className='divide-x '>
                <td class='pr-2 py-4  '>
                  <div class='ml-4'>
                    <div class='text-sm leading-5 font-medium '>
                      Take 2 or 3 pictures .... day and copy the
                    </div>
                  </div>
                </td>
                <td class='px-2 py-1 whitespace-no-wrap'>
                  <div class='text-sm leading-5 '> {"I'm very happy to be with t......MindChain.Join our twitter:"} </div>
                </td>
                <td class='px-2 py-1  '>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold  '>
                    https:www....com/
                  </span>
                </td>
                <td class='px-2 py-1 whitespace-no-wrap'>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold  '>
                    https:www....com/
                  </span>
                </td>
                <td class='px-0 py-1 text-center'>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold  '>
                    2
                  </span>
                </td>
                <td class='px-2 py-1 whitespace-no-wrap'>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold  '>
                    21.02.2024
                  </span>
                </td>
                <td class='px-2 py-1 text-center'>
                  <button className='px-2 py-1 bg-[#FF9F2E]  rounded-xl font-semibold text-sm'>Submit</button>
                </td>
              </tr>
              <tr className='divide-x '>
                <td class='pr-2 py-4  '>
                  <div class='ml-4'>
                    <div class='text-sm leading-5 font-medium '>
                      Take 2 or 3 pictures .... day and copy the                    </div>
                  </div>
                </td>
                <td class='px-2 py-1 whitespace-no-wrap'>
                  <div class='text-sm leading-5 '> {"I'm very happy to be with t......MindChain.Join our twitter:"} </div>
                </td>
                <td class='px-2 py-1  '>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold  '>
                    https:www....com/
                  </span>
                </td>
                <td class='px-2 py-1 whitespace-no-wrap'>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold  '>
                    https:www....com/
                  </span>
                </td>
                <td class='px-0 py-1 text-center'>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold  '>
                    2
                  </span>
                </td>
                <td class='px-2 py-1 whitespace-no-wrap'>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold  '>
                    21.02.2024
                  </span>
                </td>
                <td class='px-2 py-1 text-center'>
                  <button className='px-2 py-1 bg-[#FF9F2E]  rounded-xl font-semibold text-sm'>Submit</button>
                </td>
              </tr>
              <tr className='divide-x '>
                <td class='pr-2 py-4  '>
                  <div class='ml-4'>
                    <div class='text-sm leading-5 font-medium '>
                      Take 2 or 3 pictures .... day and copy the                    </div>
                  </div>
                </td>
                <td class='px-2 py-1 whitespace-no-wrap'>
                  <div class='text-sm leading-5 '> {"I'm very happy to be with t......MindChain.Join our twitter:"} </div>
                </td>
                <td class='px-2 py-1  '>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold  '>
                    https:www....com/
                  </span>
                </td>
                <td class='px-2 py-1 whitespace-no-wrap'>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold  '>
                    https:www....com/
                  </span>
                </td>
                <td class='px-0 py-1 text-center'>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold  '>
                    2
                  </span>
                </td>
                <td class='px-2 py-1 whitespace-no-wrap'>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold  '>
                    21.02.2024
                  </span>
                </td>
                <td class='px-2 py-1 text-center'>
                  <button className='px-2 py-1 bg-[#FF9F2E]  rounded-xl font-semibold text-sm'>Submit</button>
                </td>
              </tr>
              <tr className='divide-x'>
                <td class='pr-2 py-4'>
                  <div class='ml-4'>
                    <div class='text-sm leading-5 font-medium '>
                      Take 2 or 3 pictures .... day and copy the                    </div>
                  </div>
                </td>
                <td class='px-2 py-1 whitespace-no-wrap'>
                  <div class='text-sm leading-5 '> {"I'm very happy to be with t......MindChain.Join our twitter:"} </div>
                </td>
                <td class='px-2 py-1  '>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold  '>
                    https:www....com/
                  </span>
                </td>
                <td class='px-2 py-1 whitespace-no-wrap'>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold  '>
                    https:www....com/
                  </span>
                </td>
                <td class='px-0 py-1 text-center'>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold  '>
                    2
                  </span>
                </td>
                <td class='px-2 py-1 whitespace-no-wrap'>
                  <span class='px-2 inline-flex text-xs leading-5 font-semibold  '>
                    21.02.2024
                  </span>
                </td>
                <td class='px-2 py-1 text-center'>
                  <button className='px-2 py-1 bg-[#FF9F2E]  rounded-xl font-semibold text-sm'>Submit</button>
                </td>
              </tr>
              {/* <!-- More table rows go here --> */}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default PendingTask;