import React from "react"
import { motion } from 'framer-motion'

const fileId = '1QCVLrJqvhzxIz0KKOkXHdDwc3-yLgUdU';
const fileUrl = `https://drive.google.com/uc?id=${fileId}&export=download`;

const DownloadButton = () => {

    const handleClick = () => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'Resume-Shubham_Pawar(DevOps Engineer).pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <motion.button
            onClick={handleClick}
            type="button"
            className="text-white bg-gradient-to-r from-[#001b5e] via-[#002f6c] to-[#004080] focus:outline-none focus:ring-0 shadow-lg shadow-[#001b5e]/50 dark:shadow-lg dark:shadow-[#004080]/80 font-medium rounded-full text-semibold px-5 py-2.5 text-center me-2 mb-2"
            whileHover={{ scale: 1.15, rotate: 3 }}
            whileTap={{ scale: 0.9, rotate: 0 }} // Reset rotation on click
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, rotate: [0, 5, -5, 0] }}
            transition={{ duration: 0.6 }}
        >
            Resume
        </motion.button>
    )
}

export default DownloadButton