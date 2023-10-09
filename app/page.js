import React from "react";
import {  Montserrat } from 'next/font/google'
import Image from "next/image";



const montserrat = Montserrat({ subsets: ['latin']})

const HomePage=()=>{

return(

<main className={`${montserrat.className} bg-white p-1 `}> 


<form className='mx-auto text-center max-w-md'>
      <div className="space-y-2 mt-7 bg-white rounded-xl"></div>

      <div className="bg-sky-300 bg-opacity-25 p-3 rounded-lg text-center">
        <h1 className="text-4xl mb-4">¡Bienvenido a Dentall!</h1>
        <p className="text-lg mt-4">Expertos en salud dental, apasionados por tu sonrisa.</p>
           </div>
    </form> 

    <div className="flex items-center justify-center mt-5 ">
 
  <Image src={'/z.svg'} width={90} height={90} alt='logo' style={{ width: 220, height: 220 }} />
  
</div>

</main>


)

}
export default HomePage;