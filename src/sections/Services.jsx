import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

function Services() {
  return (
    <section className="relative max-container px-6 py-16">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-48 h-48 bg-coral-red opacity-30 blur-3xl rounded-full -top-12 -left-16"></div>
        <div className="absolute w-56 h-56 bg-pink-500 opacity-20 blur-3xl rounded-full -bottom-16 -right-12"></div>
      </div>
      <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-12">
        Our Premium Services
      </h2>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"></div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <ServiceCard
            key={service.label}
            {...service}
            className="group transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          />
        ))}
      </div>
    </section>
  )
}

export default Services
