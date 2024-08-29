import React from 'react';
import { TypeAnimation  } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaSquareXTwitter } from 'react-icons/fa6'
import HeroBG from "../../assets/safar-safarov-MSN8TFhJ0is-unsplash.jpg"

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover' src={HeroBG} alt="home-img" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Hi! I'm Shubham</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>A
                    <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        // wait 1s before replacing "Mice" with "Hamsters"
                        'Coder',
                        1000,
                        'Machine Learning Enthusiast',
                        1000,
                        'Data Science Explorer',
                        1000,
                        'DevOps Engineer',
                        1000
                    ]}
                    wrapper="div"
                    speed={50}
                    style={{ fontSize: '1em', paddingLeft:'5px' }}
                    repeat={Infinity}
                    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <a
                        href='https://www.linkedin.com/in/shubham-dilip-pawar/'
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                        <FaLinkedin className='cursor-pointer' size={20}/>
                    </a>
                    <a 
                        href="https://github.com/ShubhamPawar-3333"
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                        <FaGithub className='cursor-pointer' size={20}/>
                    </a>
                    <a 
                        href="https://x.com/shubhamairspace"
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                        <FaSquareXTwitter className='cursor-pointer' size={20}/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main