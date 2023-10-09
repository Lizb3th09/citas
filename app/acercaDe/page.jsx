
import React from 'react';
import Image from 'next/image';

export const Page3 = () => {
  return (
    <div className='w-full '> 
    
      <form className='mx-auto max-w-2xl  '>
        
     
      <h1 className=" text-center font-bold text-2xl mt-7"> ESPECIALISTA</h1>

        <div className="space-y-2 p-1 bg-rose-400 rounded-xl mt-4"></div>

        <div className="space-y-2 p-4 bg-rose-50 rounded-xl mt-4 flex flex-col ">

          <div className='sm:w-1/2'>
            <label className='font-bold'>Nombre: </label>
            <label>Rosa Lizbeth Barcenas</label>
          </div>

          <div className='sm:w-1/2'>
            <label className='font-bold'>Semestre: </label>
            <label>4SA</label>
          </div>

          <div className='sm:w-1/2'>
            <label className='font-bold'>Carrera: </label>
            <label>Ing. Sistemas Computacionales</label>
          </div>

          <div className='sm:w-1/2'>
            <label className='font-bold'>Materia: </label>
            <label>Topicos Avanzados</label>
          </div>

          <div className='sm:w-1/2'>
            <label className='font-bold'>No. control: </label>
            <label>C21930200</label>
          </div>
        </div>

 
        <div className="flex items-center justify-center mt-5 ">
  <Image src={'/pie-diente.svg'} width={60} height={60} alt='logo' style={{ width: 60, height: 60 }} />
  <Image src={'/pie-diente.svg'} width={80} height={80} alt='logo' style={{ width: 80, height: 80 }} />
  <Image src={'/pie-diente.svg'} width={60} height={60} alt='logo' style={{ width: 60, height: 60 }} />
  
</div>


      </form>
    </div>
  );
};

export default Page3;
