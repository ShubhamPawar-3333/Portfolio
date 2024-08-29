import React from 'react'
import EducationItems from './EducationItems'

const data = [
    {
        year: "2019 - 2021",
        college: 'COEP Technological University',
        location: 'Pune, Maharashtra',
        degree: 'M.Tech',
        fieldOfStudy: 'Automotive Technology',
        cgpa: '8.03'
    },
    {
        year: "2014 - 2018",
        college: 'Galgotias University',
        location: 'Greater Noida, UP',
        degree: 'B.Tech',
        fieldOfStudy: 'Mechanical Engineering',
        cgpa: '8.77'
    }
]

const Education = () => {
  return (
    <div className='flex flex-col items-center justify-start w-full h-auto'>
        <h1 className='text-center w-[50%] py-3 m-10 font-bold shadow-xl shadow-gray-500 text-white bg-[#001b5e] rounded-full z-10'>Education</h1>
        <div className='mx-4 px-2'>
            {data.map((item, idx) =>(
                <EducationItems 
                    key={idx}
                    year={item.year}
                    college={item.college}
                    location={item.location}
                    degree={item.degree}
                    fieldOfStudy={item.fieldOfStudy}
                    cgpa={item.cgpa}/>
            ))}
        </div>
    </div>
  )
}

export default Education