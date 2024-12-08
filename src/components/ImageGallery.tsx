import React from "react";
import Image from "next/image";

const ImageGallery = () => {
  return (
    <div>
      {/* Card 2 */}
      <div>
        <div
          className="text-white rounded-lg w-full md:w-[640px] h-[360px] pt-6 pl-16 md:block"
          style={{
            backgroundImage: "url('/bg2.png')", // Set the background image for card 2
            backgroundSize: "cover", // Ensure the background covers the div
            backgroundPosition: "center", // Center the background image
          }}
        >
          <div
            className="flex flex-col justify-start -ml-16 w-[284px] h-[224px] pt-4 pl-6 gap-3 bg-opacity-50 rounded-lg"
          >
            <h2
              className="mb-1"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif", // Ensure font is applied
                fontWeight: 600, // Semibold font weight
                fontSize: "32px", // Font size 32px
                lineHeight: "48px", // Line height 48px
                letterSpacing: "-0.03em",
              }}
            >
              Easy way to rent a car at a low price
            </h2>
            <p className="text-sm mb-2"> {/* Reduced bottom margin */}
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
            <button className="bg-blue-400 hover:bg-blue-600 text-white px-3 py-2 rounded mt-2 w-max">
              Rental Car
            </button>
          </div>
          {/* Car image remains as before */}
          <div className="-mt-6 ml-32">
            <Image
              src="/car2.png" // Replace with your car image path
              alt="Car"
              width={406}
              height={116}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <br />
      <br />
      {/* Image Gallery */}
      <br />
      <div className="flex justify-start gap-4 overflow-x-auto">
        {["/View1.png", "/View2.png", "/View3.png"].map((img, index) => (
          <div key={index} className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-45 xl:w-56 xl:h-38">
            <Image
              src={img}
              alt={`Gallery ${index}`}
              width={100}  // Default small size
              height={100} // Default small size
              className="w-full h-full object-cover rounded-md cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;