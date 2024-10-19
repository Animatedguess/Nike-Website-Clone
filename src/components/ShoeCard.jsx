import React from 'react';

function ShoeCard({ imgURL, changeBigShoeImage, bigShoeImage }) {
    const handleClick = () => {
        if (bigShoeImage !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe);
        }
    };

    return (
        <div
            className={`relative border-2 rounded-2xl transition-all duration-300 transform hover:scale-105 
            ${bigShoeImage === imgURL.bigShoe ? 'border-coral-red shadow-lg' : 'border-gray-200'} cursor-pointer max-sm:flex-1`}
            onClick={handleClick}
        >
            {/* Hover Effect Background Glow */}
            {bigShoeImage === imgURL.bigShoe && (
                <div className="absolute inset-0 bg-gradient-to-r from-coral-red to-pink-500 opacity-20 blur-xl rounded-2xl"></div>
            )}
            
            <div className="relative flex justify-center items-center bg-white bg-center bg-cover sm:w-44 sm:h-44 rounded-2xl overflow-hidden max-sm:p-4">
                <img 
                    src={imgURL.thumbnail} 
                    alt="shoe collection" 
                    width={127}
                    height={103}
                    className="object-contain transition-transform duration-300 hover:scale-110"
                />
            </div>
        </div>
    );
}

export default ShoeCard;
