import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className='px-5 bg-gray-700 text-white py-5'>
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='text-3xl font-bold'>Logo</h2>
          </div>
          <ul className='flex gap-3'>
            <li className='text-lg'>Item 1</li>
            <li className='text-lg'>Item 2</li>
            <li className='text-lg'>Item 3</li>
            <li className='text-lg'>Item 4</li>
            <li className='text-lg'>Dashboard</li>
          </ul>
        </div>
      </div>

      <h2 className='text-2xl font-semibold text-center mt-5'>AIR DROP</h2>
      <div></div>
    </div>
  );
}
