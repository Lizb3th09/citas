import Formulario from '@/components/Formulario';
import React from 'react';
import Image from 'next/image';

export const Page = () => {
  return (
    <div className='mx-auto text-center'>
    
 
    <div className="flex items-center justify-center mt-6 font-bold  text-2xl font-serif">
  <Image src={'/s.svg'} width={60} height={60} alt='logo' style={{ width: 30, height: 30 }} /> AGENDAR CITA
 
</div>


    <Formulario />
  </div>
  
  );
};

export default Page;

