import React, { useRef } from 'react'

export const FocusScreen = () => {
  const inputRef = useRef()
  
  const handleClick = () => {
    inputRef.current.select()
    // console.log(inputRef);
  }

  return (
    <div>
      <h1>FocusScreen</h1>
      <br />
      <input 
        ref={inputRef}
        type="text" 
        className="form-control"
        placeholder="Nombre"
      />
      <button 
        className="btn btn-primary mt-5"
        onClick={handleClick}
      >
          Focus
      </button>
      <hr />
    </div>
  )
}
