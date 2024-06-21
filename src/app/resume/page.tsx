'use client';

import { AcUnit, Add, ImportContacts, InsertEmoticon } from "@mui/icons-material";
import { motion, useScroll, useTransform } from "framer-motion"
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { ceveat, shadows } from '@/app/utils/font';


interface timeline {
  title: string,
  desc: string
}


type skillObjType = {
  name: string,
  weight: number
}

const timeline = [
  {
    title: 'Parul Insttitute of Technology',
    desc: `The umberalla man, one of the story written on early 90's but still author live in story from last one centuary. `,
  },
  {
    title: 'Parul1 Insttitute of Technology',
    desc: `The umberalla man,  on early 90's but still author live in story from last one centuary. `,
  },
  {
    title: 'Parul2 Insttitute of Technology',
    desc: `The umberalla man, The umberalla man, The umberalla man,The umberalla man,one of the story written on early 90's but still author live in story from last one centuary. `,
  },
  {
    title: 'Parul3 Insttitute of Technology',
    desc: `The umberalla man, one of the story written on early 90's but still author live in story from last one centuary. `,
  },
]


const skills: skillObjType[] = [

  {
    name: "React js",
    weight: 56
  },
  {
    name: "Next js",
    weight: 80
  },
  {
    name: "Node",
    weight: 65
  },
  {
    name: "BPMN",
    weight: 82
  },
  {
    name: "CSS",
    weight: 60
  },
  {
    name: "JAVASCRIPT",
    weight: 75
  },
  {
    name: "JAVA",
    weight: 80
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

      <TimeLine title="Education" icon={<ImportContacts />} timelinear={timeline} />
      {/* <TimeLine title="Internship" icon={<AcUnit />} timelinear={timeline} /> */}
      <TimeLine title="Job" icon={<AcUnit />} timelinear={timeline} />

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

skills
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
    <section  >
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
              <h2 className="mb-3">{timeline.title}</h2>
              <p className="font-light line-clamp-0 text-slate-300 text-base">{timeline.desc}</p>
            </li>
          ))
        }
      </motion.ol>
    </section>

  )
}

const SkillLine = (item: skillObjType) => {
  return (
    <div>
      <div className={`mb-3 ${ceveat}  text-lg text-slate-300 flex gap-5`}>
        <span>{item.name}</span>
        <span>{item.weight}%</span>
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


