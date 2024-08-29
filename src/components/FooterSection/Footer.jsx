import React from 'react'

const Footer = () => {
  return (
    <footer className=" dark:bg-gray-900">
        <div className="w-full mx-auto p-4 md:py-4">
            <div className="flex items-center justify-end">
                <ul className="flex items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 text-center dark:text-gray-400">Copyright © 2023. All Rights Reserved.</span>
            <span className="block text-sm text-gray-500 text-center dark:text-gray-400">Designed and Developed by</span>
            <span className="block text-sm text-gray-500 text-center dark:text-gray-400">Shubham Pawar</span>
        </div>
    </footer>
  )
}

export default Footer