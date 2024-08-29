import React from "react"
import Education from './EducationSection/Education'
import Work from "./WorkExperienceSection/Work"


const Myjourney = () => {
    return(
        <div id='myjourney' className='flex items-center justify-center min-h-screen max-w-[1040px] m-auto md:pl-20 p-4 py-5'>
            <div className="space-y-5">
                <h1 className="text-4xl font-bold text-center text-[#001b5e] p-2">My Journey</h1>
                <div className="w-14 mx-auto h-0.5 bg-red-500"></div>
                <div className='grid lg:grid-cols-2 py-4'>
                    <Work />
                    <Education />
                </div>
            </div>
        </div>
    )
}

export default Myjourney

