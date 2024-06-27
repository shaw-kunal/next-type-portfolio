'use client';
import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!name) {
      newErrors.name = 'Name is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!message) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      // Reset the form or perform other actions if neede
      setEmail('')
      setName('')
      setMessage('')
    }
    
  };

  return (
    <div className='p-4 py-5 relative'>
      <h1 className='text-[20px] lg:text-[30px] mb-5'>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex gap-8 md:gap-5 flex-col md:flex-row'>
          <div className='flex-1'>
            <input
              type="text"
              placeholder='Full name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`px-5 py-2 w-full  bg-transparent border-purple rounded-md focus:outline-none text-slate-200 ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className='absolute text-orange-500 text-sm'>{errors.name}</p>}
            <div className="flex justify-start -translate-y-[1px] space-x-1">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 3 }}
                className="w-full">
                <div className="h-[1px]  relative bg-gradient-to-r from-transparent via-orange-400 to-transparent w-full"></div>
              </motion.div>
            </div>
          </div>

          <div className='flex-1'>
            <input
              type="text"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`px-5 py-2 relative w-full bg-transparent border-purple rounded-md focus:outline-none text-slate-300 ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className='text-orange-500 absolute text-sm'>{errors.email}</p>}
            <div className="flex justify-end -translate-y-[1px] space-x-1">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 3 }}
                className="w-full">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-400 to-transparent w-full"></div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className='w-full mt-10'>
          <textarea
            placeholder='Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`px-5 relative h-[200px] py-2 w-full bg-transparent border-purple rounded-md focus:outline-none text-slate-300 ${errors.message ? 'border-red-500' : ''}`}
          />
          {errors.message && <p className=' absolute  text-orange-500 text-sm'>{errors.message}</p>}
          <div className="flex justify-center -translate-y-[7px] space-x-1">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 3 }}
              className="w-full">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-300 to-transparent w-full"></div>
            </motion.div>
          </div>
        </div>

        <button type='submit' className='bg-white text-black text-xl px-10 mt-2 mb-5 float-right rounded-md font-medium py-2'>
          Send
        </button>
      </form>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="thank-you-message">
          <p className='text-center text-green-500 mt-4'>Thank you for your message!</p>
        </motion.div>
      )}

      <div className="absolute right-[100px] z-10 h-[150px] w-[400px] rotate-[0deg] transform rounded-full bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 blur-[150px] top-[-150px]"></div>
    </div>
  );
};

export default Contact;
