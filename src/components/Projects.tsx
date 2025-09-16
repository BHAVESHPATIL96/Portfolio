// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Projects = () => {
//   const [activeFilter, setActiveFilter] = useState("All");

//   const filters = ["All", "ML", "CNN", "RNN", "NLP"];

//   const projects = [
//     {
//       title: "Deep Fake Voice Detection System",
//       description:
//         "Built a Deepfake Audio Detection System using MFCC features and ML models like Random Forest and Logistic Regression, achieving up to 96% accuracy. Evaluated performance with precision, recall, and ROC curves to enhance voice-based system security.",
//       tech: ["Python", "Machine Learning", "Data Pre-Processing"],
//       category: "ML",
//       impact: "96% Accuracy",
//       value: "Enhanced voice security",
//       color: "bg-blue-900/60",
//     },
//     {
//       title: "Smart Loan Recovery System",
//       description:
//         "Developed a Streamlit web app to predict loan recovery risk with 95% accuracy using ML models. Automated risk scoring and strategy recommendations, reducing manual analysis time by over 70%. Enabled CSV upload, real-time predictions, and downloadable reports for enhanced usability.",
//       tech: ["Python", "Machine Learning", "Data Analysis", "Streamlit"],
//       category: "ML",
//       impact: "95% Accuracy",
//       value: "70% less manual analysis",
//       color:
//         "rounded-lg border bg-card text-card-foreground shadow-sm h-full card-glow group bg-gradient-to-br from-teal-500/20 to-teal-600/20 backdrop-blur-sm border-border/50",
//     },
//     {
//       title: "Content-based Movie Recommender System",
//       description:
//         "Built a personalized movie recommender system using content-based filtering and cosine similarity to suggest relevant movies based on content features.",
//       tech: ["Python", "Machine Learning", "NLP", "Deep Learning"],
//       category: "NLP",
//       impact: "Personalized recs",
//       value: "Better user experience",
//       color:
//         "rounded-lg border bg-card text-card-foreground shadow-sm h-full card-glow group bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm border-border/50",
//     },
//     {
//       title: "Grievance Classification System",
//       description:
//         "Classified 42+ lakh consumer complaints into financial product categories using NLP and ML, achieving 94% accuracy with CountVectorizer-based models.",
//       tech: ["Python", "Machine Learning"],
//       category: "NLP",
//       impact: "94% Accuracy",
//       value: "Automated complaint classification",
//       color:
//         "rounded-lg border bg-card text-card-foreground shadow-sm h-full card-glow group bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm border-border/50",
//     },
//     {
//       title: "Image Classification Using CNN",
//       description:
//         "Developed a CNN-based image classification model to automatically identify and categorize images. Optimized training for high accuracy, improving speed and reliability of visual recognition tasks.",
//       tech: ["Python", "Machine Learning", "Deep Learning", "CNN"],
//       category: "ML",
//       impact: "High accuracy",
//       value: "Improved recognition speed",
//       color:
//         "rounded-lg border bg-card text-card-foreground shadow-sm h-full card-glow group bg-gradient-to-br from-teal-500/20 to-teal-600/20 backdrop-blur-sm border-border/50",
//     },
//     {
//       title: "Zomato Food Review using RNN",
//       description:
//         "Built an RNN-based sentiment analysis model to classify Zomato food reviews as positive or negative. Enhanced text understanding to improve customer feedback insights and decision-making.",
//       tech: ["Python", "Machine Learning", "Deep Learning", "RNN"],
//       category: "NLP",
//       impact: "Sentiment insights",
//       value: "Improved decision making",
//       color: "bg-blue-900/60",
//     },
//   ];

//   const filteredProjects =
//     activeFilter === "All"
//       ? projects
//       : projects.filter((p) => p.category === activeFilter);

//   return (
//     <section
//       className="py-16 bg-gradient-to-b from-gray-900 to-gray-800"
//       id="projects"
//     >
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-2 text-white">
//           My Projects
//         </h2>
//         <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
//           Here are some of the projects I've worked on, showcasing my skills in
//           data science, machine learning, and web development.
//         </p>

//         {/* Filter Buttons */}
//         <div className="flex justify-center gap-4 mb-12 flex-wrap">
//           {filters.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setActiveFilter(filter)}
//               className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
//                 activeFilter === filter
//                   ? "bg-blue-600 text-white border-blue-600"
//                   : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700"
//               }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {filteredProjects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className={`${project.color} rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500/30`}
//             >
//               <div className="flex items-center gap-2 mb-2">
//                 <span className="text-xs bg-gray-700/30 px-2 py-1 rounded text-gray-300">
//                   {project.category}
//                 </span>
//               </div>

//               <h3 className="text-xl font-semibold mb-3 text-white">
//                 {project.title}
//               </h3>
//               <p className="text-gray-200 mb-4">{project.description}</p>

