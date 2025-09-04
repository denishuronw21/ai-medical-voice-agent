import React from 'react'
import { doctorAgent } from './DoctorAgentCard'
import Image from 'next/image'

type props = {
    doctorAgent : doctorAgent
}



function SuggestedDoctorCard({doctorAgent}:props) {
   
  return (
    <div className='flex flex-col items-center justify-between border rounded-2xl shadow'>
      <Image
      src={doctorAgent.image}
      alt={doctorAgent.specialist}
      width={70}
      height={70} 
      className='w-[50px] h-[50px] rounded-4xl object-cover'
      />
      <h2 className='font-bold'>{doctorAgent.specialist}</h2>
      <p className='text-xs'>{doctorAgent.description}</p>
    </div>
  )
}

export default SuggestedDoctorCard
