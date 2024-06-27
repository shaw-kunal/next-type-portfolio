import React from 'react'
import './projectDesc.css';
import Image from 'next/image';

interface ProjectDescProps{
  title:string,
  arr:string[],
  left?:boolean,
  desc?:string
}
const ProjectDesc = ({title,arr,left=true,desc}:ProjectDescProps) => {
  return (
    <main className=' w-full h-full text-white p-4 pt-[100px]' >
      <section className='w-full'>
        {/* container */}
        <div className={`effect-container w-full grid ${left ?"grid-rows-[1fr_2fr] xl:grid-rows-1  xl:grid-cols-[1fr_3fr]":"grid-rows-[1fr_2fr] xl:grid-rows-1 xl:grid-cols-[1fr_3fr] rtl"}`}>
       <div className="flex-1">
            <div className="text-left">
              <div className="flex flex-col gap-7">
                <h2 className="font-bold text-xl ">{title} </h2>
                <p className='text-[14px] tracking-tight text-slate-300 text-left mb-5'>{desc}</p>
              </div>
            </div>
          </div> 
          <div className={`w-full feature-grid rounded-sm  ${left? "feature-transform-left" : "feature-transform-right" }` }>
           {
            arr.map((item,i)=>(
              <a href="#" aria-label="Low fees" key={i}>
              <Image src={item} alt="img" layout="fill" objectFit="cover" />
            </a>
            ))
           }
           </div>
        </div>
      </section>

    </main>
  )
}

export default ProjectDesc
