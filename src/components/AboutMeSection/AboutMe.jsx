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
          <img src={ProfileImage} alt='Profile-image' className='h-[40%] sm:h-[30%] md:h-[20%] w-[40%] sm:w-[30%] md:w-[20%] rounded-full z-10 shadow-md shadow-slate-700' />
          <div className='text-center flex flex-col justify-around items-ceter m-4'>
            <h1 className='text-xl font-bold text-[#001b5e]'>Java Backend Developer</h1>
            <p className='pt-2 pb-4'>
              As a skilled Java Developer with over two years of experience, 
              I specialize in crafting robust backend systems while integrating DevOps practices to enhance efficiency and scalability. 
              <br/>My expertise includes 
              Java, 
              Spring Boot, 
              Hibernate, 
              Apache Kafka, 
              and a strong command of DevOps tools such as 
              Docker, 
              Kubernetes, 
              Jenkins, and 
              Terraform. 
              <br/>Passionate about continuous learning and collaboration, I am dedicated to delivering high-quality, 
              innovative software solutions and connecting with like-minded professionals to drive technological excellence.
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