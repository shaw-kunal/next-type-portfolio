'use client';
import { Add, Build, Camera, CastForEducation, Code, Http, Https } from '@mui/icons-material';
import { Reorder, motion, useMotionValue } from 'framer-motion';
import { ReactNode, useState } from 'react';

type ItemsType = {
  id: number,
  title: string,
  desc?: string,
  icon?: ReactNode
}

const initialItems: ItemsType[] = [{
  id: 1,
  title: "Web Design",
  desc: "The most modern and high-quality design made at a professional level..",
  icon: <Camera fontSize={'large'} />
},
{
  id: 2,
  title: "Web Development",
  desc: "High-quality development of sites at the professional level.",
  icon: <Code fontSize='large' />
},
{
  id: 3,
  title: "Coding",
  desc: "Optimize the Code and able to solve complex problem.",
  icon: <Build fontSize='large' />
}, {
  id: 4,
  title: "API Development",
  desc: "Developing robust and scalable APIs for seamless integration.",
  icon: <Https fontSize='large' />
},
{
  id: 5,
  title: "Teaching",
  desc: "facilitating student engagement and fostering a positive learning environment.",
  icon: <CastForEducation fontSize='large' />
},


]



export default function Home() {

  const [items, setItems] = useState(initialItems)


  return (
    <main className='p-5 '>
      <div>
        <h1 className=" lg:hidden text-xl mb-6 mt-4 mx-2   text-start relative  z-50">
          About
          <motion.div
            initial={{ scaleX: 0.5 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            className='absolute -bottom-2 left-0 right-0 h-1   bg-gradient-to-r  from-slate-50  to-slate-100 rounded-md origin-left w-[150px]'
          ></motion.div>
        </h1>

        <p className='text-slate-400 font-light  text-justify mb-3'>I am a passionate and results-driven front-end developer with a strong foundation in building dynamic and responsive user-interface.</p>
        <p className='text-slate-400 font-light  text-justify mb-3'>My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.</p>
      </div>


      {/* what i am doing */}
      <div className='mt-4'>
        <h1 className="text-xl mb-6 mt-4 mx-2  tracking-wider text-start relative  z-50">What   I&apos;m doing

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: .3 }}
            transition={{ duration: 2 }}
            className='absolute -bottom-4 left-0 right-0 h-1 px-0   bg-gradient-to-r  from-slate-50  to-slate-100 rounded-md origin-left w-[250px]'
          ></motion.div>
        </h1>
      </div>

      {/*  doing box */}

      <Reorder.Group axis='y' onReorder={setItems} values={items} className='flex flex-wrap relative w-full mt-10 justify-between flex-grow'>
        {
          items.map((item) => (<ItemCard key={item.id} item={item} />)
          )
        }
      </Reorder.Group>
    </main>
  );
}



const ItemCard = ({ item }: { item: ItemsType }) => {
  const y = useMotionValue(0);


  return (
    <>
    <Reorder.Item value={item} id={item.title} style={{ y }} drag className='hidden lg:block cursor-grab w-full   lg:w-[49%]  relative mb-6 border-blue-850  bg-eerie-black-2   border rounded-md '>
      <div className="flex justify-center -translate-y-[1px]"><div className="w-3/4"><div className="h-[1px] bg-gradient-to-r from-transparent via-orange-400 to-transparent  w-full"></div></div></div>
      <div className='flex  flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-6 p-2' >
        <span>{item.icon}</span>
        <div>
          <h2 className='text-lg text-center lg:text-start mb-1 capitalize font-bold'>{item.title}</h2>
          <p className='text-slate-400 text-sm text-center lg:text-start'>{item.desc}</p>
        </div>
      </div>
    </Reorder.Item>
    <Reorder.Item value={item} id={item.title} style={{ y }}  className='block lg:hidden cursor-grab w-full   lg:w-[49%]  relative mb-6 border-blue-850  bg-eerie-black-2   border rounded-md '>
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-400 to-transparent  w-full">
          </div></div></div>
      <div className='flex  flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-6 p-2' >
        <span>{item.icon}</span>
        <div>
          <h2 className='text-lg text-center lg:text-start mb-1 capitalize font-bold'>{item.title}</h2>
          <p className='text-slate-400 text-sm text-center lg:text-start'>{item.desc}</p>
        </div>
      </div>
    </Reorder.Item>
    
    </>
  )
}
