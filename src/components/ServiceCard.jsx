import React from 'react'

function ServiceCard({ imgURL, label, subtext }) {
  return (
    <div
      className="relative flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-3xl bg-white shadow-xl px-10 py-12 transition-transform duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-105"
    >
      {/* Decorative background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-coral-red via-pink-500 to-purple-500 opacity-10 rounded-3xl pointer-events-none"></div>

      {/* Icon container */}
      <div className="relative z-10 w-16 h-16 flex justify-center items-center bg-gradient-to-tr from-coral-red to-pink-500 rounded-full shadow-lg">
        <img 
          src={imgURL} 
          alt={label}
          className="object-contain w-8 h-8"
        />
      </div>

      {/* Title */}
      <h3
        className="relative z-10 mt-8 font-palanquin text-2xl sm:text-3xl leading-snug font-bold text-gray-800 transition-colors duration-300 group-hover:text-pink-600"
      >
        {label}
      </h3>

      {/* Subtext */}
      <p
        className="relative z-10 mt-4 break-words font-montserrat text-base sm:text-lg leading-relaxed text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
      >
        {subtext}
      </p>
    </div>
  )
}

export default ServiceCard
