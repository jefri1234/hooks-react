"use client"
import React from 'react'
import { useContext, createContext } from 'react';

//creando un contexto y pasando un json 
//usando el contexto y usando el json enviado x el contexto

// por conexto pasar objetos,areglos,funciones,valores complejos(JSON) ,ETC


//2))----CREAR EL CONTEXTO--------------------------------------------------
const PersonaContext = createContext();
//const PersonasContext= React.createContext(personas.profesor)
//------------------------------------------------------------------------------
function DisplayUser() {
    const user = useContext(PersonaContext);
    return <>
        <p>Nombre del usuario: {user.profesor.nombre}</p>
        <p>Nombre del usuario: {user.profesor.apellido}</p>
        <p>Nombre del usuario: {user.profesor.edad}</p>
        <div>
            <p className='text-white'>nombre del estudiante:{user.estudiante.nombre}</p>
        </div>
    </>
}

//vamos a proveer el contexto a la aplicacion  
function UseContext() {
    //1))----DATOS CREADOS-------------------------------------------------------
    const personas = {
        profesor: {
            nombre: 'Juan',
            apellido: "obregon",
            edad: 30
        },
        estudiante: {
            nombre: 'Pedro',
            edad: 20
        }
    };

    return (
        <PersonaContext.Provider value={personas}>
            <DisplayUser />
        </PersonaContext.Provider>
    );
}
export default UseContext




