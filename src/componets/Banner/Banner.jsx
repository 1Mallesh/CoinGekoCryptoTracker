import React from 'react';
import BanerImg from '../../assets/bannerimg.jpg'; // Adjust the path if needed

function Banner() {
  return (
    <div className="relative w-full">
      <img
        src={BanerImg}
        alt="Banner"
        className="w-full h-64 object-cover"
      />

      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 rounded-lg p-6 shadow-lg w-80 text-white">
        <div className="flex flex-col gap-3 items-center">
          <h2 className="text-2xl font-bold">Welcome to CoinGecko</h2>
          <p className="text-center text-sm font-medium">
            Get all info regarding cryptocurrency
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
