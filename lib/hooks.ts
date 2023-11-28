import { useActiveSectionContext } from "@/context/ActiveSectionContext"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import type { SectionName } from "./types"


export function useSectionInView(SectionName:SectionName,threshold=0.75){
  const {ref,inView}=useInView({
    threshold,
  })
  const {setActiveSection,timeOfLastClick}=useActiveSectionContext()

  useEffect(()=>{
    if(inView && Date.now() - timeOfLastClick > 1000){
      setActiveSection(SectionName)
    }
  },[inView,setActiveSection,timeOfLastClick])

  return {ref}
}