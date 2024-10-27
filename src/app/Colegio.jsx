"use client"
import React, { useContext } from 'react';
import { PersonasContext } from '../app/hooks/useContext';

function Colegio() {

    const persona = useContext(PersonasContext); // Obtén los datos del contexto
    return (
        <>
            <div className='text-green-700 text-2xl'>COLEGIO NACIONAL datos profesor </div>
            <div className='text-red-700 text-2xl'>{persona.nombre}</div>
            <div className='text-blue-700 text-2xl'>{persona.edad}</div>
        </>
    )
}

export default Colegio