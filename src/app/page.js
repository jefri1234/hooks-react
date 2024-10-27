"use client"
import React, { Profiler } from 'react'
import { UseState } from './hooks/useState'
import UseEffect from './hooks/useEffect'
import UseContext from './hooks/useContext'
import Colegio from './Colegio'

function Home() {
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
      <div>Home</div>
      <Profiler id='usecontext' onRender={onRenderCallback}>
        <UseState/>
        <UseContext />
      </Profiler>
      <hr></hr>
      <Colegio />

    </>
  )
}

export default Home