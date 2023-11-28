"use client"
import React from 'react'
import HeadingSection from './HeadingSection'
import {experiencesData} from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from '@/context/ThemeContext'

const Experience = () => {
  const {ref}=useSectionInView("Experience")
 const {theme}= useTheme()
  return (
    <section ref={ref}  className=' mb-28 scroll-mt-28 text-center sm:mb-40' id="experience">

      <HeadingSection title="My experience"/>

       <VerticalTimeline lineColor=''>
          {experiencesData.map((item,index)=>{
        
          return (<React.Fragment key={index}>
                    <VerticalTimelineElement  
                    visible={true} 
                    contentStyle={{
                      background: theme === 'light' ?"#f3f4f6":"rgba(255,255,255,0.05)",
                      boxShadow:"none",
                      border:"1px solid rgba(0,0,0,0.05 ",
                      textAlign:"left",
                      padding:"1.3rem 2rem",
                    }}
                    contentArrowStyle={{
                      borderRight:theme ==="light" 
                      ? "0.4rem solid #9CA3AF"
                      :"0.4 solid rgba(255,255,255,0.5)",
                    }}
                    date={item.date}
                    icon={item.icon}
                    iconStyle={{
                      background:theme ==="light" 
                      ? "white":"rgba(255,255,255,0.15)",
                      fontSize:"1.5rem"
                    }}
                    >
                        <h3 className='font-semibold capitalize'>{item.title} </h3>
                        <p className='font-normal !mt-0'> {item.location}</p>
                        <p className='!mt-0 font-normale text-gray-700 dark:text-white/75'>{item.description} </p>
                    </VerticalTimelineElement>
                </React.Fragment>)
          }
          
          )}
       </VerticalTimeline>
         
      

    </section>
  )
}

export default Experience