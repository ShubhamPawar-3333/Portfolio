import React from 'react'
import PreviewButton from '../Buttons/PreviewButton'
import GithubButton from '../Buttons/GithubButton'

const Projectitem = ({img, title, description}) => {
  return (
      <div className='max-w-md md:max-w-xs w-full p-4 border border-gray-200 focus:ring-0 focus:border-gray-400 block rounded-xl transform transition-transform hover:scale-105 duration-300 shadow-lg hover:shadow-2xl'>
        <img className='rounded-xl h-40 w-full object-cover' src={img} alt="/"/>
        <div className='w-full p-2 flex flex-col justify-between'>
          <h2 className='text-lg font-semibold text-[#001b5e]'>{title}</h2>
          <p className='text-sm my-2 font-base text-stone-600'> {description}</p>
        </div>
        <div>
          <GithubButton />
          <PreviewButton  desc="Live Preview"/>
        </div>
      </div>
  )
}

export default Projectitem