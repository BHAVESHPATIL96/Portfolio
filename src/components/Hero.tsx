import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import heroImage from "../assets/HeroImage.jpg";

const Hero = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${heroImage})`, // ✅ correct syntax
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-gray-900/90"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center space-y-6 px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
          Bhavesh Patil
        </h1>
        <div className="text-2xl md:text-3xl font-light">
          <TypeAnimation
            sequence={[
              "Data Scientist",
              2000,
              "Data Analyst",
              2000,
              "Machine Learning Engineer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-blue-300"
          />
        </div>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          Turn raw data into stories, insights, and smart solutions using
          advanced analytics and innovative approaches.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
