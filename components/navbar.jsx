import Link from "next/link";
import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const NavBar = () => {
  return (
  
  <nav className="bg-slate-900 p-4  lg:w-[15%] text-center  text-white">   

<div className=" text-right hover:text-teal-500 "><MenuIcon fontSize="large" />
</div>

<ul className="text-white space-y-4 md:space-y-9 mt-11 rounded-md p-2">

<div>
<li className="flex font-bold  text-lg md:text-1xl hover:text-teal-500 ">
  <Link href={'/citas'}><ArrowForwardIosIcon/>Cita</Link> 
</li>
<li className="flex font-bold  text-lg md:text-1xl hover:text-teal-500 ">
  <Link href={'/acercaDe'}><ArrowForwardIosIcon/>Help</Link>  
</li>

<div><li className="font-bold text-2xl md:text-2xl  flex  hover:text-teal-500  mt-6">
  <Link href={'/'}>Home</Link>
  <HomeIcon fontSize="large"/>
</li></div>

</div>

</ul>

</nav>

  );
};

export default NavBar;


