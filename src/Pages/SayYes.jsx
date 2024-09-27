import React from "react";
import { Link } from "react-router-dom";
import Audio from "../Components/Audio";

const SayYes = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-[#32012F] to-[#9A2A4E] flex flex-col justify-between overflow-hidden p-6">
      {/* Minimalist Home Button */}
      <div className="absolute top-4 right-4">
        <Link
          to="/"
          className="bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-90 transition duration-300 shadow-md flex items-center"
        >
          <span className="text-lg font-semibold text-[#32012F]">🏠</span>
        </Link>
      </div>

      <Audio />
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-gradient-to-b from-[#f9f9f9] to-[#ffffff] rounded-3xl shadow-lg p-6 md:p-10 max-w-lg text-center relative transform transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-auto max-h-[80vh]">
          <div className="flex justify-center items-center mb-4">
            <img
              src="./img/foru.gif"
              width={120}
              alt="Heart GIF"
              className="animate-pulse"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#32012F] mb-4 font-greatVibe">
            A Special Thank You
          </h2>
          <p className="text-sm md:text-md text-gray-700 mb-4 font-poppins">
            Thank you for accepting me into your life. I know I have my flaws,
            but with each day we spend together, my love for you grows deeper.
          </p>
          <p className="text-sm md:text-md text-gray-700 mb-4 font-poppins">
            Being with you brings me immense joy; sometimes, it feels like I’m
            living in a beautiful dream. You are my purpose, my forever, and I
            hope you feel the same way.
          </p>
          {/* Additional content for scrolling */}
          <p className="text-sm md:text-md text-gray-700 mb-4 font-poppins">
            Every moment spent with you feels like a cherished memory waiting to
            unfold. You inspire me to be the best version of myself, and I’m
            grateful for every laugh, every smile, and every quiet moment we
            share.
          </p>
          <p className="text-sm md:text-md text-gray-700 mb-4 font-poppins">
            Your kindness and compassion illuminate my world. You have this
            incredible ability to make everything better, and I cannot express
            how much that means to me.
          </p>
          <p className="text-sm md:text-md text-gray-700 mb-4 font-poppins">
            I look forward to all the adventures that await us, knowing that
            with you by my side, I can conquer anything. You are not just my
            love; you are my best friend and confidant.
          </p>
          <p className="text-sm md:text-md text-gray-700 mb-4 font-poppins">
            As we continue this journey together, I promise to cherish, support,
            and love you unconditionally. You have my heart, now and forever.
          </p>
          <p className="text-sm md:text-md text-gray-700 mb-4 font-poppins">
            Thank you for being you—for your laughter, your strength, and your
            unwavering love. I can’t wait to see what the future holds for us.
          </p>
          <p className="text-sm md:text-md text-gray-700 mb-4 font-poppins">
            Remember, no matter the challenges we face, my love for you will
            never waver. You are my light, my joy, and my everything.
          </p>
          <p className="text-md md:text-xl text-primary font-semibold mb-6 font-greatVibe">
            On September 27, 2024, I took a brave step and confessed my feelings
            for you. I love you so much, Anggie Stephanandra Maheswari 💗
          </p>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#ffffff] to-transparent opacity-30"></div>
        </div>
      </div>

      {/* Bouncing love images */}
      <div className="absolute bottom-[-40px] left-0">
        <img
          src="./img/love.png"
          className="w-[150px] md:w-[350px] slow-bounce"
          alt=""
        />
      </div>
      <div className="absolute bottom-[-40px] right-0">
        <img
          src="./img/love.png"
          className="w-[150px] md:w-[350px] slow-bounce"
          alt=""
        />
      </div>
    </div>
  );
};

export default SayYes;
