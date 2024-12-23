import React, {useState} from "react";
import {AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail} from "react-icons/ai";
import {BsPerson} from "react-icons/bs";
import { HiOutlineAcademicCap } from "react-icons/hi2"
import { GrTechnology } from "react-icons/gr"

const Sidenav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
            {
                // if nav is true
                nav ? (
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                        <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome size={17} />
                            <span className='pl-4'>Home</span>

                        </a>
                        <a onClick={handleNav} href="#about" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <BsPerson size={17} />
                            <span className='pl-4'>Resume</span>

                        </a>
                        <a onClick={handleNav} href="#myjourney" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <HiOutlineAcademicCap size={17} />
                            <span className='pl-4'>Myjourney</span>

                        </a>
                        <a onClick={handleNav} href="#arsenal" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <GrTechnology size={17} />
                            <span className='pl-4'>Arsenal</span>

                        </a>
                        {/* <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineProject size={17} />
                            <span className='pl-4'>Project</span>

                        </a> */}
                        <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMail size={17} />
                            <span className='pl-4'>Contact</span>

                        </a>
                    </div>
                ):(
                    ''
                )
            }
            <div className='md:block hidden fixed top-[20%] z-10'>
                <div className='flex flex-col'>
                    <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineHome size={17}/>
                    </a>
                    <a href="#about" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsPerson size={17}/>
                    </a>
                    <a href="#myjourney" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineAcademicCap size={17}/>
                    </a>
                    <a href="#arsenal" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <GrTechnology size={17}/>
                    </a>
                    {/* <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineProject size={17}/>
                    </a> */}
                    <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail size={17}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidenav