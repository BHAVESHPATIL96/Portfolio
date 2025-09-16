import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Bhavesh R. Patil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
