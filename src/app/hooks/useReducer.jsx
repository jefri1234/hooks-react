import React from 'react'
import { useReducer } from 'react';

//declaro mi estado 
const stadoInicial={count:0}
//const initialState = {user: null}

//defino mi funcion reducer
function Max(jhimay,jade){
    switch(jade.jeff){
        case 0:
            return {count:jhimay.count+1};
        case 'decrement':
            return {count:jhimay.count-1};
        case 'reset':
            return {count:jhimay.count=0};   
        default:
            throw new Error();
    }
}

function UseReducer() {
    const [jhimay, zaydil] = useReducer(Max, stadoInicial);
    return (
        <div>
            Count:{jhimay.count}
            <button className='bg-green-600 p-2 rounded-md' onClick={()=>{zaydil({jeff:0})}}>SUMAR</button>
            <button className='bg-blue-600 p-2 rounded-md'  onClick={()=>{zaydil({jeff:'reset'})}}>Resetear</button>
            <button className='bg-blue-600 p-2 rounded-md'  onClick={()=>{zaydil({jeff:'decrement'})}}>RESTAR</button>
        </div>
    )
}
export default UseReducer
