import Title from '@/components/ui/title';
import React from 'react';

const AvailableTask = () => {
  return (
    <div className='dashboardScroll mb-10 max-w-full rounded-2xl mt-4 px-7 py-9  bg-[#FFFFFF] text-[#CCCCCC] bg-opacity-[14%]'>
      <div>
        <Title className={''} title={'Available Task '}></Title>
      </div>

      <div className='lg:max-w-[920px] xl:max-w-[950px] '>
        <div className='rounded-2xl  text-white overflow-x-auto mt-5'>
          <table class=' min-w-full rounded-2xl  border-[#fff] border-[2px]'>
            {/* <table class=' min-w-[1068px] rounded-2xl  border-[#fff] border-[2px]'> */}
            <thead className='border-b rounded-[15px]'>
              <tr className='divide-x'>
                <th class='px-6 py-3 text-left text-xs leading-4 font-medium text-[#CCCCCC] uppercase tracking-wider'>
                  Task Title
                </th>
                <th class='px-6 py-3 text-left text-xs leading-4 font-medium text-[#CCCCCC] uppercase tracking-wider'>
                  Task Description
                </th>
                <th class='px-6 py-3 text-left text-xs leading-4 font-medium text-[#CCCCCC] uppercase tracking-wider'>
                  Target Url
                </th>
                <th class='px-6 py-3 text-left text-xs leading-4 font-medium text-[#CCCCCC] uppercase tracking-wider'>
                  Task
                  Bonus
                </th>
                <th class='px-6 py-3 text-left text-xs leading-4 font-medium text-[#CCCCCC] uppercase tracking-wider'>
                  Task
                  Deadline
                </th>

                <th class='px-6 py-3 text-left text-xs leading-4 font-medium text-[#CCCCCC] uppercase tracking-wider'>
                  Task
                  Deadline
                </th>
                <th class='px-6 py-3 text-left text-xs leading-4 font-medium text-[#CCCCCC] uppercase tracking-wider'>
                  Submit
                </th>
              </tr>
            </thead>
            <tbody class='text-white   divide-y  divide-[#BDBDBD]'>
              {/* <!-- Table rows go here --> */}
              <tr className='divide-x '>
                <td class='pr-6 py-4 whitespace-no-wrap'>
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
                <td class='pr-6 py-4  '>
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
                <td class='pr-6 py-4  '>
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
                <td class='pr-6 py-4  '>
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
                <td class='pr-6 py-4'>
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

export default AvailableTask;