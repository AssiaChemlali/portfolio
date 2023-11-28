"use client"
import React from 'react'
import {motion}from 'framer-motion'
const DividerSection = () => {
  return (
    <motion.div className='w-1 h-24 bg-gray-200 rounded-full my-24 hidden sm:block dark:bg-opacity-20 '
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.125}}
    
    ></motion.div>
  )
}

export default DividerSection