import React, { useRef, useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import SkillCard from './SkillCard';
import { motion } from "framer-motion"

const Skills = () => {
  const domains = [
    {
      title: 'Languages',
      skills: ['Python', 'Java', 'SQL', 'Javascript'],
    },
    {
      title: 'Techical Skills',
      skills: ['Machine Learning and Deep Learning','Data Wrangling', 'Data Visualization', 'Feature Engineering','Exploratory Data Analysis', 'Computer Vision'],
    },
    {
      title: 'Frameworks',
      skills: ['TensorFlow', 'Keras', 'PyTorch', 'Flask', 'Streamlit'],
    },
    {
      title: 'Libraries',
      skills: ['Pandas', 'Numpy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'OpenCV', 'NLTK', 'BeautifulSoup'],
    },
    {
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'React', 'TailWind CSS'],
    },
  ]; // Add your domain names and associated items here

  const [currIndex, setCurrentIndex] = useState(0)
  const prevIndex = () => {
    const isFirstIndex = currIndex === 0
    const newIndex = isFirstIndex ? domains.length - 1 : currIndex - 1
    setCurrentIndex(newIndex)
  }
  const nextIndex = () => {
    const isLastIndex = currIndex === domains.length - 1
    const newIndex = isLastIndex ? 0 : currIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <motion.div className='w-full h-auto relative group overflow-hidden'>
        <h1 className='text-center text-2xl py-3 font-bold text-[#001b5e]'>Skills</h1>
        <motion.div drag="x" dragConstraints={{left:0, right: 0}} animate={{translateX: `-${currIndex * 100}%`}} className='flex w-full h-full'>
          {domains.map((domain, index) =>(
            <SkillCard key={index}
                      title={domain.title}
                      skills={domain.skills}/>
          ))}
        </motion.div>
        <div className='hidden group-hover:block absolute top-[50%] items-center justify-center left-2 p-1 rounded-full bg-gray-200 cursor-pointer'>
                <FiChevronLeft size={20} onClick={prevIndex}/>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] items-center justify-center right-2 p-1 rounded-full bg-gray-200 cursor-pointer'>
                <FiChevronRight size={20} onClick={nextIndex}/>
        </div>
    </motion.div>
  )
}

export default Skills