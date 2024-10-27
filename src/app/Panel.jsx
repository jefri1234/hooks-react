"use client"
import React, { useContext } from 'react';
import { PersonasContext } from '../app/hooks/useContext'; 

function Panel() {
  //3))--- USO EL CONTEXTO 
  const persona = useContext(PersonasContext); // Obtén los datos del contexto
  return(
    <div>
    <h1>soy panel</h1>
    <p>Nombre: {persona.nombre}</p>
    <p>Edad: {persona.edad}</p>
  </div>
  )
}

export default Panel