import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

function SuperQuality() {
  return (
    <section
      id="about-us"
      className="relative flex justify-between items-center max-lg:flex-col gap-10 w-full max-container px-8 py-24"
    >
      {/* Decorative Glassmorphism Background Circles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-48 h-48 bg-coral-red opacity-30 blur-3xl rounded-full -top-12 -left-16"></div>
        <div className="absolute w-56 h-56 bg-pink-500 opacity-20 blur-3xl rounded-full -bottom-16 -right-12"></div>
      </div>

      {/* Left Section: Text Content */}
      <div className="flex flex-1 flex-col text-center max-lg:text-left z-20">
        <h2 className="font-palanquin text-4xl sm:text-5xl md:text-6xl capitalize font-black leading-tight text-gray-900">
          We Provide You{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-red to-red-600 animate-gradient-swipe">
            Super
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 animate-gradient-swipe">
            Quality
          </span>{" "}
          Shoes
        </h2>
        <p className="mt-6 lg:max-w-lg mx-auto text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
          Discover unmatched comfort and style with our meticulously designed
          footwear. Each pair offers a unique blend of quality, innovation, and
          elegance, making every step feel extraordinary.
        </p>
        <p className="mt-4 lg:max-w-lg mx-auto text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
          Crafted with precision and dedication, our shoes ensure style and
          satisfaction in every stride.
        </p>

        {/* Call to Action Button */}
        <div className="mt-10">
          <Button
            label="Shop Now"
            className="relative px-8 py-4 bg-gradient-to-r from-coral-red to-red-600 text-white font-semibold rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-red-700 focus:outline-none"
          />
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 flex justify-center items-center z-20 relative">
        {/* Parallax Effect with 3D Look */}
        <div className="relative w-full max-w-lg h-auto overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:skew-y-2">
          <img
            src={shoe8}
            alt="Stylish quality shoe"
            className="w-full h-auto object-cover rounded-xl transform transition-transform duration-700 hover:scale-110"
          />
          {/* Glassmorphism effect */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white/30 backdrop-blur-lg rounded-b-xl flex items-center justify-center">
            <p className="text-lg font-medium text-white">
              High-Quality, Stylish Footwear
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuperQuality;
