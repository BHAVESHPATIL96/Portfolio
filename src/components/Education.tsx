// import React from "react";
// import { motion } from "framer-motion";
// import { Calendar, ExternalLink } from "lucide-react";

// const Education = () => {
//   const education = [
//     {
//       degree: "Higher Secondary Certificate (HSC)",
//       school: "ASC College, Chopda",
//       link: "https://mgsmasc.ac.in/",
//       year: "2018 – 2020",
//     },
//     {
//       degree: "Bachelor of Engineering",
//       school: "Sandip Institute of Engineering and Management, Nashik",
//       link: "https://www.sandipuniversity.edu.in/",
//       year: "2020 – 2024",
//     },
//     {
//       degree: "PG Diploma in Data Science & Analytics",
//       school: "Imarticus Learning, Pune",
//       link: "https://imarticus.org/",
//       year: "2024 – 2025",
//     },
//   ];

//   const internship = [
//     {
//       company: "NeuroNexus Innovations",
//       link: "https://nninnovations.in/",
//       location: "Hybrid",
//       duration: "Apr 2025 - May 2025",
//       description:
//         "Analyzed 280,000+ transactions to detect fraud using Pandas, SQL, and visualizations. Engineered features, handled data imbalance with SMOTE, and built ML models (Logistic Regression, Random Forest, XGBoost) achieving 88% recall.",
//     },
//     {
//       company: "Cognifyz Technologies",
//       link: "https://cognifyz.com/",
//       location: "Nagpur, India",
//       duration: "Jan 2025 - Feb 2025",
//       description:
//         "Performed data preprocessing and analysis using Excel and SQL, engineered features for predictive models, and developed Tableau/Power BI dashboards to deliver data-driven insights and track performance.",
//     },
//   ];

//   const skills = [
//     "Python",
//     "Data Science",
//     "Machine Learning",
//     "Power BI",
//     "SQL",
//     "Pandas",
//     "NumPy",
//     "Scikit-learn",
//     "NLP",
//     "Neural Networks",
//     "Excel",
//     "Deep Learning",
//     "Gen AI",
//     "Tensorflow",
//     "Data Visualization",
//     "Statistics",
//     "Attention to Detail",
//     "Problem Solving",
//     "Leadership & Teamwork",
//     "Collaboration",
//     "Time Management",
//     "Critical Thinking",
//   ];

//   return (
//     <section
//       id="education"
//       className="py-20 bg-gradient-to-b from-background to-background/80"
//     >
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="grid md:grid-cols-2 gap-10">
//           {/* Education */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl font-bold mb-6 text-white">Education</h2>
//             <div className="space-y-6">
//               {education.map((edu, idx) => (
//                 <div
//                   key={idx}
//                   className="p-5 bg-background/60 rounded-xl border border-gray-800 shadow hover:shadow-lg transition"
//                 >
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="text-xl font-semibold text-white">
//                         {edu.degree}
//                       </h3>
//                       <a
//                         href={edu.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-400 hover:underline flex items-center gap-1 mt-1"
//                       >
//                         {edu.school} <ExternalLink size={14} />
//                       </a>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-400 ml-4 whitespace-nowrap">
//                       <Calendar size={16} className="mr-1" /> {edu.year}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Internship */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl font-bold mb-6 text-white">Internship</h2>
//             <div className="space-y-6">
//               {internship.map((intern, idx) => (
//                 <div
//                   key={idx}
//                   className="p-5 bg-background/60 rounded-xl border border-gray-800 shadow hover:shadow-lg transition"
//                 >
//                   <div className="flex justify-between items-start">
//                     <a
//                       href={intern.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-xl font-semibold text-blue-400 hover:underline flex items-center gap-1"
//                     >
//                       {intern.company} <ExternalLink size={16} />
//                     </a>
//                     <div className="flex items-center text-sm text-gray-400">
//                       <Calendar size={16} className="mr-1" /> {intern.duration}
//                     </div>
//                   </div>
//                   <p className="text-sm text-gray-400 mt-1">
//                     {intern.location}
//                   </p>
//                   <p className="mt-3 text-sm text-gray-400">
//                     {intern.description}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Skills */}
//             <h2 className="text-3xl font-bold mt-10 mb-6 text-white">
//               Technical Skills
//             </h2>
//             <div className="flex flex-wrap gap-3">
//               {skills.map((skill, idx) => (
//                 <span
//                   key={idx}
//                   className="px-4 py-1.5 text-sm rounded-full bg-background border border-gray-800 shadow text-blue-400 hover:bg-blue-500 hover:text-white transition"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;

import React from "react";
import { motion } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "ASC College, Chopda",
      link: "https://mgsmasc.ac.in/",
      year: "2018 – 2020",
    },
    {
      degree: "Bachelor of Engineering",
      school: "Sandip Institute of Engineering and Management, Nashik",
      link: "https://www.sandipuniversity.edu.in/",
      year: "2020 – 2024",
    },
    {
      degree: "PG Diploma in Data Science & Analytics",
      school: "Imarticus Learning, Pune",
      link: "https://imarticus.org/",
      year: "2024 – 2025",
    },
  ];

  const internship = [
    {
      company: "NeuroNexus Innovations",
      link: "https://nninnovations.in/",
      location: "Hybrid",
      duration: "Apr 2025 - May 2025",
      description:
        "Analyzed 280,000+ transactions to detect fraud using Pandas, SQL, and visualizations. Engineered features, handled data imbalance with SMOTE, and built ML models (Logistic Regression, Random Forest, XGBoost) achieving 88% recall.",
    },
    {
      company: "Cognifyz Technologies",
      link: "https://cognifyz.com/",
      location: "Nagpur, India",
      duration: "Jan 2025 - Feb 2025",
      description:
        "Performed data preprocessing and analysis using Excel and SQL, engineered features for predictive models, and developed Tableau/Power BI dashboards to deliver data-driven insights and track performance.",
    },
  ];

  const skills = [
    "Python",
    "Data Science",
    "Machine Learning",
    "Power BI",
    "SQL",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "NLP",
    "Neural Networks",
    "Excel",
    "Deep Learning",
    "Gen AI",
    "Tensorflow",
    "Data Visualization",
    "Statistics",
    "Attention to Detail",
    "Problem Solving",
    "Leadership & Teamwork",
    "Collaboration",
    "Time Management",
    "Critical Thinking",
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-background to-background/80"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Education + Internship side by side */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Education</h2>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-background/60 rounded-xl border border-gray-800 shadow hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline flex items-center gap-1 mt-1"
                      >
                        {edu.school} <ExternalLink size={14} />
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-400 ml-4 whitespace-nowrap">
                      <Calendar size={16} className="mr-1" /> {edu.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Internship */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Internship</h2>
            <div className="space-y-6">
              {internship.map((intern, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-background/60 rounded-xl border border-gray-800 shadow hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-start">
                    <a
                      href={intern.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-semibold text-blue-400 hover:underline flex items-center gap-1"
                    >
                      {intern.company} <ExternalLink size={16} />
                    </a>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar size={16} className="mr-1" /> {intern.duration}
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    {intern.location}
                  </p>
                  <p className="mt-3 text-sm text-gray-400">
                    {intern.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technical Skills full width below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            Technical Skills
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-1.5 text-sm rounded-full bg-background border border-gray-800 shadow text-blue-400 hover:bg-blue-500 hover:text-white transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
