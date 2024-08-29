import React from "react"

const SkillCardTest = ({title, tools}) => {
    return (
        <div className="flex flex-row justify-between items-center rounded-xl p-4">
            <div>
                {title}
            </div>
            <div>
                <ul>
                    {tools.map((item) =>(
                        <li>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SkillCardTest