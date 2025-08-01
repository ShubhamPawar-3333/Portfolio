import React from 'react'
import Workitems from './Workitems'

const data = [
    {   
        year: "Mar-21 - Jul-23",
        title: 'Software Engineer',
        duration: '2 Year 5 months',
        company: "Capgemini",
        details:
        [ 
          "Engineered scalable backend systems using Java, Spring Boot, and REST APIs within Agile environments to deliver robust software solutions.",
          "Integrated Apache Kafka for real-time data streaming and Redis for caching to enhance system performance and reliability.",
          "Implemented OAuth-based authentication mechanisms to strengthen application security and streamline user access control.",
          "Optimized MySQL and SQL Server databases through efficient query design and stored procedures to ensure seamless data management.",
          "Contributed to CI/CD pipelines utilizing Jenkins, Docker, and Kubernetes to enable efficient and reliable deployments.",
          "Developed responsive front-end components using Angular, HTML, CSS, and JavaScript to create seamless user experiences.",
          "Conducted code reviews and mentored junior developers to foster team collaboration and maintain high code quality standards.",
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