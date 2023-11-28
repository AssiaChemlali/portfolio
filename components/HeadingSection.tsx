import React from 'react'
type HeadingProps={
  title:string,
}
const HeadingSection = ({title}:HeadingProps) => {
  return (
    <h2 className='text-3xl font-medium mb-8 capitalize'>{title} </h2>
  )
}

export default HeadingSection