import React, { useEffect, useState } from "react";
import Personaje from "./Personaje";

function NavPag({Pagina, setPagina}) {
  return<header>
    <p className="p-5">Pagina: {Pagina}</p>
    <button className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold py-2 px-3 rounded" 
      onClick={() => setPagina (Pagina - 1)}>
    Pagina Anterior</button>

    <button className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold py-2 px-4 rounded" 
      onClick={() => setPagina (Pagina + 1)}>
    Siguiente Pagina</button>

  </header>
  
}

function ListaDePersonajes() {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [Pagina, setPagina] = useState(1)


  useEffect(() => {
    async function fetchDatos() {
      const respuesta = await fetch(`https://rickandmortyapi.com/api/character?page=${Pagina}`);
      const datos = await respuesta.json();
      setCargando(false);
      setPersonajes(datos.results);
    }
    fetchDatos();
  }, [Pagina]);



  return (
    <div className='container mx-auto px-4'>
              <NavPag Pagina= {Pagina} setPagina={setPagina}/>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {cargando ? (
          <h1 className='text-black'>Cargando</h1>
        ) : (
          personajes.map(personaje => (
            <div key={personaje.id} className='md:col-span-1 m-6'>
              <Personaje personajes={personaje} />
            </div>
          ))
        )}
      </div>
      
    </div>
  );  
}

export default ListaDePersonajes;
