import React from 'react'

  function Personaje({ personajes }) {
    return (
      <div className='text-center p-5 border-b border-gray-300 shadow-md'>
        <div>
          <h3>{personajes.name}</h3>
          <img className='w-full h-auto rounded-full' src={personajes.image} alt={personajes.name} />
        </div>
        <div className='mt-4'>
          <p>{personajes.origin.name}</p>
        </div>
      </div>
    );
  }

export default Personaje