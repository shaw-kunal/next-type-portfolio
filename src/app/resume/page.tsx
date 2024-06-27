'use client';

import { AcUnit, Add, ImportContacts, InsertEmoticon } from "@mui/icons-material";
import { motion, useScroll, useTransform } from "framer-motion"
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { ceveat, shadows } from '@/app/utils/font';


interface timeline {
  title: string,
  desc: string,
  time?:string,
}


type skillObjType = {
  name: string,
  weight: number
}

const timeline_education:timeline[] = [
  {
    title: 'Parul Insttitute of Technology',
    time:'2020-2024',
    desc: `The umberalla man, one of the story written on early 90's but still author live in story from last one centuary. `,
  },
  {
    title: 'Jagatdal Chashma - I - Rahmat High School H.S',
    time:'2017-1019',
    desc: `Successfully completed the 12th standard with a focus on Physics, Chemistry, and Mathematics. `,
  }
]


const timeline_internship:timeline[]=[
  {
    title: 'Teaching Assistant',
    time:'2023(3 month',
    desc: ` - Assisting in conducting lectures, grading assignments, and providing constructive feedback to students.`,
  },
  {
    title: 'Frontend Developer',
    time:'2024(currently)',
    desc: `As a Frontend Developer Intern, I have actively contributed to the development and enhancement of web applications, ensuring they are user-friendly and visually appealing.`,
  }
]



const skills: skillObjType[] = [

  {
    name: "React Js",
    weight: 80
  },
  {
    name: "Next Js",
    weight: 65
  },
  {
    name: "Node Js",
    weight: 75
  },
  {
    name: "BPMN",
    weight: 60
  },  
  {
    name: "TypeScript",
    weight: 75
  },
  {
    name: "JAVASCRIPT",
    weight: 80
  },
  {
    name: "CSS",
    weight: 75
  },
  {
    name: "JAVA",
    weight: 75
  },
  {
    name: "HTML",
    weight: 85
  },
  {
    name: "MongoDB",
    weight: 65
  },
  {
    name: "Express.js",
    weight: 75
  },
  {
    name: "Tailwind css",
    weight: 85
  },
  {
    name: "Redux toolkit",
    weight: 75
  },
]



const Resume = () => {
  return (
    <div className="p-3">
      <h1 className=" lg:hidden text-xl mb-6 mt-4 mx-2   text-start relative  z-50">
        Resume
        <motion.div
          initial={{ scaleX: 0.5 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className='absolute -bottom-2 left-0 right-0 h-1   bg-gradient-to-r  from-slate-50  to-slate-100 rounded-md origin-left w-[50px]'
        ></motion.div>
      </h1>

      <TimeLine title="Education" icon={<ImportContacts />} timelinear={timeline_education} />
      {/* <TimeLine title="Internship" icon={<AcUnit />} timelinear={timeline} /> */}
      <TimeLine title="Internship" icon={<AcUnit />} timelinear={timeline_internship} />

      <div>

      </div>


      <div className="skill-container  rounded-md">
        <div className="bg-eerie-black-2">

          <h3 className="mb-5 text-2xl">My Skills</h3>
          <div className="w-full">
            {
              skills.map((item, i) => (
                <SkillLine key={i} name={item.name} weight={item.weight} />
              ))
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Resume

interface TimeLinePropsType {
  title: string,
  icon: ReactNode,
  timelinear: timeline[]
}

const TimeLine = ({ title, icon, timelinear }: TimeLinePropsType) => {

  const ref = useRef<HTMLDivElement>(null); // Correctly typing the ref
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const [height, setHeight] = useState(0)
  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, [ref])

  const y = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 100, 200, 300, 200, 0]);
  return (
    <section className="relative" >
      <div className="flex items-center  gap-6 md:gap-12 mb-5" ref={ref}>
        <motion.div className="icon-box !rounded-full !w-12 !h-12 "
          transition={{
            duration: 5,
            ease: "easeInOut"

          }}
          style={{ y }}>
          {icon}
        </motion.div>
        <h2 className="uppercase text-xl text-white brightness-200 font-semibold tracking-wide">{title}</h2>
      </div>

      <motion.ol className="relative"
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
      >
        {
          timelinear.map((timeline, i) => (
            <li key={i} className="relative ml-16 md:ml-24 mb-10 timeline-item after:-left-[40px] md:after:-left-[75px] before:-left-[38px] md:before:-left-[73px]">
              <h2 className="mb-1">{timeline.title}</h2>
              <span className="mb-1 text-slate-200">-{timeline.time}</span>
              <p className="font-light line-clamp-0 text-slate-400 text-base">{timeline.desc}</p>
            </li>
          ))
        }
      </motion.ol>
      <div className="absolute right-[100px] z-10 h-[150px] w-[200px] rotate-[0deg] transform rounded-full bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 blur-[150px] top-[-150px]" ></div>

    </section>

  )
}

const SkillLine = (item: skillObjType) => {
  return (
    <div className="relative">
      <div className={`mb-3 ${ceveat}  text-lg text-slate-300 flex gap-5`}>
        <span>{item.name}</span>
      </div>
      <div className="w-full skill-progres-bg h-2 rounded-md skill-line-bg mb-3">
        <motion.div
          initial={{
            width: 0
          }}
          animate={
            {
              width: `${item.weight}%`
            }}
          transition={{
            duration: 1
          }}
          className="h-full bg-red skill-fill-bg"
        ></motion.div>
      </div>
    </div>
  )
}


