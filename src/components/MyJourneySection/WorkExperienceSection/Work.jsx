import React from 'react'
import Workitems from './Workitems'

const data = [
    {   
        year: "Jul-21 - Jul-23",
        title: 'Senior Analyst',
        duration: '2 Year',
        company: "Capgemini",
        details:
        [ 
          "Designed and implemented a fully automated CI/CD pipeline for a healthcare application, ensuring compliance, security, and reliability. Used Terraform to automate AWS infrastructure, managing EC2 instances, S3 storage, and IAM roles.",
          "Configured Auto Scaling and Load Balancers to enhance application scalability and availability. Used Helm to simplify Kubernetes deployments and rollbacks for seamless application management.",
          "Developed and deployed Docker containers, creating images for all services and managing their orchestration with Kubernetes to ensure high availability and scalability.",
          "Integrated Prometheus, Grafana, and CloudWatch for real-time application monitoring, logging, and resource tracking. Configured SNS notifications for proactive incident management.",
          "Automated OS and application security compliance updates using Ansible. Documented CI/CD workflows and deployment processes to improve operational efficiency and future scalability.",
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