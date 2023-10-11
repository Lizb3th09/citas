'use client'

import Link from "next/link";
import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';
import { Popover } from '@headlessui/react';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  return (
  
  <nav className="bg-slate-900 w-full">   
 

 <header>

 <Popover className='hidden sm:flex  justify-center p-4 bg-cyan-700 items-center h-16'>
  <div className="flex items-center">
    <Image src={'/h.svg'} width={60} height={60} alt='logo' style={{ width: 60, height: 60 }} />
    <h1 className="font-bold text-3xl text-center text-white p-4">Dentall</h1>
  </div>

  <div className="flex space-x-4 mt-2">
    <Link href={'/citas'}><p className="text-white">Cita</p></Link>
    <Link href={'/acercaDe'}><p className="text-white">Acerca:</p></Link>
    <Link href={'/'}><p className="text-white">Home</p></Link>
  </div>
</Popover>



        {/*Responsive Menu*/}

        <Popover className="sm:hidden text-white p-5">
        <Popover.Button>
        <MenuIcon/>
        </Popover.Button>
  
      
        <Popover.Panel className="bg-slate-400 absolute h-1/2 w-2/5 ">
            <div className='flex flex-col ml-4 gap-2 text-white h-full mt-9'>
                
                <Link href={'/citas'}><ArrowForwardIosIcon/>Cita</Link>

                <Link href={'/acercaDe'}><ArrowForwardIosIcon/>Acerca</Link>
                <Link  className=' font-bold text-3xl' href={'/'}>Home<HomeIcon fontSize="large" /></Link>
            </div>
        </Popover.Panel>
        </Popover>


     </header>

</nav>

  );
};

export default NavBar;

