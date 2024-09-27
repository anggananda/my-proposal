import React, { useState } from "react";
import BoxProposal from "../Components/BoxProposal";
import Button from "../Components/Button";
import Message from "../Components/Message";
import { message, img } from "../utils/proposal";
import Audio from "../Components/Audio";
import { ReactTyped } from "react-typed";

const Proposal = () => {
  const [next, setNext] = useState(0);
  const [showSecondTyped, setShowSecondTyped] = useState(false);

  const handleNext = () => {
    if (next < message.length) {
      setNext((prev) => prev + 1);
    }
  };

  return (
    <div className="grid md:grid-cols-[1.5fr_2fr] h-[100dvh] relative">
      <Audio />
      {next === 6 ? (
        <BoxProposal visibility={"scale-100"} />
      ) : (
        <BoxProposal visibility={"scale-0"} />
      )}

      {/* Bagian Foto: Tersembunyi di layar mobile, hanya muncul di layar besar */}
      <div
        style={{ backgroundImage: `url(${img[next % img.length]})` }}
        className="p-10 flex justify-between flex-col bg-center bg-cover relative after:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-[rgba(0,0,0,0.6)] "
      >
        <div className="z-50 block md:hidden">
          <div className="flex flex-col gap-1">
            <ReactTyped
              className="text-2xl md:text-3xl font-greatVibe text-white md:text-black"
              strings={["Hey My Lovely Anggie 💞"]}
              typeSpeed={80}
              showCursor={false}
              onComplete={() => {
                // Set the state to true when typing is complete
                setShowSecondTyped(true);
              }}
            />
            {showSecondTyped && (
              <ReactTyped
                strings={["That's all I will wait for your reply"]}
                className="font-poppins font-light text-sm md:text-lg mt-1 text-white md:text-black"
                showCursor={false}
                typeSpeed={80}
              />
            )}
          </div>

          <Message message={message} next={next} />
        </div>

        {next < 6 && (
          <Button handleNext={handleNext} next={next} mode={"mobile"} />
        )}
      </div>

      {/* Bagian Pertanyaan */}
      <div className="p-10 flex-col hidden md:flex justify-between bg-white md:bg-gradient-to-b from-white to-[#f5d0e3]">
        <div>
          <div className="flex flex-col gap-1">
            <ReactTyped
              className="text-2xl md:text-3xl font-greatVibe text-white md:text-black"
              strings={["Hey My Lovely Anggie 💞"]}
              typeSpeed={80}
              showCursor={false}
              onComplete={() => {
                // Set the state to true when typing is complete
                setShowSecondTyped(true);
              }}
            />
            {showSecondTyped && (
              <ReactTyped
                strings={["That's all I will wait for your reply"]}
                className="font-poppins font-light text-sm md:text-lg mt-1 text-white md:text-black"
                showCursor={false}
                typeSpeed={80}
              />
            )}
          </div>

          <Message message={message} next={next} />
        </div>

        {next < 6 && <Button handleNext={handleNext} next={next} />}
      </div>
    </div>
  );
};

export default Proposal;