//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.tech.map((tech, techIndex) => (
//                   <span
//                     key={techIndex}
//                     className="bg-gray-800/60 text-gray-200 text-sm px-3 py-1 rounded-full border border-gray-700"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex justify-between text-sm text-gray-300">
//                 <span>
//                   <strong className="text-white">Impact: </strong>
//                   {project.impact}
//                 </span>
//                 <span>
//                   <strong className="text-white">Value: </strong>
//                   {project.value}
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "ML", "NLP", "BI"];

  const projects = [
    {
      title: "Deep Fake Voice Detection System",
      description:
        "Built a Deepfake Audio Detection System using MFCC features and ML models like Random Forest and Logistic Regression, achieving up to 96% accuracy. Evaluated performance with precision, recall, and ROC curves to enhance voice-based system security.",
      tech: ["Python", "Machine Learning", "Data Pre-Processing"],
      category: "ML",
      impact: "96% Accuracy",
      value: "Enhanced voice security",
      color: "from-blue-800/30 to-blue-900/30",
    },
    {
      title: "Smart Loan Recovery System",
      description:
        "Developed a Streamlit web app to predict loan recovery risk with 95% accuracy using ML models. Automated risk scoring and strategy recommendations, reducing manual analysis time by over 70%. Enabled CSV upload, real-time predictions, and downloadable reports for enhanced usability.",
      tech: ["Python", "Machine Learning", "Data Analysis", "Streamlit"],
      category: "ML",
      impact: "95% Accuracy",
      value: "70% less manual analysis",
      color: "from-teal-500/20 to-teal-600/20",
    },
    {
      title: "Content-based Movie Recommender System",
      description:
        "Built a personalized movie recommender system using content-based filtering and cosine similarity to suggest relevant movies based on content features.",
      tech: ["Python", "Machine Learning", "NLP", "Deep Learning"],
      category: "NLP",
      impact: "Personalized recs",
      value: "Better user experience",
      color: "from-orange-500/20 to-orange-600/20",
    },
    {
      title: "Grievance Classification System",
      description:
        "Classified 42+ lakh consumer complaints into financial product categories using NLP and ML, achieving 94% accuracy with CountVectorizer-based models.",
      tech: ["Python", "Machine Learning"],
      category: "NLP",
      impact: "94% Accuracy",
      value: "Automated complaint classification",
      color: "from-purple-500/20 to-purple-600/20",
    },
    {
      title: "Image Classification Using CNN",
      description:
        "Developed a CNN-based image classification model to automatically identify and categorize images. Optimized training for high accuracy, improving speed and reliability of visual recognition tasks.",
      tech: ["Python", "Machine Learning", "Deep Learning", "CNN"],
      category: "ML",
      impact: "High accuracy",
      value: "Improved recognition speed",
      color: "from-teal-500/20 to-teal-600/20",
    },
    {
      title: "Zomato Food Review using RNN",
      description:
        "Built an RNN-based sentiment analysis model to classify Zomato food reviews as positive or negative. Enhanced text understanding to improve customer feedback insights and decision-making.",
      tech: ["Python", "Machine Learning", "Deep Learning", "RNN"],
      category: "NLP",
      impact: "Sentiment insights",
      value: "Improved decision making",
      color: "from-blue-800/30 to-blue-900/30",
    },
    {
      title: "Supply Chain Risk Analysis",
      description:
        "Developed a Power BI-based analytics solution to track supplier performance, lead time, cost, and delivery reliability. Identified high-risk suppliers, improving on-time delivery prediction by 25% and enabling proactive sourcing decisions.",
      tech: ["Power BI", "Data Analytics", "Supply Chain", "Simulation"],
      category: "BI",
      impact: "Risk Mitigation",
      value: "Proactive Decision-Making",
      color: "from-purple-500/20 to-purple-600/20",
    },
    {
      title: "T20 World Cup 2024 Data Analysis",
      description:
        "Developed interactive Power BI dashboards analyzing player stats, team performance, and match outcomes to deliver actionable insights. Enabled dynamic, role-based visuals to aid selection, match planning, and strategic decisions for IPL team owners.",
      tech: [
        "Power BI",
        "Data Analytics",
        "Cricket Data",
        "Interactive Dashboards",
      ],
      category: "BI",
      impact: "Strategic Insights",
      value: "Competitive Advantage",
      color: "from-orange-500/20 to-orange-600/20",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      className="py-16 bg-gradient-to-b from-gray-900 to-gray-800"
      id="projects"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-white">
          My Projects
        </h2>
        <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in
          data science, machine learning, and web development.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeFilter === filter
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-gray-700 hover:border-blue-500/30 bg-gradient-to-br ${project.color} backdrop-blur-sm`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-gray-700/30 px-2 py-1 rounded text-gray-300">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white">
                {project.title}
              </h3>
              <p className="text-gray-200 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-800/60 text-gray-200 text-sm px-3 py-1 rounded-full border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between text-sm text-gray-300">
                <span>
                  <strong className="text-white">Impact: </strong>
                  {project.impact}
                </span>
                <span>
                  <strong className="text-white">Value: </strong>
                  {project.value}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
