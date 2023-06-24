import { useState } from "react"
import "./counter.css"


const Counter = () => { 
  const initialState = 0;
  const [count, setCount] = useState(initialState);
  const [error, setError] = useState(null)

  const handlerAdd = () => {
    if(count >= 0) {
      setError(null)
    };
    return setCount(count + 1);
  }
  const handlerSubstract = () => {
    if(count <= 0){
      setError('Debe ser mayor a 0');
    }
    return setCount(count - 1);
  }
  const handlerReset = () => {
    return setCount(initialState)
  }
  const handlerQuitError = () => {
    return setError(null)
  }
  return (
    <>
    <div className="counter__container">
      <button className="counter__btn" onClick={handlerSubstract}> - </button>
      <span>{count}</span>
      <button className="counter__btn" onClick={handlerAdd}> + </button>
      <button className="counter__btn btn__reset-counter" onClick={handlerReset}>Reset</button>
    </div>
    {
      error && (
        <div>
          <center>
            <button onClick={handlerQuitError}>Quitar error</button>
            <p>{error}</p>
          </center>
        </div>
      )
    }
    </>
  )
}

export default Counter