import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-cyan-700 p-1 sm:p-2 md:p-4 lg:p-6 xl:p-8 flex justify-center items-center h-20">
      <div className='flex items-center'>

        <Image src={'/diente.svg'} width={60} height={60} alt='logo' style={{ width: 60, height: 60 }} />

        <h1 className="text-2xl sm:text-3xl md:text-4xl  font-bold ml-2 sm:ml-4 md:ml-4">Dentall</h1>
        <div className="ml-4 sm:ml-4 flex">
          
          <p className='text-white font-bold hover:text-teal-300 ms-3'>PERSONAL</p>
          <p className='text-white font-bold hover:text-teal-300 ms-3'>SERVICIOS</p>
          <p className='text-white font-bold hover:text-teal-300 ms-3'>FOTOS</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
