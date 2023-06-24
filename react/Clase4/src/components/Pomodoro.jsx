import React from 'react'
import "./styles.css"
import { useState } from 'react';
import { useEffect } from 'react';
// Vamos a crar un timer, es decir, un cronometro.
/*
    - El titulo va a cambiar dependiendo del estado
    - El cronometo va a cambiar los estados
    - Los botones manejan estados
*/

// Funcion que agrega 0 al string mediante padStar
const padTime = (time) => {
    // El Metodo padStar rellena una cadena
    // Recibe un largo de caracteres y el caracter a rellevar
    // va a ser un string de 2 elementos y si no hay un numero lo rellea con un 0
    return time.toString().padStart(2,'0');
}


function Pomodoro() {
    const [title, setTitle] = useState("Comenzamos");
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    
    const minutes = padTime(Math.floor(timeLeft / 60));
    const seconds= padTime(Math.floor(timeLeft - minutes * 60));

    const startTime = () => {
        setTitle("¡Start!");
        setIsRunning(true)
    }

    const stopTimer = () => {
        setTitle("¡STOP!");
        return setIsRunning(false)
    }
    useEffect(() => {
        let interval;
        if (isRunning){
            interval = setInterval(() => {

            console.log("Runnings");
            // useState acepta un callback como parameto
            // Ejecutamos el callback para obtener el dato anterior al cambio de estado
             setTimeLeft((timeLeft) =>{
                return timeLeft - 1
             })
            },1000);
        }
        return ()  => {
            clearInterval(interval)
        }
    },[isRunning])
  return (
    <>
        <h1 className='title'>{title}</h1>
        <div>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span> 
        </div>
        <div className='buttons__container'>
           { !isRunning && <button className='button' onClick={startTime }>Start</button>}
            { isRunning && <button className='button' onClick={stopTimer}>Stop</button>}
            <button className='button' onClick={() => {}}>Resets</button>
        </div>
    </>
  ) 
}

export default Pomodoro;