"use client"
import React, { useState } from 'react'

export function UseState() {
    const [valor, setValor] = useState(0)

     function Contenedor(){
        return <div className='text-green-700'>logro llegar a 10</div>
    }

    return (
        <>
            <div>VALOR:<span className='text-red-600'>{valor}</span></div>
            <button onClick={function () {
                setValor(valor + 1)
            }}
                className='bg-blue-600 text-white p-3 rounded-lg'
            >Incrementar</button>

            <button onClick={function () {
                if (valor <= 0) {
                    setValor(0)
                }
                else {
                    setValor(valor - 1)
                }

            }}
                className='bg-blue-600 text-white p-3 rounded-lg ml-2'
            >Desminuir</button>


            <button onClick={function () {
                setValor(0)
            }}
                className='bg-blue-600 text-white p-3 rounded-lg ml-2'
            >Resetear</button>
            
            

        </>
    )

    

   
}

