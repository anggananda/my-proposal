import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className="relative h-[100dvh] bg-gradient-to-b from-[#32012F] to-[#9A2A4E] overflow-hidden">
      <div className="relative z-20 h-full flex justify-center items-center">
        <div className="w-[90%] max-w-[450px] flex flex-col justify-center items-center rounded-xl p-6 bg-black bg-opacity-70 shadow-xl">
          <img
            src="./img/home.gif" // Pastikan untuk mengganti dengan path yang sesuai
            alt="Love"
            className="rounded-full w-24 h-24 md:w-32 md:h-32 mb-4 border-4 border-pink-500 shadow-lg"
          />

          <ReactTyped
            strings={["Hello, My Love", "How Are You Today?", "Are U Ready to Continue Our Journey?"]}
            backSpeed={120}
            typeSpeed={80}
            className="font-greatVibe text-2xl md:text-3xl text-center text-pink-300 mb-4"
            loop
            showCursor={false}
          />

          <Link
            to="/proposal"
            className="px-3 py-1 md:px-6 md:py-3 rounded-full text-white bg-gradient-to-r from-[#32012F] to-[#9A2A4E] hover:from-[#9A2A4E] hover:to-[#32012F] transition duration-300 ease-in-out transform hover:scale-105 shadow-lg text-sm md:text-base"
          >
            Continue Our Journey
          </Link>
        </div>
      </div>

      <h3 className="absolute bottom-4 left-4 text-xs md:text-sm text-gray-300 font-poppins">
        Dedicated to Anggie, with all my love – Angga ~{" "}
        <span className="font-greatVibe text-lg">Journey#2</span>
      </h3>
    </div>
  );
};

export default Home;
