import Image from "next/image";
import Link from "next/link";
import { FaCartArrowDown, FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary">
      {/* Navigation Bar */}
      <div className="grid grid-cols-3 gap-5 items-center justify-between w-full px-8 py-4 bg-primary">
        <h1 className="text-2xl font-bold">NYTURE</h1>
        <div className="flex space-x-4 justify-center">
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            HOME
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            SHOP
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            PAGES
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            BLOG
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            CONTACT US
          </Link>
        </div>
        <div className="flex space-x-4 justify-end">
          <button>
            <FaRegUser />
          </button>
          <button>
            <FaSearch />
          </button>
          <button>
            <FaCartArrowDown />
          </button>
          <button>
            <HiMenuAlt2 />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-primary grid grid-cols-2  items-center justify-center flex-1 w-full px-10 ">
        <div className="flex flex-col text-center items-center">
          <p className="text-sm text-gray-500 line-through">$2,250.00</p>
          <h2 className="text-4xl font-bold">
            Sunday Modular
            <br /> Leather Chaise
          </h2>
          <p className="mt-4 text-gray-600 pt-6">
            Your sofa is where you let your guard down,
            <br /> put your feet up, and just relax.
          </p>
          <button className="px-6 py-4 mt-12 text-white bg-for rounded ">
            SHOP NOW
          </button>
          {/* <div className="flex mt-8 space-x-4">
            <button className="p-2 bg-gray-200 rounded-full">
              <span className="sr-only">Previous</span>
              &lt;
            </button>
            <button className="p-2 bg-gray-200 rounded-full">
              <span className="sr-only">Next</span>
              &gt;
            </button>
          </div> */}
        </div>
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-96 h-96 rounded-full bg-second flex items-center justify-center">
            <Image
              src="/images/11-removebg-preview.png"
              alt="image"
              width={700}
              height={500}
              className="absolute -top-5 right-72 transform translate-x-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
