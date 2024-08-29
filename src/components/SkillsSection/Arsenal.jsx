import React from "react"
import SkillCardTest from "./SkillCardTest"
import KubernetesIcon from "../../assets/kubernetes-icon.svg"

const domains = [
    {
        title: 'DevOps',
        tools: [
            <img src={KubernetesIcon} alt="Kubernetes-icon" />,
            <img src={KubernetesIcon} alt="Kubernetes-icon" />,
            <img src={KubernetesIcon} alt="Kubernetes-icon" />,
            <img src={KubernetesIcon} alt="Kubernetes-icon" />,
            <img src={KubernetesIcon} alt="Kubernetes-icon" />,
            <img src={KubernetesIcon} alt="Kubernetes-icon" />,
            <img src={KubernetesIcon} alt="Kubernetes-icon" />,
        ],
    },
  ]

const Arsenal = () =>{
    return (
        <div id='arsenal' className="flex flex-col items-center justify-center min-h-screen max-w-[1040px] mx-auto p-4 py-5">
            <div className="space-y-5 text-center mx-auto leading-6 p-4">
                <h1 className="text-4xl font-bold text-center text-[#001b5e] p-2">Arsenal</h1>
                <div className="w-14 mx-auto h-0.5 bg-red-500"></div>
            </div>
            <div className="w-[1040px] border-2 flex items-center justify-around">
                {domains.map((domain, index) =>(
                <SkillCardTest key={index}
                        title={domain.title}
                        tools={domain.tools}/>
                ))}
            </div>

        </div>
    )
}

export default Arsenal