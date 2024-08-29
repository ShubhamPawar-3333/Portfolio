import React from 'react'
import ProfileImage from '../../assets/Profile.jpeg'
import HireMeButton from '../Buttons/HireMeButton'
import DownloadButton from '../Buttons/DownloadButton'


const AboutMe = () => {
  return (
    <div id='about' className='flex items-center justify-center min-h-screen max-w-[1040px] m-auto md:pl-20 p-4 py-5'>
      <div>
        <div className="space-y-5 text-center mx-auto leading-6 p-4">
          <h1 className='text-4xl font-bold text-center text-[#001b5e]'>About Me</h1>
          <div className="w-14 mx-auto h-0.5 bg-red-500"></div>
        </div>
          <div className='flex flex-col justify-center items-center m-10'>
            <img src={ProfileImage} alt='Profile-image' className='h-[20%] w-[20%] rounded-full z-10 shadow-md shadow-slate-700'/>
            <div className='text-center flex flex-col justify-around items-ceter m-4'>
              <h1 className='text-xl font-bold text-[#001b5e]'>DevOps Engineer</h1>
              <p className='p-2'>
              As a skilled DevOps Engineer with 2 years of experience, I specialize in bridging the gap between development and operations. My expertise lies in automating workflows, optimizing systems, and streamlining processes to enhance efficiency and scalability. I am proficient in a wide range of tools and technologies, including Python, Docker, Kubernetes, AWS, and Jenkins, among others. Passionate about continuous learning and collaboration, I am always eager to connect with professionals in the field and explore innovative solutions together.
              </p>
              <div className='flex item-center justify-evenly'>
                <HireMeButton />
                <DownloadButton />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AboutMe