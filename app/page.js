import React from "react";
import {  Montserrat } from 'next/font/google'
const montserrat = Montserrat({ subsets: ['latin']})

const HomePage=()=>{

return(

<main className={`${montserrat.className} bg-red-200 w-full p-5  `}>
<h1 className="text-center  font-bold  text p-8  text-3xl">
Bien Venido 
</h1>

</main>


)

}
export default HomePage;