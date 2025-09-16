import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Brain, BarChart, LineChart, Network } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 90, icon: Code2, color: "from-blue-500 to-blue-600", description: "Expert in data manipulation, analysis, and ML implementations" },
    { name: "Data Science", level: 85, icon: Brain, color: "from-purple-500 to-purple-600", description: "Statistical analysis, predictive modeling, and data visualization" },
    { name: "Database Management", level: 88, icon: Database, color: "from-green-500 to-green-600", description: "SQL, NoSQL, data warehousing, and ETL processes" },
    { name: "Data Analytics", level: 92, icon: BarChart, color: "from-orange-500 to-orange-600", description: "Business intelligence, reporting, and insights generation" },
    { name: "Machine Learning", level: 82, icon: Network, color: "from-red-500 to-red-600", description: "Model development, training, and deployment" }
  ];

  const softSkills = [
    { name: "Problem Solving", score: 95 },
    { name: "Communication", score: 90 },
    { name: "Leadership", score: 85 },
    { name: "Team Collaboration", score: 92 },
    { name: "Critical Thinking", score: 88 },
    { name: "Decision Making", score: 87 }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-900 to-gray-800" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technical Expertise</h2>
          <p className="text-gray-300 text-lg">Comprehensive skill set in data science and analytics</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Technical Proficiency</h3>
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-4 sm:p-6 hover:bg-gray-700 transition-all duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${skill.color}`}>
                    <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white">{skill.name}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">{skill.description}</p>
                  </div>
                </div>
                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-right">
                      <span className="text-sm font-semibold inline-block text-white">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="relative h-2 bg-gray-600 rounded-full overflow-hidden"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Professional Skills</h3>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#444"
                          strokeWidth="3"
                          strokeDasharray="100, 100"
                        />
                        <motion.path
                          initial={{ strokeDasharray: "0, 100" }}
                          whileInView={{ strokeDasharray: `${skill.score}, 100` }}
                          transition={{ duration: 2, delay: index * 0.2 }}
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-xl sm:text-2xl font-bold text-white">{skill.score}%</span>
                        <span className="text-[10px] sm:text-xs text-gray-400 mt-1 text-center px-1">{skill.name}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 sm:mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-4 sm:p-6 text-white"
            >
              <h4 className="text-base sm:text-lg font-semibold mb-2">Continuous Learning</h4>
              <p className="text-xs sm:text-sm opacity-90">
                Actively pursuing advanced certifications and staying updated with the latest trends in data science and machine learning technologies.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;