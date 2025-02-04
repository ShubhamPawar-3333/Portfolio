import React from "react"
import SkillCard from "./SkillCard"
// Programming
import PythonIcon from "../../assets/SVG's/python-svgrepo-com.svg"
import JavaIcon from "../../assets/SVG's/java-4-logo-svgrepo-com.svg"
// Version-control
import GitIcon from "../../assets/SVG's/git-icon.svg"
import GitHubIcon from "../../assets/SVG's/github-icon.svg"
// CI-CD Automation
import JenkinsIcon from "../../assets/SVG's/jenkins.svg"
import GitHubActionsIcon from "../../assets/SVG's/gitHub-actions-icon.svg"
import GitLabIcon from "../../assets/SVG's/gitlab-icon.svg"
import ArgoCDIcon from "../../assets/SVG's/Argo-CD-icon.svg"
//Containerisation and Orchestration
import KubernetesIcon from "../../assets/SVG's/kubernetes-icon.svg"
import DockerIcon from "../../assets/SVG's/Docker-icon.svg"
import AmazonEKSIcon from "../../assets/SVG's/amazon-eks-svgrepo-com.svg"
//Infrastructure as Code(IaC)
import AnsibleIcon from "../../assets/SVG's/Ansible-icon.svg"
import TerraformIcon from "../../assets/SVG's/terraform-icon.svg"
// Cloud
import AWSIcon from "../../assets/SVG's/AWS-icon.svg"
//Build
import MavenIcon from "../../assets/SVG's/maven-svgrepo-com.svg"
// Monitoring
import PrometheusIcon from "../../assets/SVG's/prometheus.svg"
import GrafanaIcon from "../../assets/SVG's/grafana.svg"

const domains = [
    {
        title: 'Programming',
        tools: [
            <img src={PythonIcon} alt="Kubernetes-icon" />,
            <img src={JavaIcon} alt="Docker-icon" />,
        ],
    },
    {
        title: 'Version-Control',
        tools: [
            <img src={GitIcon} alt="Git-icon" />,
            <img src={GitHubIcon} alt="GitHub-icon" />,
        ],
    },
    {
        title: 'CI-CD Automation',
        tools: [
            <img src={JenkinsIcon} alt="Jenkins-icon" />,
            <img src={GitHubActionsIcon} alt="GitHub-Actions-icon" />,
            <img src={GitLabIcon} alt="GitLab-icon" />,
            <img src={ArgoCDIcon} alt="ArgoCD-icon" />,
        ],
    },
    {
        title: 'Containerisation and Orchestration',
        tools: [
            <img src={KubernetesIcon} alt="Kubernetes-icon" />,
            <img src={DockerIcon} alt="Docker-icon" />,
            <img src={AmazonEKSIcon} alt="AmazonEKS-icon" />,
        ],
    },
    {
        title: 'Infrastructure as Code(IaC)',
        tools: [
            <img src={AnsibleIcon} alt="Ansible-icon" />,
            <img src={TerraformIcon} alt="Terraform-icon" />,
        ],
    },
    {
        title: 'Build',
        tools: [
            <img src={MavenIcon} alt="Maven-icon" />,
        ],
    },
    {
        title: 'Cloud Services',
        tools: [
            <img src={AWSIcon} alt="AWS-icon" />,
        ],
    },
    {
        title: 'Monitoring',
        tools: [
            <img src={PrometheusIcon} alt="Prometheus-icon" />,
            <img src={GrafanaIcon} alt="Grafana-icon" />,
        ],
    },
]

const softskills = [
    "Communication and Collaboration",
    "Understanding of Relevant Tools", 
    "Automation Skills",
    "Coding and Scripting",
    "Cloud Skills",
    "Customer-Focused Approach",
    "Proactiveness",
    "Passion For Learning",
]

const Arsenal = () =>{
    return (
        <div id='arsenal' className="flex flex-col items-center justify-center min-h-screen max-w-[1040px] m-auto md:pl-20 p-4 py-2">
            <div className="space-y-5 text-center mx-auto leading-6 p-4">
                <h1 className="text-4xl font-bold text-center text-[#001b5e] p-2">Arsenal</h1>
                <div className="w-14 mx-auto h-0.5 bg-red-500"></div>
            </div>
            <h1 className='text-center w-[40%] py-3 m-2 font-bold shadow-xl shadow-gray-500 text-white bg-[#001b5e] rounded-full z-10'>Technologies</h1>
            <div className="w-full grid grid-cols-1 m-2">
                {domains.map((domain, index) =>(
                <SkillCard key={index}
                        title={domain.title}
                        tools={domain.tools}/>
                ))}
            </div>
            <h1 className='text-center w-[40%] py-3 font-bold shadow-xl shadow-gray-500 text-white bg-[#001b5e] rounded-full z-10'>Soft Skills</h1>
            <div className="flex items-center justify-evenly
                        m-2 p-4
                        text-center"
                        >
                <ul className="flex flex-wrap space-x-3 space-y-3 items-center justify-evenly ">
                {softskills.map((item) =>(
                    <li className='flex items-center justify-center p-2 rounded-xl border-gray-400 focus:ring-0 focus:border-gray-400 shadow-lg border' key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Arsenal