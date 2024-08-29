import React from 'react'
import { motion } from "framer-motion"

const SkillCard = ({title, skills}) => {
  return (
    <motion.div className='flex flex-col justify-between items-center max-h-[85%] min-w-[100%] rounded-xl p-4'>
        <div className='text-center w-[50%] h-[15%] py-3 font-bold shadow-xl shadow-gray-500 text-white bg-[#001b5e] rounded-full z-10'>
            <p>{title}</p>
        </div>
        <div className='flex items-center justify-around w-[90%] h-[90%]'>
            <ul>
            {skills.map((item) =>(
                <li className='flex items-center justify-center p-2' key={item}>{item}</li>
                ))}
            </ul>
        </div>    
    </motion.div>
  )
}

export default SkillCard