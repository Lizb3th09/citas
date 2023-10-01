import React from 'react';

const Formulario = () => {
  return (
    <form className='mx-auto text-center max-w-md'>
      <div className="space-y-2 p-4 bg-red-100 rounded-xl">

        <div className='flex flex-col'>
          <label className='p-2'>Nombre: </label>
          <input className='p-2 rounded-md'></input>
        </div>

        <div className='flex flex-col'>
          <label className='p-2'>Edad: </label>
          <input className='p-2 rounded-md'></input>
        </div>

        <div className='flex flex-col'>
          <label className='p-2'>Correo: </label>
          <input className='p-2 rounded-md'></input>
        </div>

        <div className='flex flex-col'>
          <label className='p-2'>Sintomas: </label>
          <textarea className='p-2 resize-none rounded-md'></textarea>
        </div>

        <div>
          <button className='bg-[#fe0324b1] p-2 m-3 text-white rounded-md w-40 hover:bg-black hover:text-white'>
            Agendar
          </button>
        </div>

      </div>
    </form>
  );
}

export default Formulario;
