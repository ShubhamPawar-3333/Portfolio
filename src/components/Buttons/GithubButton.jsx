import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';

const GithubButton = () => {
  return (
    <motion.button
      type="button"
      className="text-white bg-gradient-to-r from-[#24292F] via-[#3D3D3D] to-[#6a6a6a] focus:outline-none focus:ring-0 shadow-lg shadow-[#24292F]/50 dark:shadow-lg dark:shadow-[#6a6a6a]/80 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
      whileHover={{ rotate: 3 }}
      whileTap={{ scale: 0.9, rotate: 0 }} // Reset rotation on click
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, rotate: [0, 5, -5, 0] }}
      transition={{ duration: 0.6 }}
    >
      <FaGithub className="mr-2" />
      Github
    </motion.button>
  );
};

export default GithubButton;
