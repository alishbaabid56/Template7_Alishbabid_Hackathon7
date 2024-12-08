import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Heart icons
import { GiCarDoor } from 'react-icons/gi'; // Fuel icon placeholder
import { BiCog } from 'react-icons/bi'; // Transmission icon
import { FaUsers } from 'react-icons/fa'; // Seats icon
import Image from 'next/image'; // Import Next.js Image component
import Link from 'next/link';
export default function PopularCar() {
  const cars = [
    {
      id: 1,
      name: "Koenigsegg",
      type: "Sport",
      price: 99.00,
      capacity: "90L",
      transmission: "Manual",
      seats: "2 People",
      img: "/car1.png",
      favorite: true,
    },
    {
      id: 2,
      name: "Nissan GT-R",
      type: "Sport",
      price: 80,
      capacity: "80L",
      transmission: "Manual",
      seats: "2 People",
      img: "/car2.png",
      favorite: false,
      originalPrice: 100,
    },
    {
      id: 3,
      name: "Rolls - Royce",
      type: "Sedan",
      price: 96,
      capacity: "70L",
      transmission: "Manual",
      seats: "4 People",
      img: "/car3.png",
      favorite: true,
    },
    {
      id: 4,
      name: "Nissan GT - R",
      type: "Sport",
      price: 80,
      capacity: "80L",
      transmission: "Manual",
      seats: "2 People",
      img: "/car2.png",
      favorite: false,
      originalPrice: 100,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Popular Cars Section */}
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Popular Cars</h2>
            <Link href="/category" className="text-blue-500 hover:underline">
              View All
            </Link>
          </div>
          {/* Responsive Grid with Horizontal Scroll on Small Screens */}
          <div className="mt-6 overflow-x-auto sm:overflow-hidden">
            <div className="flex space-x-6 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {cars.map((car) => (
                <div
                  key={car.id}
                  className="bg-white shadow-md rounded-lg p-6 relative w-[304px] h-[388px]"
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
                  <div className="mt-28 mb-4 flex justify-center relative">
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
                  <div className="flex items-center text-gray-500 text-sm mt-20 space-x-4">
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
                      <p className="truncate">{car.seats}</p>
                    </div>
                  </div>

                  {/* Price and Rent Button */}
                  <div className="flex justify-between items-center mt-6">
                    <p className="text-lg font-bold">
                      ${car.price}.00
                      <span className="text-gray-400 text-[14px]">/day</span>
                    </p>
                    <Link href="/details">
                    <button className="bg-blue-700 text-white px-4 py-2 text-sm">
                      Rent Now
                    </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}