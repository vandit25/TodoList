import React from 'react'
import './createCategories.css'
import { useState } from 'react'

function CreateCategories({text, closeCreateCategory, changeColor}) {
    const [input, setinput] = useState("")
    
    function handleClick() {
      if(input.trim() !== ""){
        text(input)
        changeColor("#" + Math.floor(Math.random() * 0xFFFF).toString(16))
        console.log(changeColor);
        setinput("")
      }else{
        setinput("")
      }
    }
    function handleClose(){
      closeCreateCategory(false)
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
