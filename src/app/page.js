"use client"
import React, { Profiler } from 'react'
import UseContext from './hooks/useContext'

function Home() {
  //uso del componente Profiler para medir el performance en REACT
  const onRenderCallback = (
    id, // El id del Profiler que se está midiendo
    phase, // "mount" o "update"
    actualDuration, // Tiempo que tomó renderizar el componente
    baseDuration, // Tiempo base estimado para renderizar
    startTime, // Momento en que comenzó la renderización
    commitTime, // Momento en que se completó el commit
    interactions // Interacciones que causaron la renderización
  ) => {
    console.log({ id, phase, actualDuration, baseDuration, startTime, commitTime, interactions });
  };



  return (
    <>
      <Profiler id='usecontext' onRender={onRenderCallback}>
        <UseContext />
      </Profiler>
    </>
  )
}

export default Home