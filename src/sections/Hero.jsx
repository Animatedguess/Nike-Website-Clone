import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute w-56 h-56 bg-pink-500 opacity-20 blur-3xl rounded-full -bottom-16 -left-12"></div>
        </div>
        <p className="text-xl font-montserrat text-coral-red tracking-wide">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute w-48 h-48 bg-coral-red opacity-30 blur-3xl rounded-full -top-12 -right-16"></div>
          </div>
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-16 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button
          label="Shop Now"
          iconURL={arrowRight}
          className="transition-transform transform hover:scale-110 hover:shadow-lg duration-300"
        />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-palanquin font-bold text-primary">
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10 transition-transform duration-500 ease-in-out hover:scale-105"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div
              key={shoe.key}
              className="transform transition-transform hover:scale-110 duration-300"
            >
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
