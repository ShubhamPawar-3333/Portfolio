import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { HiOutlinePhone } from "react-icons/hi2"
import { MdOutlineAttachEmail, MdOutlineLocationOn } from "react-icons/md"
import { motion } from 'framer-motion'

const ContactSection = () => {
  return (
    <div id='contact' className='flex items-center justify-center'>
        <div className='w-full min-h-screen bg-center bg-cover' style={{backgroundImage: "url(src/assets/contact-background.jpg)"}}>
            <div className='flex flex-col items-center justify-center min-h-screen max-w-[1040px] m-auto md:pl-20 p-4 py-5'>
              <div className='space-y-3 text-center mx-auto bg-white/80 rounded-xl'>
                <h1 className='text-4xl font-bold text-center text-[#001b5e] p-2'>Get in touch</h1>
                <div className='w-14 mx-auto h-0.5 bg-red-500'></div>
                <p className=' text-gray-900 text-base leading-6 p-2'>"Let's Connect!"<br/>
                    "Whether you’re looking for a fresh perspective, innovative ideas, or a committed professional to join your team, I’m excited to explore how we can achieve great things together. Drop me a message, and let’s start a conversation about how I can contribute to your success."
                </p>
                <div className='grid grid-cols-1 md:grid-cols-3 w-full'>
                  <div className='m-4'>
                    <h1 className='text-center md:text-start text-2xl font-black p-2 mb-6 text-[#001b5e]'>
                      Contact info
                    </h1>
                    <address className='flex flex-col sm:flex-row md:flex-col items-center md:items-start justify-evenly'>
                      <div className='flex flex-col items-center md:items-start mb-6'>
                        <h2 className='inline-flex text-base font-semibold'>
                          <HiOutlinePhone className='text-base mr-2'/> Phone
                        </h2>
                        <p className='text-gray-700 text-sm font-medium'>
                          +91 8920037868
                        </p>
                      </div>
                      <div className='flex flex-col items-center md:items-start mb-6'>
                        <h2 className='inline-flex text-base font-semibold'>
                          <MdOutlineAttachEmail className='text-base mr-2'/> E-mail
                        </h2>
                        <p className='text-gray-700 text-sm font-medium'>
                          shuubham.pawar.368@gmail.com
                        </p>
                      </div>
                      <div className='flex flex-col items-center md:items-start mb-6'>
                        <h2 className='inline-flex text-base font-semibold'>
                        <MdOutlineLocationOn className='text-base mr-2'/>
                          Location
                        </h2>
                        <p className='text-gray-700 text-sm font-medium'>
                          New Delhi, Delhi-55
                        </p>
                      </div>
                    </address> 
                  </div>
                <div className='md:col-span-2 mt-0 p-2 m-8 md:m-0 md:p-4'>
                  <form action='https://formspree.io/f/xblrwqjo' method="post" encType='multipart/form-data'>
                    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                      <div className='flex flex-col'>
                        <label htmlFor='fullname' className='sr-only'>Full Name</label>
                        <input
                          id='fullname'
                          type="text"
                          name='fullname'
                          placeholder='Please provide your full name'
                          className='form-style'/>
                      </div>
                      <div className='flex flex-col'>
                        <label htmlFor='mobileno' className='sr-only'>Mobile Number</label>
                        <input
                          id='mobileno'
                          type="text"
                          name='mobileno'
                          placeholder='Type in your mobile number'
                          className='form-style'/>
                      </div>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label htmlFor='email' className='sr-only'>E-mail Address</label>
                        <input 
                          id='email'
                          name='email'
                          type="email"
                          placeholder='Add your email address here'
                          className='form-style'/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label htmlFor='subject' className='sr-only'>E-mail Subject</label>
                        <input
                          id='subject'
                          type="subject"
                          name='subject'
                          placeholder='Specify subject' 
                          className='form-style'/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label htmlFor='message' className='sr-only'>Message</label>
                        <textarea
                          id='message'
                          name="message"
                          rows="3"
                          placeholder="what's on your mind ..."
                          className='form-style'></textarea>
                    </div>
                    <motion.button
                      type="submit"
                      className="text-white bg-gradient-to-r from-[#001b5e] via-[#002f6c] to-[#004080] focus:outline-none focus:ring-0 shadow-lg shadow-[#001b5e]/50 dark:shadow-lg dark:shadow-[#004080]/80 font-medium rounded-full text-semibold px-5 py-2.5 text-center me-2 my-2"
                      whileHover={{ scale: 1.15, rotate: 3 }}
                      whileTap={{ scale: 0.9, rotate: 0 }} // Reset rotation on click
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0, rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 0.6 }}>
                      Send Message
                    </motion.button>
                  </form>
                </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
};

export default ContactSection;
