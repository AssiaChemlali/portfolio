"use client"
import React from 'react'
import HeadingSection from './HeadingSection'
import { useSectionInView } from '@/lib/hooks'
import{motion} from'framer-motion'
import { sendEmail } from '@/actions/sendEmail'

import SubmitBtn from './SubmitBtn'
import toast from 'react-hot-toast'

const Contact = () => {
  const {ref}=useSectionInView('Contact')

 

  return (
    <motion.section 
    ref={ref} 
    id="contact" 
    className='w-[min(100%,50rem)] mb-28 scoll-mt-28 text-center'

    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    viewport={{once:true}}
    >

      <HeadingSection title="contact me"/>
      <p className='text-gray-700 text-normal -mt-6 dark:text-white/80'>please contact me directly at <a className='underline' href="mailto:example@gmail.com">example.com</a> or through this form</p>

      <form 
      action={ async formData=> {
      const {data,error} =await sendEmail(formData)
      if(error){
       toast.error(error)
        return;
      }
      toast.success("Email sent successfully")
      }
      }
      
      className="mt-10 flex flex-col gap-5 dark:text-black ">

         <input 
         type="email" 
         name="senderEmail"
         required
         maxLength={500}
         placeholder='Your email' 
         className='h-14 borderBlack rounded-xl py-3 shadow-sm px-4 dark:bg-white dark:bg-opacity-80
         dark:focus:bg-opacity-100 transation-all dark:outline-none'/>

         <textarea 
         placeholder='Your message' 
         name="message"
         required
         maxLength={5000}
         className='borderBlack rounded-xl h-[10rem] shadow-sm px-4 py-4 dark:bg-white dark:bg-opacity-80
         dark:focus:bg-opacity-100 transation-all dark:outline-none'/>

        <div>
         <SubmitBtn/>

        </div>
        

      </form>

    </motion.section>
  )
}

export default Contact