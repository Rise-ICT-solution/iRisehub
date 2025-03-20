import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TextSlider() {
  const [currentText, setCurrentText] = useState(0);

  const texts = ["Text 1", "Text 2", "Text 3", "Text 4"]; // Textyada isku badalaya

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000); // 3 ilbiriqsi kasta text cusub ayaa soo baxaya
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[300px] flex justify-center items-center">
      {/* Textyada dhinacyada oo fixed ah */}
      <div className="fixed left-4 top-0 text-white text-2xl font-bold">
        Fixed Left
      </div>
      <div className="fixed right-4 top-0 text-white text-2xl font-bold">
        Fixed Right
      </div>

      {/* Textiga dhexe oo is badalaya */}
      <motion.h1
        key={currentText}
        className="transition-all duration-1000 text-white font-bold text-[50px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
      >
        {texts[currentText]}
      </motion.h1>
    </div>
  );
}
