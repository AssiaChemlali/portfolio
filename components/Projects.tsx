"use client"
import React from 'react'
import HeadingSection from './HeadingSection'
import Project from './Project'
import {projectsData} from'@/lib/data'
import { useSectionInView } from '@/lib/hooks'

const Projects = () => {
  const {ref}=useSectionInView("Projects",0.5)

  return (
    <section ref={ref} id="projects" className='mb-28 max-w-[50rem] text-center scroll-mt-28'>
        <HeadingSection title="My Projects"/>
        <div className=''>
          {
          projectsData.map((project,index)=>(
            <React.Fragment  key={index}>
                <Project {...project}/>
            </React.Fragment>
              
          ))
          }
         
        </div>
    </section>
  )
}

export default Projects