"use client"
import React from 'react'
import Image from 'next/image'
import { projectsData } from '@/lib/data'
import { useRef } from 'react'
import { useScroll,motion, useTransform } from 'framer-motion'

type ProjectProps=(typeof projectsData)[number]

const Project = ({title,description,tags, imageUrl}:ProjectProps) => {
  const ref=useRef<HTMLDivElement>(null);
  const {scrollYProgress}=useScroll({
    target:ref,
    offset:["0 1","1.33 1"]
  });

  const scaleProgess=useTransform(scrollYProgress,[0,1],[0.8,1])
  const opacityProgess=useTransform(scrollYProgress,[0,1],[0.5,1])

  return (
    <motion.div 
      ref={ref}
      style={{scale:scaleProgess,opacity:opacityProgess}}
      className='mb-3 sm:mb-8 last:mb-0 group'
    >
        <article className='bg-gray-100 flex items-center border border-black/5  rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem]  group-even:pl-8 hover:bg-gray-200 dark:bg-white/20 dark:hover:bg-white/20 dark:text-white'>

            <div className='text-left px-5 pt-4 pb-7 sm:max-w-[50%] flex flex-col h-full sm:pl-10 sm:pr-2 sm:group-even:ml-[18rem]'>
              <h3 className='font-semibold mb-5 text-2xl'>{title}</h3>
              <p className='leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
              <ul className='flex flex-wrap gap-2 sm:mt-auto '>
                {
                  tags.map((tag,index)=>(
                    <li key={index} 
                    className='bg-black/[0.7] py-1 px-3 text-white rounded-full text-[0.7rem] uppercase tracking-wider dark:text-white/70'>{tag}</li>
                  ))
                }
              </ul>
            </div>
            <Image
                src={imageUrl}
                alt={title}
                quality={95}
                className='hidden sm:block absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl  transition
                group-hover:scale-[1.04]
                group-hover:-translate-x-3
                group-hover:translate-y-3 
                group-hover:-rotate-2

                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3 
                group-even:group-hover:rotate-2

                group-even:right-[initial] 
                group-even:-left-40'
            />
        </article>
    </motion.div>
  )
}

export default Project