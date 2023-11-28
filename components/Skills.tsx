'use client'
import React from 'react'
import HeadingSection from './HeadingSection'
import {skillsData} from'@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import {motion} from"framer-motion"

const fadeInAnimationVariants={
  initial:{
    opacity:0,
    y:100,
  },
  animate:(index:number)=>({
    opacity:1,
    y:0,
    transition:{
      delay:0.05 * index,
    }
  }),

};
const Skills = () => {
  const {ref}=useSectionInView("Skills")
  return (
    <section id="Skills" ref={ref} className='max-w-[50rem] mb-28 scroll-mt-28 text-center sm:mb-40'>
        <HeadingSection title="My skills"/>
        <ul className='flex flex-wrap justify-center gap-1 text-base text-gray-900 '>
          {
            skillsData.map((skill,index)=>(
                <motion.li 
                key={index}
                className='bg-white  py-2 px-4 border border-black/5 capitalize rounded-xl dark:bg-white/10 dark:text-white/80'
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{once:true}}
                custom={index}
                > {skill}
                </motion.li>
            ))
          }
        </ul>
    </section>
  )
}

export default Skills