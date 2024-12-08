import { FaHeart, FaRegHeart } from 'react-icons/fa'; 
import { GiCarDoor } from 'react-icons/gi'; 
import { BiCog } from 'react-icons/bi'; 
import { FaUsers } from 'react-icons/fa'; 
import Image from 'next/image'; 
import Link from 'next/link'; 

export default function RecommendationCar() {
  const cars = [
    {
      id: 1,
      name: "All New Rush",
      type: "SUV",
      price: 72,
      capacity: "70L",
      transmission: "Manual",
      seats: "6 People",
      img: "/car5.png",
      favorite: false,
    },
    {
      id: 2,
      name: "CR-V",
      type: "SUV",
      price: 80,
      capacity: "80L",
      transmission: "Manual",
      seats: "6 People",
      img: "/car6.png",
      favorite: true,
    },
    {
      id: 3,
      name: "All New Terios",
      type: "SUV",
      price: 74,
      capacity: "90L",
      transmission: "Manual",
      seats: "6 People",
      img: "/car7.png",
      favorite: false,
    },
    {
      id: 4,
      name: "CR-V",
      type: "SUV",
      price: 80,
      capacity: "80L",
      transmission: "Manual",
      seats: "6 People",
      img: "/car8.png",
      favorite: true,
    },
    {
      id: 5,
      name: "MG ZX Exclusive",
      type: "Hatchback",
      price: 76,
      capacity: "70L",
      transmission: "Manual",
      seats: "4 People",
      img: "/car9.png",
      favorite: true,
    },
    {
      id: 6,
      name: "New MG ZS",
      type: "SUV",
      price: 80,
      capacity: "80L",
      transmission: "Manual",
      seats: "6 People",
      img: "/car10.png",
      favorite: false,
    },
    {
      id: 7,
      name: "MG ZX Exclusive",
      type: "Hatchback",
      price: 76,
      capacity: "70L",
      transmission: "Manual",
      seats: "4 People",
      img: "/car11.png",
      favorite: true,
    },
    {
      id: 8,
      name: "New MG ZS",
      type: "SUV",
      price: 80,
      capacity: "80L",
      transmission: "Manual",
      seats: "6 People",
      img: "/car12.png",
      favorite: false,
    },
  ];

  return (
    <div className="bg-gray-50 -mt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Popular Cars Section */}
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Recommendation Car</h2>
          </div>
          {/* Responsive Grid with Horizontal Scroll on Small Screens */}
          <div className="mt-6 overflow-x-auto sm:overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {cars.map((car) => (
                <div
                  key={car.id}
                  className="bg-white shadow-md rounded-lg p-6 relative w-full sm:w-[304px] h-auto"
                >
                  {/* Name and Heart Icon - Above Image */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{car.name}</h3>
                    <button>
                      {car.favorite ? (
                        <FaHeart className="w-6 h-6 text-red-500" />
                      ) : (
                        <FaRegHeart className="w-6 h-6 text-gray-400" />
                      )}
                    </button>
                  </div>

                  {/* Image using Next.js Image component with shadow */}
                  <div className="mt-24 mb-4 flex justify-center relative">
                    <Image
                      src={car.img}
                      alt={car.name}
                      width={232} // Set the width of the image to match card width
                      height={128} // Adjust the height of the image for better center alignment
                      className="w-auto h-auto object-contain"
                    />
                    {/* Add shadow under the image */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white opacity-25 shadow-lg h-8"></div>
                  </div>

                  {/* Car Details */}
                  <div className="flex items-center text-gray-500 text-sm mt-4 sm:mt-20 space-x-4">
                    <div className="flex items-center space-x-1">
                      <GiCarDoor className="w-4 h-4 text-gray-500" />
                      <p>{car.capacity}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BiCog className="w-4 h-4 text-gray-500" />
                      <p>{car.transmission}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaUsers className="w-4 h-4 text-gray-500" />
                      <p>{car.seats}</p>
                    </div>
                  </div>

                  {/* Price and Rent Button */}
                  <div className="flex justify-between items-center mt-2 sm:mt-4 sm:justify-between">
                    <p className="text-lg font-bold text-left sm:text-right">
                      ${car.price}.00
                      <span className="text-gray-400 text-[14px]">/day</span>
                    </p>
                    <Link href="/details">
                    <button className="bg-blue-700 text-white px-4 py-2 text-sm mt-2 sm:mt-0">
                      Rent Now
                    </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/category">
              <button className="bg-blue-700 text-white px-4 py-2 ">
                Show More Cars
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}