import React, { useRef, useState,useEffect } from 'react'
//cuando necesites un valor de algun elemento de tu compoennte (Obtener contenido de un elemento)
//useRef es lo que tienees que usar 

function UseRef() {
    //crearla referencia para poder asociar a un elemento del DOM 
    const nameRef = useRef()
    const  lastNameRef= useRef()
    const focusRef=useRef()

    //crear los estados
    const [name, setName] = useState("there is no name")
    const [lastName, setLastName] = useState("there is no last name")

    function handleclick() {
        setName(nameRef.current.value)
        setLastName(lastNameRef.current.value)

    }

    const focusInput = () => {
        focusRef.current.focus();
      };

    //Hacer el foco en el input ni bien renderiza el componente
    useEffect(function(){
            nameRef.current.focus()
    },[])  
    
    return (
        <>
            <div className='bg-green-400 p-5 flex gap-5'>
                <input type="text" name='nombre' ref={nameRef} placeholder='write your name' required/>
                <input type="text" name='lastName' ref={lastNameRef} placeholder='write your lastName' required/>
                <button onClick={handleclick}>SEND</button>
            </div>
            <h1>{name}</h1>
            <h2>{lastName}</h2>

            <div className=' bg-orange-500 p-5 rounded-lg'>
                <input type="text" ref={focusRef}/>
                <button onClick={focusInput}>Focar Input</button>
            </div>
        </>
    )
}
export default UseRef 