import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

function SpecialOffers() {
  return (
    <section
      id='specialOffer'
      className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container relative'
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-48 h-48 bg-coral-red opacity-30 blur-3xl rounded-full -top-12 -left-16"></div>
        <div className="absolute w-56 h-56 bg-pink-500 opacity-20 blur-3xl rounded-full -bottom-16 -right-12"></div>
      </div>
      <div
        className='flex-1'
      >
        <img 
          src={offer} 
          alt="offer"
          width={773}
          height={687}
          className='object-contain w-full' 
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You 
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart
        </p>
        <p
          className="mt-6 lg:max-w-lg info-text"
        >
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div
          className="mt-11 flex flex-wrap gap-4"
        >
          <Button 
            label="Shop now"
            iconURL={arrowRight}
          />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers
