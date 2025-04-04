import React from 'react'
import './createCategories.css'
import { useState } from 'react'

function CreateCategories({text, setInput}) {
    const [input, setinput] = useState("")
    
    function handleClick() {
      if(input.trim() !== ""){
        text(input, false)
        setinput("")
      }
    }
    function handleClose(){
      setInput(false)
    }
  return (
    <div className='body'>
        <div className='create-categories-container'>
          <div className='title-contaner'>
            <h1 className='category-title'>Add Categories</h1>
            <button className='btn-x' onClick={handleClose}>X</button>
          </div>
            <input className='input' type='text' placeholder='Enter Category' value={input} onChange={(e) => setinput(e.target.value)}/>
            <button className='btn-add' onClick={handleClick}>Add</button>
        </div>
    </div>
  )
}
export default CreateCategories
