import React, { useState } from "react";

const Button = ({ handleNext, next, mode }) => {
  const [isClickable, setIsClickable] = useState(true);

  const handleClick = () => {
    if (isClickable) {
      setIsClickable(false); // Nonaktifkan tombol
      handleNext(); // Panggil fungsi handleNext

      // Aktifkan kembali tombol setelah 1.5 detik
      setTimeout(() => {
        setIsClickable(true);
      }, 1000);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full bottom-[20px] p-2 text-white hover:bg-secondary rounded-md bg-primary ${mode === "mobile" ? 'block md:hidden z-[999]' : "hidden md:block"} font-greatVibe text-xl md:text-2xl`}
      disabled={!isClickable} // Menonaktifkan tombol jika tidak dapat diklik
    >
      {next < 1 ? "Continue" : "Next"}
    </button>
  );
};

export default Button;
