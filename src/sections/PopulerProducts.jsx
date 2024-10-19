import React from 'react';
import { products } from '../constants';
import PopularProductCard from '../components/PopularProductCard';

function PopularProducts() {
  return (
    <section
      id="products"
      className="relative py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Title and Description */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Our{' '}
            <span className="bg-gradient-to-r from-coral-red to-pink-500 text-transparent bg-clip-text">
              Popular
            </span>{' '}
            Products
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-500">
            Explore our best-selling products that combine quality, comfort, and style. 
            Handpicked just for you, each product is designed to exceed your expectations.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-16 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {products.map((product) => (
            <PopularProductCard
              key={product.name}
              {...product}
              className="bg-white shadow-lg rounded-lg p-6 transform transition hover:-translate-y-3 hover:shadow-2xl"
            />
          ))}
        </div>
      </div>
      
      {/* Decorative Blob Background */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-coral-red to-pink-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-coral-red to-pink-400 opacity-20 rounded-full blur-3xl"></div>
    </section>
  );
}

export default PopularProducts;
