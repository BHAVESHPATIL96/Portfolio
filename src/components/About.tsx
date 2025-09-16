import React from "react";
import { motion } from "framer-motion";
import photo from "../assets/photo.jpeg"; // Correct relative path

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-gradient-to-b from-gray-900 to-gray-800"
      id="about"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          About Me
        </h2>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl p-8 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div className="order-2 md:order-1">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Hi, I'm Bhavesh Patil, a Data Science & Analytics Professional
                skilled in Python, SQL, and deep learning frameworks like
                TensorFlow and Keras. I have hands-on experience in data
                preprocessing, feature engineering, and building ML models for
                classification, regression, and NLP tasks. Proficient in Power
                BI, Tableau, and Excel, I specialize in turning complex data
                into clear, actionable insights that drive business performance.
              </p>
              <div className="space-y-2 text-gray-400">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-400">
                      Personal Information
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <span className="font-medium text-gray-300">Name:</span>{" "}
                        Bhavesh Patil
                      </li>
                      <li>
                        <span className="font-medium text-gray-300">
                          Father's Name:
                        </span>{" "}
                        Ravindra Patil
                      </li>
                      {/* <li>
                        <span className="font-medium text-gray-300">
                          Current Location:
                        </span>{" "}
                        Pune - 411033
                      </li> */}
                    </ul>
                  </div>
                  {/* Contact Information */}
                  <div>
                    <ul className="space-y-2 mt-8 md:mt-12">
                      {/* <li>
                        <span className="font-medium text-gray-300">
                          Permanent Location:
                        </span>{" "}
                        Pune - 411033
                      </li> */}
                      <li>
                        <span className="font-medium text-gray-300">
                          Email:
                        </span>{" "}
                        bhaveshrp28@gmail.com
                      </li>
                      <li>
                        <span className="font-medium text-gray-300">
                          Location:
                        </span>{" "}
                        Pune, Maharashtra
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Image Section */}
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="w-48 h-90 md:w-64 md:h-90 mx-auto overflow-hidden rounded-3xl border-4 border-blue-500/30 shadow-lg shadow-blue-500/20">
                  <img
                    src={photo}
                    alt="Bhavesh R. Patil"
                    className="w-full h-full object-cover transform transition-transform hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-500/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
