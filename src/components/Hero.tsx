import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4 px-4">
      {/* Card 1 */}
      <div
        className="text-white w-full md:w-[640px] h-[360px] pt-6 pl-16 rounded-lg"
        style={{
          backgroundImage: "url('/bg1.png')", // Set the background image for card 1
          backgroundSize: "cover", // Ensure the background covers the div
          backgroundPosition: "center", // Center the background image
        }}
      >
        <div
          className="flex flex-col justify-start w-[284px] h-[224px] pt-4 pl-6 gap-4 bg-opacity-50 rounded-lg"
        >
          <h2
            className="mb-1 -ml-16"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif", // Ensure font is applied
              fontWeight: 600, // Semibold font weight
              fontSize: "32px", // Font size 32px
              lineHeight: "48px", // Line height 48px
              letterSpacing: "-0.03em", // Letter spacing -3%
            }}
          >
            The Best Platform for Car Rental
          </h2>
          <p className="text-sm mb-2 -ml-16"> {/* Reduced bottom margin */}
            Ease of doing car rental safely and reliably. Of course at a low price.
          </p>
          <button className="bg-blue-700 hover:bg-blue-600 text-white px-3 py-2 rounded mt-2 w-max -ml-16">
            Rental Car
          </button>
        </div>
        {/* Car image remains as before */}
        <div className="-mt-3 ml-16 ">
          <Image
            src="/car1.png" // Replace with your car image path
            alt="Car"
            width={406}
            height={116}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Card 2 - Hidden on small screens, shown on medium and larger screens */}
      <div
        className="text-white rounded-lg w-full md:w-[640px] h-[360px] pt-6 pl-16 hidden md:block"
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
  );
}