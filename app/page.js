import React from "react";
import {  Montserrat } from 'next/font/google'



const montserrat = Montserrat({ subsets: ['latin']})

const HomePage=()=>{

return(

<main className={`${montserrat.className} bg-white p-1 `}> 


<form className='mx-auto text-center max-w-md'>
      <div className="space-y-2 p-4 bg-white rounded-xl"></div>

      <div className="bg-sky-300 bg-opacity-25 p-6 rounded-lg text-center">
        <h1 className="text-4xl mb-4">¡Bienvenido a Mi Sitio Web!</h1>
        <p className="text-lg mb-8">Explora nuestras increíbles características y servicios.</p>
           </div>
    </form> 
</main>


)

}
export default HomePage;