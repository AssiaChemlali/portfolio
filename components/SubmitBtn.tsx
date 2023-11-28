"use client";
import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'


// import { experimental_useFormStatus as useFormStatus } from "react-dom";


const SubmitBtn = () => {
  // const {pending}=useFormStatus();

  return (
    <button type="submit" 
      className='group bg-gray-900 text-white rounded-full outline-none transition-all flex items-center py-2 px-4 gap-2 capitalize focus:scale-110 
      hover:scale-110 
      hover:bg-gray-950
      active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10'
      disabled={true}
      >
    { /*{pending ? (
      <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'>

      </div>
    ):() */}
      <>
       Submit {" "}
    <FaPaperPlane 
    className='text-xs opacity-70 transition-all
    group-hover:translate-x-1
    group-hover:-translate-y-1'/>

      </>
    
  
  
   
  </button>
  )
}

export default SubmitBtn