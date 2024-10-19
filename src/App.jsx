import React from 'react'
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import PopulerProducts from "./sections/PopulerProducts";
import SuperQuality from "./sections/SuperQuality";
import SpecialOffers from "./sections/SpecialOffers";
import CustomerReviews from "./sections/CustomerReviews"
import Services from "./sections/Services";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";

function App() {
  return (
    <main className='relative overflow-x-hidden'>
      <Nav/>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className='padding'>
        <PopulerProducts/>
      </section>
      <section className='padding'>
        <SuperQuality/>
      </section>
      <section className='padding-x py-10'>
        <Services/>
      </section>
      <section className='padding'>
        <SpecialOffers/>
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews/>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer/>
      </section>
    </main>
  )
}

export default App
