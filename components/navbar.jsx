'use client'
import React, { useState } from "react";
import { Popover } from '@headlessui/react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; 
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from "next/link";
import Image from 'next/image';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-slate-900 w-full">
      <header>

      <Popover className='hidden md:flex  justify-center p-7 lg:bg-cyan-700 items-center h-16 bg-black'>
  <div className="flex items-center">
    <Image src={'/h.svg'} width={60} height={60} alt='logo' style={{ width: 60, height: 60 }} />
    <h1 className="font-bold text-3xl text-center text-white p-4 ">Dentall</h1>
  </div>


  <div className="hidden sm:flex space-x-9 justify-between m-6 p-4 font-serif">
    <Link href="/citas"> <p className="text-white bg-sky-900 rounded-md w-20 text-center h-7 hover:bg-white hover:text-black ">Cita </p></Link>
    <Link href="/acercaDe"><p className="text-white bg-sky-900 rounded-md w-20 text-center h-7 hover:bg-white hover:text-black "> Acerca</p> </Link>
    <Link href="/"><p className="text-white bg-sky-900 rounded-md w-20 text-center h-7 hover:bg-white hover:text-black  "> Home</p></Link>
  </div>
</Popover>



        {/* Responsive Menu */}
        <Popover className="md:hidden text-white ms-9 flex">

    
        <div className="flex items-center ms-9">
    <Image src={'/h.svg'} width={50} height={50} alt='logo' style={{ width: 50, height: 50 }} />
    <h1 className="font-bold text-2xl text-center text-white p-4 ">Dentall</h1>
  </div>


          <Popover.Button className="p-4">
            <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </Popover.Button>




          <Popover.Panel className={`bg-cyan-800 absolute h-1/2 w-2/6 rounded-md font-serif ${isMenuOpen ? "block" : "hidden"}`}>


          <div className="text-white justify-content flex-end  p-3">  
            <button onClick={closeMenu}>
              <CloseIcon className=" hover:text-black "/> 
            </button>
          </div>


            <div className='flex flex-col gap-2 text-white h-full mt-4'>
            <Link href={'/citas'} className="inline-flex w-full justify-center rounded-md  py-2  font-medium hover:bg-sky-950 bg-opacity-25 text-1xl "><ArrowForwardIosIcon fontSize="small"/> Agendar</Link>
            <Link href={'/acercaDe'} className="inline-flex w-full justify-center rounded-md  py-2 text-1xl font-medium  hover:bg-sky-950 bg-opacity-25"><ArrowForwardIosIcon fontSize="small"/> Acerca de</Link>
            <Link  className=' font-bold text-3xl inline-flex w-full justify-center rounded-md py-2  hover:bg-sky-950  bg-opacity-25' href={'/'}>Home<HomeIcon fontSize="large" /></Link>
            </div>


          </Popover.Panel>
        </Popover>
      </header>
    </nav>
  );
};

export default NavBar;
