// import React from 'react'
// import Projectitem from './Projectitem'
// import projectImg1 from '../../assets/Emojify-data-set.jpg'
// import projectImg2 from '../../assets/housing-price-prediction.jpg'
// import projectImg3 from '../../assets/iris-flower-classification.jpg'
// import projectImg4 from '../../assets/stock-price-prediction-using-ML.jpg'

// const projectList = [
//     {
//         img: projectImg1,
//         title: "RenalNet",
//         description: "Designed and developed a scalable and end to end machine learning pipeline to detect the tumor in kidney based on Kidney CT scans."
//     },
//     {
//         img: projectImg1,
//         title: "RenalNet",
//         description: "Designed and developed a scalable and end to end machine learning pipeline to detect the tumor in kidney based on Kidney CT scans."
//     },
//     {
//         img: projectImg1,
//         title: "RenalNet",
//         description: "Designed and developed a scalable and end to end machine learning pipeline to detect the tumor in kidney based on Kidney CT scans."
//     },
//     {
//         img: projectImg1,
//         title: "RenalNet",
//         description: "Designed and developed a scalable and end to end machine learning pipeline to detect the tumor in kidney based on Kidney CT scans."
//     },
// ];

// const Projects = () => {
//     return (
//         <div id='projects' className='flex flex-col items-center justify-center min-h-screen max-w-[1040px] m-auto md:pl-20 p-4 py-5'>
//             <div className='space-y-5 text-center mx-auto leading-6 p-4'>
//                 <h1 className='text-4xl font-bold text-center text-[#001b5e] p-2'>Project Gallery</h1>
//                 <div className='w-14 mx-auto h-0.5 bg-red-500'></div>
//             </div>
//             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-6'>
//                 {projectList.map((project, index) =>(
//                     <Projectitem  key={index}
//                                 img={project.img}
//                                 title={project.title}
//                                 description={project.description}/>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Projects

//mark2
// import React, { useState } from 'react';
// import Projectitem from './Projectitem';
// import projectImg1 from '../../assets/Emojify-data-set.jpg';
// import projectImg2 from '../../assets/housing-price-prediction.jpg';
// import projectImg3 from '../../assets/iris-flower-classification.jpg';
// import projectImg4 from '../../assets/stock-price-prediction-using-ML.jpg';

// // Sample project list with categories
// const projectList = [
//   {
//     img: projectImg1,
//     title: 'RenalNet',
//     description:
//       'Designed and developed a scalable and end-to-end machine learning pipeline to detect tumors in the kidney based on Kidney CT scans.',
//     category: 'Machine Learning',
//   },
//   {
//     img: projectImg2,
//     title: 'Housing Price Prediction',
//     description:
//       'Implemented a machine learning model to predict housing prices based on various economic factors.',
//     category: 'Data Analysis',
//   },
//   {
//     img: projectImg3,
//     title: 'Iris Flower Classification',
//     description:
//       'Built a simple classification model to classify Iris flower species using Scikit-Learn.',
//     category: 'Machine Learning',
//   },
//   {
//     img: projectImg4,
//     title: 'Stock Price Prediction',
//     description:
//       'Developed a model to predict stock prices using machine learning algorithms.',
//     category: 'Data Analysis',
//   },
//   // Add more projects with categories like 'DevOps', 'Web Development', etc.
// ];

// const Projects = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   // Filter projects based on selected category
//   const filteredProjects = selectedCategory === 'All'
//     ? projectList
//     : projectList.filter((project) => project.category === selectedCategory);

//   return (
//     <div id="projects" className="flex flex-col items-center justify-center min-h-screen max-w-[1040px] mx-auto p-4 py-5">
//       <div className="space-y-5 text-center mx-auto leading-6 p-4">
//         <h1 className="text-4xl font-bold text-center text-[#001b5e] p-2">Project Gallery</h1>
//         <div className="w-14 mx-auto h-0.5 bg-red-500"></div>
//       </div>

//       {/* Category filter menu */}
//       <div className="flex justify-center space-x-4 my-4">
//         {['All', 'DevOps', 'Machine Learning', 'Data Analysis', 'Web Development'].map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`px-4 py-2 rounded-full text-sm font-medium ${
//               selectedCategory === category ? 'bg-[#001b5e] text-white' : 'bg-gray-200 text-gray-800'
//             } transition-colors duration-300 ease-in-out`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Project cards with smooth transition */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-6 transition-opacity duration-500 ease-in-out">
//         {filteredProjects.map((project, index) => (
//           <Projectitem
//             key={index}
//             img={project.img}
//             title={project.title}
//             description={project.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React, { useState } from 'react';
import Projectitem from './Projectitem';
import projectImg1 from '../../assets/Emojify-data-set.jpg';
import projectImg2 from '../../assets/housing-price-prediction.jpg';
import projectImg3 from '../../assets/iris-flower-classification.jpg';
import projectImg4 from '../../assets/stock-price-prediction-using-ML.jpg';

// Sample project list with categories
const projectList = [
  {
    img: projectImg1,
    title: 'RenalNet',
    description:
      'Designed and developed a scalable and end-to-end machine learning pipeline to detect tumors in the kidney based on Kidney CT scans.',
    category: 'Machine Learning',
  },
  {
    img: projectImg2,
    title: 'Housing Price Prediction',
    description:
      'Implemented a machine learning model to predict housing prices based on various economic factors.',
    category: 'Data Analysis',
  },
  {
    img: projectImg3,
    title: 'Iris Flower Classification',
    description:
      'Built a simple classification model to classify Iris flower species using Scikit-Learn.',
    category: 'Machine Learning',
  },
  {
    img: projectImg4,
    title: 'Stock Price Prediction',
    description:
      'Developed a model to predict stock prices using machine learning algorithms.',
    category: 'Data Analysis',
  },
  // Add more projects with categories like 'DevOps', 'Web Development', etc.
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All'
    ? projectList
    : projectList.filter((project) => project.category === selectedCategory);

  return (
    <div id="projects" className="flex flex-col items-center justify-center min-h-screen max-w-[1040px] m-auto md:pl-20 p-4 py-5">
      <div className="space-y-5 text-center mx-auto leading-6 p-4">
        <h1 className="text-4xl font-bold text-center text-[#001b5e] p-2">Project Gallery</h1>
        <div className="w-14 mx-auto h-0.5 bg-red-500"></div>
      </div>

      {/* Category filter menu */}
      <div className="hidden md:flex justify-center space-x-4 my-4">
        {['All', 'DevOps', 'Machine Learning', 'Data Analysis', 'Web Development'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedCategory === category ? 'bg-[#001b5e] text-white' : 'bg-gray-200 text-gray-800'
            } transition-colors duration-300 ease-in-out`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project cards with smooth transition */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-6 transition-opacity duration-500 ease-in-out">
        {filteredProjects.map((project, index) => (
          <Projectitem
            key={index}
            img={project.img}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

