import React from 'react'

const EducationItems = ({year, college, location, degree, fieldOfStudy, cgpa}) => {
  return (
    <div>
      <ol className='flex flex-col md:flex-row relative border-l border-stone-300'>
          <li className='mb-6 ml-4'>
              <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>
              <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
              <span className="inline-flex items-center space-x-4 pl-1 pr-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                  />
                </svg>
                {year}
            </span>

                  {/* <span className='inline-flex items-center space-x-2 px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                      </svg> {year}

                  </span> */}
                  <span className='text-lg font-semibold text-[#001b5e]'>{college}</span>
              </p>
              <p className='my-2 text-sm font-normal leading-none text-stone-600'>{location}</p>
              <p className='my-2 text-base font-normal text-stone-600'><span>{degree} in {fieldOfStudy}</span></p>
              <p className='my-2 text-base font-normal text-stone-600'><span>CGPA: {cgpa}</span></p>
          </li>
      </ol>
    </div>
  )
}

export default EducationItems