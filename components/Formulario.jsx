import React from 'react';

const Formulario = () => {
  return (
    <form className='mx-auto text-center max-w-lg'>
      <div className="mt-3 p-3  bg-gradient-to-r from-teal-200 to-cyan-700   rounded-xl font-mono">

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
          <textarea className='p-1 resize-none rounded-md'></textarea>
        </div>

        <div>
          <button className='bg-cyan-900 p-2 mt-2 text-white rounded-md w-40  hover:bg-black '>
            Agendar
          </button>
        </div>

      </div>
    </form>
  );
}

export default Formulario;
