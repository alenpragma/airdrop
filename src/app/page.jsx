import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='mx-auto text-center mt-5'>
      <h2 className='text-2xl text-white font-semibold text-center mt-5'>
        Login
      </h2>
      <Link href={"/dashbord"}>
        <button className='text-white outline mt-4 rounded-md  px-4 py-2'>
          Dashbord
        </button>
      </Link>
    </div>
  );
}
