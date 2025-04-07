import React from 'react'
import'./categories.css'
import { useState } from 'react'
import CreateCategories from '../createCategories/CreateCategories'

function Categories({categories, setCategories, setColorCategory}) {
  const [showCreateCategories, setShowCreateCategories] = useState(false)
  const [color, setColor] = useState("");
  
  function handleClick() {
    setShowCreateCategories(true)
    
  }
  function getData(text){
    if(text !== "" && !categories.includes(text)){
      setCategories([...categories, text])
      setColorCategory(prev => ({...prev, [text]: color}))
      setShowCreateCategories(false)
    }
  }
  return (
    <div className='categories'>
      <h4 className='category-head'>All Tasks</h4>
      <div className='list-contaner'>
        <ul className='category-lists'>
          {categories.map((category, index) => {
            return <li className='category' key={index}>{category}</li>
          })}
        </ul>
      </div>
      <button className='add-category' onClick={handleClick}>+ New category</button>
      {showCreateCategories ? <CreateCategories text={getData} closeCreateCategory={setShowCreateCategories} changeColor={setColor} /> : null}  
    </div>
  )
} 

export default Categories
