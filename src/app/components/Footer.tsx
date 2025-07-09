"use client"
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiSourceengine } from "react-icons/si";

const Footer: React.FC = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={footerVariants}
      className="bg-gradient-to-br from-white via-gray-200 to-blue-200 text-gray-600 py-12 px-4 bottom-0 left-0 right-0 "
    >
      <div className="container mx-auto ">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-4"> <span className="text-2xl md:text-4xl px-4"><SiSourceengine/></span>SUPREME GROUP</h2>
          </motion.div>

          {/* Applications Section */}
          <motion.div variants={itemVariants} className="gap-8">
            <h3 className="text-lg font-semibold mb-4 uppercase text-black">Applications</h3>
            <ul className="space-y-4">
              {["Apparel", "Automotive", "Filtration", "Customised Nonwoven"].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href="#" className="hover:text-gray-500 transition-colors text-sm">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 uppercase text-black">Company</h3>
            <ul className="space-y-4">
              {["Who We Are", "Global Competency", "Innovation", "ESG Impact"].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href="#" className="hover:text-gray-400 transition-colors text-sm">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* More Section */}
          <motion.div variants={itemVariants}>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 uppercase text-black">More</h3>
              <ul className="space-y-4">
                {["Contact Us", "Careers"].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link href="#" className="hover:text-gray-400 transition-colors text-sm">
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 uppercase text-black">Follow Us</h3>
              <motion.div 
                className="flex space-x-4"
                variants={itemVariants}
              >
                <motion.a
                  href="#"
                  aria-label="LinkedIn"
                  whileHover={{ y: -3 }}
                  className="hover:text-gray-400 transition-colors text-sm"
                >
                  LinkedIn
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-700 my-6"
        />

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0 text-gray-700 text-sm">
            ©2024. All Rights Reserved.
          </div>
          <div className="text-gray-700 text-center text-sm md:text-right">
            Supreme House, 110, 161th Road, Chenibur, Mumbai - 400071.
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;