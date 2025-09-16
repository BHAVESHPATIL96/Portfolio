// import React from "react";
// import { motion } from "framer-motion";
// import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";

// const Contact = () => {
//   const contactInfo = [
//     {
//       icon: <MapPin className="w-8 h-8 text-pink-500" />,
//       title: "Location",
//       info: "Pune, Maharashtra, India",
//       link: null,
//     },
//     {
//       icon: <Mail className="w-8 h-8 text-blue-500" />,
//       title: "Email",
//       info: "bhaveshrp28@gmail.com",
//       link: "mailto:bhaveshrp28@gmail.com",
//     },
//     {
//       icon: <Phone className="w-8 h-8 text-green-500" />,
//       title: "Phone",
//       info: "+91 7057662193",
//       link: "tel:+917057662193",
//     },
//     {
//       icon: <MessageCircle className="w-8 h-8 text-green-500" />,
//       title: "WhatsApp",
//       info: "Click to Chat",
//       link: "https://wa.me/917057662193",
//     },
//   ];

//   return (
//     <div className="bg-gray-900" id="contact">
//       <div className="py-16 max-w-6xl mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
//         <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
//         <p className="text-gray-300 max-w-2xl mx-auto mb-12">
//           Ready to collaborate on your next data science project? I’d love to
//           hear from you and discuss how we can work together.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {contactInfo.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               whileHover={{
//                 scale: 1.06,
//                 y: -10,
//                 boxShadow:
//                   "0 25px 60px rgba(2,6,23,0.8), 0 0 40px rgba(59,130,246,0.25)",
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 140,
//                 damping: 18,
//                 delay: index * 0.06,
//               }}
//               viewport={{ once: true, amount: 0.2 }}
//               className="bg-gray-800 border border-gray-700 rounded-lg p-6 transform-gpu cursor-pointer"
//               style={{ boxShadow: "0 8px 24px rgba(2,6,23,0.65)" }}
//             >
//               <div className="flex justify-center mb-4">{item.icon}</div>
//               <h3 className="text-white text-lg font-semibold mb-2">
//                 {item.title}
//               </h3>
//               {item.link ? (
//                 <a
//                   href={item.link}
//                   className="text-gray-300 hover:text-blue-400 transition-colors break-words"
//                 >
//                   {item.info}
//                 </a>
//               ) : (
//                 <p className="text-gray-300">{item.info}</p>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* --- Let's Build Something Amazing Together section --- */}

//       <div className="bg-gradient-to-r from-primary/10 to-accent/10 px-4 pb-16 max-w-6xl mx-auto">
//         {/* <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20"> */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="
//       rounded-2xl
//       p-8 sm:p-10
//       text-center
//       bg-gradient-to-r from-primary/10 to-accent/10
//       border border-blue-900/30
//     "
//           style={{
//             boxShadow:
//               "0 12px 40px rgba(2,6,23,0.65), 0 0 40px rgba(59,130,246,0.15)",
//           }}
//         >
//           <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
//             Let&apos;s Build Something Amazing Together
//           </h3>
//           <p className="text-gray-300 max-w-2xl mx-auto mb-8">
//             Whether you need data analysis, machine learning solutions, or want
//             to discuss opportunities in data science, I'm here to help bring
//             your ideas to life.
//           </p>
//           <a
//             href="mailto:bhaveshrp28@gmail.com"
//             className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition-colors"
//           >
//             <Mail className="w-5 h-5 mr-2" /> Start a Conversation
//           </a>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import { motion } from "framer-motion";
import { LinkedinIcon, Mail, Phone } from "lucide-react";
// import { FaGithub } from "react-icons/fa";

const GitHubIcon = () => (
  <svg
    className="w-8 h-8 text-gray-800"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M12 .5C5.648.5.5 5.648.5 12c0 5.092 3.292 9.39 7.868 10.915.575.106.787-.25.787-.556 
    0-.274-.01-1.001-.015-1.964-3.202.696-3.878-1.543-3.878-1.543-.522-1.327-1.276-1.681-1.276-1.681-1.043-.713.08-.699.08-.699 
    1.153.081 1.76 1.185 1.76 1.185 1.025 1.755 2.688 1.248 3.343.954.104-.743.402-1.249.73-1.537-2.555-.29-5.238-1.278-5.238-5.686 
    0-1.256.452-2.283 1.191-3.088-.119-.29-.516-1.456.112-3.036 
    0 0 .97-.31 3.18 1.183A11.07 11.07 0 0 1 12 6.8c.982.005 
    1.97.132 2.893.387 2.207-1.493 3.176-1.183 3.176-1.183.63 
    1.58.233 2.746.114 3.036.742.805 1.19 1.832 1.19 3.088 
    0 4.42-2.688 5.392-5.25 5.676.414.357.78 1.06.78 2.137 
    0 1.544-.014 2.786-.014 3.167 0 .308.21.668.793.555C20.71 
    21.39 24 17.092 24 12c0-6.352-5.148-11.5-12-11.5Z"
    />
  </svg>
);

const Contact = () => {
  const contactInfo = [
    {
      icon: <LinkedinIcon className="w-8 h-8 text-blue-700" />, // LinkedIn icon
      title: "LinkedIn",
      info: "View Profile",
      link: "https://www.linkedin.com/in/bhavesh-patil96/", // Replace with your LinkedIn URL
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-500" />,
      title: "Email",
      info: "bhaveshrp28@gmail.com",
      link: "mailto:bhaveshrp28@gmail.com",
    },
    {
      icon: <Phone className="w-8 h-8 text-green-500" />,
      title: "Phone",
      info: "+91 7057662193",
      link: "tel:+917057662193",
    },
    {
      icon: <GitHubIcon />,
      // icon: <FaGithub className="w-8 h-8 text-gray-800" />, // GitHub icon
      title: "GitHub",
      info: "View Projects",
      link: "https://github.com/BHAVESHPATIL96", // Replace with your GitHub URL
    },
  ];

  return (
    <div className="bg-gray-900" id="contact">
      <div className="py-16 max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Ready to collaborate on your next data science project? I’d love to
          hear from you and discuss how we can work together.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
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
                delay: index * 0.06,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 transform-gpu cursor-pointer"
              style={{ boxShadow: "0 8px 24px rgba(2,6,23,0.65)" }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-white text-lg font-semibold mb-2">
                {item.title}
              </h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-gray-300 hover:text-blue-400 transition-colors break-words"
                >
                  {item.info}
                </a>
              ) : (
                <p className="text-gray-300">{item.info}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Let's Build Something Amazing Together section --- */}
      <div className="px-4 pb-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            rounded-2xl 
            p-8 sm:p-10 
            text-center 
            bg-gradient-to-r from-blue-800/20 via-indigo-800/20 to-purple-800/20
      border border-blue-900/20

          "
          style={{
            boxShadow:
              // "0 12px 40px rgba(2,6,23,0.65), 0 0 40px rgba(59,130,246,0.15)",
              "0 13px 43px rgba(2,6,23,0.65), 0 0 50px rgba(59,130,246,0.15)",
          }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Let&apos;s Build Something Amazing Together
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Whether you need data analysis, machine learning solutions, or want
            to discuss opportunities in data science, I'm here to help bring
            your ideas to life.
          </p>
          <a
            href="mailto:bhaveshrp28@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" /> Start a Conversation
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
