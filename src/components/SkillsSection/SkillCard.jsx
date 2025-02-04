import React from "react"

const SkillCard = ({title, tools}) => {
    return (
        <div className="flex flex-col md:flex-row items-center pt-2">
            <div 
                className="flex items-center justify-around
                        w-[80%] md:w-[50%] p-3
                        font-bold text-center text-lg text-[#001b5e]
                        rounded-xl border-gray-400 focus:ring-0 focus:border-gray-400 shadow-xl border">
                {title}
            </div>
            <div
                className="flex items-center justify-around
                        w-full md:w-[70%] mx-auto p-3 md:p-1
                        text-center text-xl font-bold
                        rounded-xl ">
                <ul className="flex flex-wrap space-x-3 space-y-3 items-center justify-evenly">
                    {tools.map((item, index) =>(
                        <li className="h-11 w-11" key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SkillCard