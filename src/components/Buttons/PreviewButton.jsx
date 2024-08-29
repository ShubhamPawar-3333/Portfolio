import React from 'react'
import { motion } from 'framer-motion';

const PreviewButton = ({desc}) => {
  return (
    <motion.button
            type="button"
            className="text-white bg-gradient-to-r from-[#001b5e] via-[#002f6c] to-[#004080] focus:outline-none focus:ring-0 shadow-lg shadow-[#001b5e]/50 dark:shadow-lg dark:shadow-[#004080]/80 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
            whileHover={{ rotate: 3 }}
            whileTap={{ scale: 0.9, rotate: 0 }} // Reset rotation on click
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, rotate: [0, 5, -5, 0] }}
            transition={{ duration: 0.6 }}
        >
            {desc}
        </motion.button>
  )
}

export default PreviewButton