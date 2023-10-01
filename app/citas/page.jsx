import Formulario from '@/components/Formulario';
import React from 'react'


export const page = () => {
  return (
  
    <div className=' w-[85%] justify-center m-6 '>
     <h1 className='font-bold  p-5 text-3xl text-center'> AGENDAR CITA</h1>
     <Formulario/>  
     
    </div>
  )
}

export default page;