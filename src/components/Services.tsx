// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Database,
//   BarChart2,
//   Eye,
//   FileText,
//   MessageSquare,
//   Search,
// } from "lucide-react";

// const Services = () => {
//   const services = [
//     {
//       icon: Database,
//       title: "Data Preprocessing",
//       description: "Cleaning and preparing data using Python (Pandas, NumPy)",
//       color: "#60A5FA",
//     },
//     {
//       icon: BarChart2,
//       title: "ML Model Building",
//       description:
//         "Building models like regression/classification (using Scikit-learn)",
//       color: "#34D399",
//     },
//     {
//       icon: Eye,
//       title: "Data Visualization",
//       description:
//         "Creating graphs and dashboards using Power BI and Matplotlib",
//       color: "#A78BFA",
//     },
//     {
//       icon: FileText,
//       title: "BI Reporting",
//       description: "Creating reports using Excel and SQL",
//       color: "#FB923C",
//     },
//     {
//       icon: MessageSquare,
//       title: "NLP Chatbot",
//       description:
//         "Building chatbots using Machine Learning and Natural Language Processing",
//       color: "#F472B6",
//     },
//     {
//       icon: Search,
//       title: "Data Insights & Research",
//       description:
//         "Extracting valuable insights from complex data for decision making",
//       color: "#38BDF8",
//     },
//   ];

//   return (
//     <section
//       id="services"
//       className="py-16 bg-gradient-to-b from-[#071023] to-[#0b1220]"
//     >
//       <div className="max-w-6xl mx-auto px-4">
//         <p className="text-center text-gray-300 mb-8">
//           I specialize in transforming raw data into actionable insights using
//           cutting-edge technologies and methodologies.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((s, i) => {
//             const Icon = s.icon;

//             return (
//               <motion.div
//                 key={s.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 whileHover={{
//                   scale: 1.06,
//                   y: -10,
//                   boxShadow:
//                     "0 25px 60px rgba(2,6,23,0.8), 0 0 40px rgba(59,130,246,0.25)",
//                 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 140,
//                   damping: 18,
//                   delay: i * 0.06,
//                 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 className="bg-[#0d1114] border border-gray-800 rounded-2xl p-8 text-center transform-gpu cursor-pointer min-h-[190px]"
//                 style={{ boxShadow: "0 8px 24px rgba(2,6,23,0.65)" }}
//               >
//                 <div
//                   className="mx-auto w-20 h-20 rounded-full flex items-center justify-center"
//                   style={{
//                     background: "rgba(255,255,255,0.02)",
//                     boxShadow: "inset 0 2px 6px rgba(255,255,255,0.01)",
//                   }}
//                 >
//                   <Icon size={28} style={{ color: s.color }} />
//                 </div>

//                 <h3 className="mt-6 text-white font-semibold text-lg">
//                   {s.title}
//                 </h3>
//                 <p className="mt-4 text-gray-400 text-sm leading-relaxed">
//                   {s.description}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  BarChart2,
  Eye,
  FileText,
  MessageSquare,
  Search,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Data Preprocessing",
      description: "Cleaning and preparing data using Python (Pandas, NumPy)",
      color: "#60A5FA",
    },
    {
      icon: BarChart2,
      title: "ML Model Building",
      description:
        "Building models like regression/classification (using Scikit-learn)",
      color: "#34D399",
    },
    {
      icon: Eye,
      title: "Data Visualization",
      description:
        "Creating graphs and dashboards using Power BI and Matplotlib",
      color: "#A78BFA",
    },
    {
      icon: FileText,
      title: "BI Reporting",
      description: "Creating reports using Excel and SQL",
      color: "#FB923C",
    },
    {
      icon: MessageSquare,
      title: "NLP Techniques",
      description:
        "Building Models using Machine Learning and Natural Language Processing",
      color: "#F472B6",
    },
    {
      icon: Search,
      title: "Data Insights & Research",
      description:
        "Extracting valuable insights from complex data for decision making",
      color: "#38BDF8",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 bg-gradient-to-b from-[#071023] to-[#0b1220]"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* --- Added heading --- */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          What I Can Do
        </h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>

        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          I specialize in transforming raw data into actionable insights using
          cutting-edge technologies and methodologies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.06,
                  y: -10,
                  boxShadow:
                    "0 25px 60px rgba(2,6,23,0.8), 0 0 40px rgba(59,130,246,0.25)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 140,
                  damping: 18,
                  delay: i * 0.06,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-[#0d1114] border border-gray-800 rounded-2xl p-8 text-center transform-gpu cursor-pointer min-h-[190px]"
                style={{ boxShadow: "0 8px 24px rgba(2,6,23,0.65)" }}
              >
                <div
                  className="mx-auto w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    boxShadow: "inset 0 2px 6px rgba(255,255,255,0.01)",
                  }}
                >
                  <Icon size={28} style={{ color: s.color }} />
                </div>

                <h3 className="mt-6 text-white font-semibold text-lg">
                  {s.title}
                </h3>
                <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
