"use client"
import React from 'react'
import Dashboard from '../Dashboard'
//1))----DATOS CREADOS
const personas = {
    profesor: {
        nombre: 'Juan',
        edad: 30
    },
    estudiante: {
        nombre: 'Pedro',
        edad: 20
    }
};

//2))----CREAR EL CONTEXTO
export const PersonasContext= React.createContext(personas.profesor)

function UseContext() {
    return (
        <PersonasContext.Provider value={personas.profesor}>
            <Dashboard/>
        </PersonasContext.Provider>
    );
}
export default UseContext




