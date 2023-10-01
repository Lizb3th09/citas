import Link from "next/link";
import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const NavBar = () => {
  return (
  
  <nav className="bg-rose-600 p-4  lg:w-[15%] text-center ">

<div className="mt-18 text-right bg-white hover:text-black">
  <MenuIcon fontSize="large" />
</div>

<ul className="text-white space-y-4 md:space-y-9 mt-16 rounded-md p-2">

<li className="flex font-bold  text-lg md:text-1xl hover:text-black hover:border-2 border-solid border-white  ">
  <Link href={'/citas'}><ArrowForwardIosIcon/>  Cita</Link> 
</li>
<li className="flex font-bold  text-lg md:text-1xl hover:text-black hover:border-2 border-solid border-white ">
  <Link href={'/acercaDe'}><ArrowForwardIosIcon/>  Help</Link>  
</li>

<li className="font-bold text-2xl md:text-3xl  flex  hover:text-black ">
  <Link href={'/'}>Home</Link>
  <HomeIcon fontSize="large"/>
</li>

</ul>


</nav>

  );
};

export default NavBar;
