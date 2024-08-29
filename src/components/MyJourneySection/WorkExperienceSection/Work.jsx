import React from 'react'
import Workitems from './Workitems'

const data = [
    {   
        year: "2021 - 2023",
        title: 'DevOps Engineer',
        duration: '2 Years',
        company: "Capgemini",
        details:
        [
          "Orchestrated the development of a predictive analytics model for ticket resolution times, resulting in a 20% reduction in the average time taken to resolve tickets.",
          "Demonstrated adeptness in machine learning technologies by leveraging Python and scikit-learn for model development, contributing to a 15% increase in the accuracy of ticket resolution predictions.",
          "Applied advanced data preprocessing techniques, leading to a 25% improvement in the overall efficiency of ticket resolution processes, enhancing the organization’s responsiveness to customer needs."
        ]
    }
]
const Work = () => {
  return (
    <div className='flex flex-col items-center justify-evenly w-full h-auto'>
        <h1 className='text-center w-[50%] py-3 my-10 font-bold shadow-xl shadow-gray-500 text-white bg-[#001b5e] rounded-full z-10'>Experience</h1>
        <div>
          {data.map((item, idx) =>(
              <Workitems 
                  key={idx}
                  year={item.year}
                  title={item.title}
                  duration={item.duration}
                  company={item.company}
                  details={item.details}/>
          ))}
      </div>
    </div>
  )
}

export default Work