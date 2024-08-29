import React from "react"

const SkillCard = ({title, tools}) => {
    return (
        <div className="flex flex-col md:flex-row items-center p-2">
            <div 
                className="flex items-center justify-around
                        w-[75%] md:w-[25%] p-6
                        font-bold text-center text-xl text-[#001b5e]
                        rounded-xl border-gray-400 focus:ring-0 focus:border-gray-400 shadow-xl border">
                {title}
            </div>
            <div
                className="flex items-center justify-around
                        w-full md:w-[70%] mx-auto p-4
                        text-center text-xl font-bold
                        rounded-xl ">
                <ul className="flex flex-wrap space-x-3 space-y-3 items-center justify-evenly">
                    {tools.map((item) =>(
                        <li className="h-12 w-12">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SkillCard