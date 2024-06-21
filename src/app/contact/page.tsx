'use client';
import React from 'react'
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className='p-4 py-5'>
      <h1 className='text-[20px] lg:text-[30px]  mb-5'>Contact Form</h1>
      <div className='flex gap-8 md:gap-5 flex-col md:flex-row'>
        <div className='flex-1'>

          <input
            type="text"
            placeholder='Full name'
            className='px-5 py-2 w-full  bg-transparent border-purple rounded-md focus:outline-none  text-slate-200'

          />
          <div className="flex justify-start -translate-y-[1px] space-x-1">
            <motion.div
              initial={{
                width: 0
              }}
              animate={{
                width: '100%'
              }}
              transition={{
                duration: 3
              }}

              className="w-full">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-400 to-transparent  w-full">
              </div>
            </motion.div>
          </div>
        </div>


        <div className='flex-1'>

          <input
            type="text"
            placeholder='email'
            className='px-5 py-2 w-full  bg-transparent border-purple rounded-md focus:outline-none  text-slate-300'

          />
          <div className="flex justify-end -translate-y-[1px] space-x-1">
            <motion.div
              initial={{
                width: 0
              }}
              animate={{
                width: '100%'
              }}
              transition={{
                duration: 3
              }}

              className="w-full">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-400 to-transparent  w-full">
              </div>
            </motion.div>
          </div>
        </div>
      </div>


      <div className='w-full mt-10'>

        <textarea
          placeholder='email'
          className='px-5 h-[200px] py-2 w-full  bg-transparent border-purple rounded-md focus:outline-none  text-slate-300 '
        />
        <div className="flex justify-center -translate-y-[7px] space-x-1">
          <motion.div
            initial={{
              width: 0
            }}
            animate={{
              width: '100%'
            }}
            transition={{
              duration: 3
            }}

            className="w-full">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-300 to-transparent  w-full">
            </div>
          </motion.div>
        </div>
      </div>
     
      <button className='bg-white text-black text-xl  px-10  mt-2 mb-5  float-right rounded-md font-medium py-2 '>Send</button>

    </div>
  )
}

export default Contact


