import { FaChevronDown } from "react-icons/fa";
import { BsArrowDownUp } from "react-icons/bs";
import Image from "next/image";

export default function PickDropSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-4 mt-10">
      {/* Pick-Up Section */}
      <div className="flex items-center bg-white shadow-md rounded-lg w-full md:w-[582px] h-[132px] p-4">
        {/* Content */}
        <div className="flex flex-col w-full">
          <div className="flex items-center">
            {/* Image */}
            <Image
              src="/mark1.png"
              alt="mark"
              width={16}
              height={16}
              className="mr-2"
            />
            {/* Heading */}
            <h3 className="text-black font-semibold text-[16px]">Pick-Up</h3>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {/* Location */}
            <div>
              <h4 className="text-black text-sm font-bold">Location</h4>
              <p className="relative text-gray-500 text-sm rounded-md p-2 pr-6 cursor-pointer">
                Select your city
                <FaChevronDown className="absolute top-3 right-2 text-gray-500" />
              </p>
            </div>

            {/* Date */}
            <div>
              <h4 className="text-black text-sm font-bold">Date</h4>
              <p className="relative text-gray-500 text-sm rounded-md p-2 pr-6 cursor-pointer">
                Select your date
                <FaChevronDown className="absolute top-3 right-2 text-gray-500" />
              </p>
            </div>

            {/* Time */}
            <div>
              <h4 className="text-black text-sm font-bold">Time</h4>
              <p className="relative text-gray-500 text-sm rounded-md p-2 pr-6 cursor-pointer">
                Select your time
                <FaChevronDown className="absolute top-3 right-2 text-gray-500" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Swap Icon */}
      <div className="bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
        <BsArrowDownUp />
      </div>

      {/* Drop-Off Section */}
      <div className="flex items-center bg-white shadow-md rounded-lg w-full md:w-[582px] h-[132px] p-4">
        {/* Content */}
        <div className="flex flex-col w-full">
          <div className="flex items-center">
            {/* Image */}
            <Image
              src="/mark.png"
              alt="mark"
              width={16}
              height={16}
              className="mr-2"
            />
            {/* Heading */}
            <h3 className="text-black font-semibold text-[16px]">Drop-Off</h3>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {/* Location */}
            <div>
              <h4 className="text-black text-sm font-bold">Location</h4>
              <p className="relative text-gray-500 text-sm rounded-md p-2 pr-6 cursor-pointer">
                Select your city
                <FaChevronDown className="absolute top-3 right-2 text-gray-500" />
              </p>
            </div>

            {/* Date */}
            <div>
              <h4 className="text-black text-sm font-bold">Date</h4>
              <p className="relative text-gray-500 text-sm rounded-md p-2 pr-6 cursor-pointer">
                Select your date
                <FaChevronDown className="absolute top-3 right-2 text-gray-500" />
              </p>
            </div>

            {/* Time */}
            <div>
              <h4 className="text-black text-sm font-bold">Time</h4>
              <p className="relative text-gray-500 text-sm rounded-md p-2 pr-6 cursor-pointer">
                Select your time
                <FaChevronDown className="absolute top-3 right-2 text-gray-500" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}