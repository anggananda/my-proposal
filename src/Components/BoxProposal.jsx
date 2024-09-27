import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";

const BoxProposal = ({ visibility }) => {
  const navigate = useNavigate();
  const [noPosition, setNoPosition] = useState({ top: 0, left: 0 });
  const [isTypingComplete, setIsTypingComplete] = useState(false); // Track typing completion
  const [showMessage, setShowMessage] = useState(false); // Track when to show the message

  // Function to generate a random position for the 'No' button
  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 300) - 150; // Random top position
    const randomLeft = Math.floor(Math.random() * 300) - 150; // Random left position
    setNoPosition({ top: randomTop, left: randomLeft });
  };

  const handleYesClick = () => {
    navigate("/yes"); // Navigate to '/yes' route
  };

  return (
    <div
      className={`flex justify-center z-[999] items-center flex-col gap-4 w-[350px] md:w-[600px] mx-auto shadow-2xl absolute top-[50%] left-[50%] rounded-md p-8 bg-gradient-to-b from-[#32012F] to-[#4B134F] transform -translate-x-1/2 -translate-y-1/2 ease-in-out duration-500 ${visibility} z-50`}
    >
      <div className="mb-6">
        {/* Render the typed text */}
        {visibility === "scale-100" && (
          <ReactTyped
            className="text-2xl md:text-3xl font-greatVibe text-pink-300"
            strings={[
              "I've waited for this moment...",
              "You make my heart feel complete 💖",
              "Will you let me love you forever? 💍",
            ]}
            showCursor={false}
            typeSpeed={50}
            backSpeed={40}
            onComplete={() => {
              setIsTypingComplete(true);
              setTimeout(() => setShowMessage(true), 300); // Show message after a short delay
            }} // Set typing complete to true when typing is done
          />
        )}
      </div>

      {/* Conditionally render the message and buttons after typing is complete */}
      {showMessage && (
        <>
          {/* Romantic Message */}
          <p className="text-center text-white font-poppins font-light text-sm md:text-xl mb-4 leading-relaxed opacity-0 transition-opacity duration-500 ease-in-out transform translate-y-4 animate-fade-in">
            Through every smile and every moment shared, my heart has found its
            home in you. I’ve said so many things, but now I have one question
            left:
            <br /> <span className="font-bold">Will you be mine, forever?</span>
          </p>

          {/* Button Section */}
          <div className="flex gap-6 mt-4 relative">
            {/* Yes Button */}
            <button
              onClick={handleYesClick}
              className="bg-gradient-to-r from-[#ff6f61] to-[#ffb6b9] text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            >
              Yes
            </button>

            {/* No Button */}
            <button
              onMouseEnter={moveNoButton}
              className="bg-gradient-to-r from-[#ff4d4d] to-[#ff9999] text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform absolute hover:scale-110"
              style={{
                top: `${noPosition.top}px`,
                left: `${noPosition.left}px`,
                position: "relative",
              }}
            >
              No
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BoxProposal;
