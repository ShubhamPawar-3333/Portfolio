import React from 'react'
import Workitems from './Workitems'

const data = [
    {   
        year: "Jul-21 - Jul-23",
        title: 'DevOps Engineer',
        duration: '2 Year',
        company: "Capgemini",
        details:
        [
          "Managed AWS infrastructure using Terraform, automating the provisioning of EC2 instances, S3 buckets, and IAM roles to streamline deployments.",
          "Built and automated CI/CD pipelines with Jenkins, Dockerized application services, and deployed containers using Kubernetes for seamless scaling and availability.",
          "Standardized deployments with Helm and configured Kubernetes Volumes for persistent storage, ensuring data integrity and simplified updates.",
          "Monitored system health with Prometheus and Grafana, creating real-time dashboards and setting up AWS CloudWatch with SNS alerts for proactive issue resolution.",
          "Documented CI/CD workflows, deployment processes, and infrastructure configurations to simplify troubleshooting and improve knowledge transfer.",
      ]
    },
    // {   
    //     year: "Jul-21 - Dec-21",
    //     title: 'Linux Administrator',
    //     duration: '6 Months',
    //     company: "Capgemini",
    //     details:
    //     [
    //       "Managed and configured Linux VMs and containers, ensuring timely resolution of OS-related incidents with 95% ticket resolution efficiency.",
    //       "Collaborated with cross-functional teams, leading to a 20% reduction in issue resolution time.",
    //       "Proficient in Linux server management (RHEL), file systems (LVM, NFS), and storage, ensuring consistent system performance and compliance.",
    //       "Automated tasks using Bash and YAML scripting, utilizing cron jobs to enhance efficiency and streamline operations."
    //     ]
    // },
]
const Work = () => {
  return (
    <div className='flex flex-col items-center justify-evenly w-full h-auto'>
        <h1 className='text-center w-[50%] py-3 my-10 font-bold shadow-xl shadow-gray-500 text-white bg-[#001b5e] rounded-full z-10'>Experience</h1>
        <div>
          {data.map((item, idx) =>(
              <Workitems 
                  key={idx}
                  year={item.year}
                  title={item.title}
                  duration={item.duration}
                  company={item.company}
                  details={item.details}/>
          ))}
      </div>
    </div>
  )
}

export default Work