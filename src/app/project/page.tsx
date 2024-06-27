'use client';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { project1, project2, technologies, technologiesSliderData } from "@/constant";
import { useRef, useState } from "react";
import { ceveat, shadows } from '@/app/utils/font';
import Image from "next/image";
import ProjectDesc from "../../components/projectDesc/ProjectDesc";


const Portfolio = () => {
  return (
    <div className="p-2 min-h-[200px] ">

      <h1 className="text-lg ml-5 font-medium  mt-10">Used Tech In My Projects-</h1>
      <div className="mt-10">
      <TechnologySlider item={technologiesSliderData} />
    </div>

    <ProjectDesc 
    title="Reluctant money" 
     desc={
      "Developed a MERN stack web application, Reluctant Money.in, for selling courses with a responsive UI, secure payment gateway, admin panel, and data visualization tools. Ensured seamless performance and cross-browser compatibility. "
     }
    arr={project1}/>
    <ProjectDesc title="Blockchain based e-voting system" 
    desc="Developed a web-based online voting system using blockchain technology to ensure secure, transparent, and tamper-proof elections. Implemented a user-friendly interface and robust backend for seamless voting and result verification."
    arr={project2} left={false}/>
    {/* <ProjectDesc title="" arr={project1}/> */}
    </div>
  )
}

export default Portfolio


interface technologiesProps {
  item: technologies[]
}
const TechnologySlider = ({ item }: technologiesProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    const currentbreakpoint = swiper.currentBreakpoint;
    const slidePerViewObj = swiper.params.breakpoints[currentbreakpoint]

    setActiveIndex((swiper.realIndex + Math.floor((slidePerViewObj?.slidesPerView || 0 )/ 2)) % technologiesSliderData.length);
  };
  return (
    <div className="flex gap-2 relative">
      <Swiper
        slidesPerView={5}
        autoplay={true}
        spaceBetween={5}
        loop={true}
        onSlideChange={handleSlideChange}
        modules={[Autoplay, Navigation, Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 3
          },
          540: {
            slidesPerView: 5
          }
        }}
      >

        {
          item.map((item: technologies, i: number) => (
            <SwiperSlide key={i}>
              <div className={`flex items-center justify-center gap-2 h-[80px]    transition-all ease-in-out `}>
               <div className="w-[70%] md:w-10 md:h-10 shadow-md h-[50px] text-white relative">
                <Image
                fill
                  className={` hidden md:block md:rounded-full rounded-md  ${item.id - 1 === activeIndex ? `brightness-125 bg-white	` : '  grayscale'} `}
                  src={item.img}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={item.title} />

                  </div>
                <span className={`${item.id - 1 === activeIndex ? `${ceveat} text-[30px] text-purple-500` : 'text-lg  '} `}> {item.title}</span>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className="border-left-of-focus "></div>
      <div className="border-focus  tech-block"></div>
      <div className="border-right-of-focus  tech-block"></div>
      <div className="border-left-of-left-of-focus  "></div>
      <div className="border-right-of-right-of-focus"></div>
      <div className=" absolute left-[100px]  z-10 h-[150px] w-[400px] rotate-[0deg] transform rounded-full bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400  blur-[150px]  top-[-150px] md:top-[-350px]" ></div>
    </div>
  )


}