"use client"
import React, { useState, useEffect } from 'react'

function UseEffect() {

  const [numero, setNumero] = useState(0)
  const [estado, setEstado] = useState(false)

  useEffect(function () {
    setNumero(numero + 1)
    return ()=>{
      alert('Componente desmontado')
    }
  }, [estado])

  return (
    <>
      <button onClick={function () {
        setEstado(!estado)
      }}>cambiar estado</button>
      <div>valor:{numero}</div>

    </>
  )
}

export default UseEffect