import React from 'react'
import {useContext} from 'react'
const { profesor } = useContext(PersonasContext);

function Panel() {
  //3))--- USO EL CONTEXTO 
 
  return(
      <div>
          <h1>contexto creado nombre de profesor: <span className='text-red-600'>{contexto.nombre}</span></h1>
      </div>
  )
}

export default Panel