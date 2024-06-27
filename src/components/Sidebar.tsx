"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownward, ArrowUpward, CalendarMonth, Email, Facebook, GitHub, Instagram, KeyboardArrowDown, KeyboardArrowUp, LinkedIn, LocationCity, Phone, Twitter } from '@mui/icons-material';
import { ceveat } from '@/app/utils/font';
import Link from 'next/link';



const Sidebar = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [showMore, setShowMore] = React.useState<boolean>(true);


  useEffect(() => {
    // Function to check screen size
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Assuming 1024px as the breakpoint for large screens
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);


  return (


    <motion.div
      initial={{ maxHeight: isLargeScreen ? '1000px' : '150px' }}
      animate={isLargeScreen ? {} : { maxHeight: showMore ? '1000px' : '150px' }}
      transition={isLargeScreen ? {} : { duration: 0.8, ease: 'easeIn' }}
      className={`${showMore ? 'h-fit' : "h-32"} w-full   bg-eerie-black-2 overflow-hidden  rounded-xl border-purple p-4 relative px-8 transition-all duration-150 ease-in-out lg:min-h-fit `}>
      <div className='flex items-center gap-4 w-full'>
        <div className='relative !w-[80px] h-[80px]  rounded-full overflow-hidden '>
          <Image fill src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg" alt="" />
        </div>
        <div className='flex flex-col  w-full'>
          <div className={`${ceveat}   text-4xl`}>Kunal kumar shaw</div>
          <span className='bg-onyx rounded-md px-2 mt-2'>Frontend Developer</span>
        </div>
      </div>
      <div className="  block lg:hidden absolute top-0 right-0  rounded-bl-xl rounded-tr-xl px-2 cursor-pointer  border-purple hover:border-l-white hover:border-t-white hover:bg-gradient-to-r from-slate-400 to-transparent">
        <span className='text-xs ' onClick={() => setShowMore(prev => !prev)}>{showMore?<KeyboardArrowDown/>:<KeyboardArrowUp/>}</span>
      </div>

      <div className='h-0 my-6 border-purple'></div>
      {/* <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className={` ${shadows} text-2xl bg-white w-fit border-purple rounded-full py-1 px-4 font-gray min-w-[300px]  text-center cursor-pointer hover:bg-gradient-to-t from-neutral-400 to-transparent hover:text-black mx-auto origin-center`}
      >
        Download Resume
      </motion.div>
      <div className='h-0 my-6 border-purple'></div> */}


      {/* // social media  */}

      <div className='flex flex-col md:flex-row  gap-3 lg:gap-4 flex-nowrap md:flex-wrap  md:justify-between'>
        <div className='flex  gap-3 md:w-[300px]'>
          <div className='icon-box' >
            <Email width={12} />
          </div>
          <div className='flex flex-col'>
            <span className='text-sm' > Email</span>
            <span className={`${ceveat} text-slate-400  text-2xl`}>shawkunal3010@gmail.com</span>
          </div>

        </div>

        <div className='flex  gap-3 md:w-[300px]'>
          <div className='icon-box' >
            <Phone width={12} />
          </div>
          <div className='flex flex-col'>
            <span className='text-sm' > Phone</span>
            <span className={`${ceveat}  text-slate-400  text-2xl`}>6289197569</span>
          </div>
        </div>



        <div className='flex  gap-3 md:w-[300px]'>
          <div className='icon-box' >
            <CalendarMonth width={12} />
          </div>
          <div className='flex flex-col'>
            <span className='text-sm' > Birthday</span>
            <span className={`${ceveat}  text-slate-400  text-2xl`}>30th Oct,2001</span>
          </div>
        </div>


        <div className='flex  gap-3 md:w-[300px]'>
          <div className='icon-box' >
            <LocationCity width={12} />
          </div>
          <div className='flex flex-col'>
            <span className='text-sm' > Current Location</span>
            <span className={`${ceveat}  text-slate-400 text-2xl`}>Surat,Gujarat</span>
          </div>
        </div>



      </div>
      <div className='h-0 my-6 border-purple'></div>


      {/* //social media link  */}

      <motion.div
        className='flex gap-4'
        initial={{
          x: -50,
        }}
        transition={{
          duration: .5
        }}

        whileInView={{
          x: 0,
        }}

      >
        <Link href="https://github.com/shaw-kunal"
         target='_blank'
        className='social-media-link-box' >
          <GitHub fontSize='large' />
        </Link>
        <Link href={"https://x.com/shawkunal3010"} className='social-media-link-box' >
          <Twitter fontSize='large' />
        </Link>
        <Link 
        href={"https://www.linkedin.com/in/shaw-kunal/"}
         className='social-media-link-box' >
          <LinkedIn fontSize='large' />
        </Link>
        <Link
         href={"https://www.instagram.com/kunal.official.shaw30/"}
          className='social-media-link-box' >
          <Instagram fontSize='large' />
        </Link>
      </motion.div>
      <div className="absolute left-0 right-0 z-10 h-[150px] w-[400px] rotate-[0deg] transform rounded-full bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 blur-[150px] top-[-150px]" ></div>
    </motion.div>



  )
}

export default Sidebar
