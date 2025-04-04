import React from 'react'
import'./categories.css'
import { useState } from 'react'
import CreateCategories from '../createCategories/CreateCategories'

function Categories({categories, setCategories}) {
  const [showCreateCategories, setShowCreateCategories] = useState(false)
  function handleClick() {
    setShowCreateCategories(true)
  }
  function getData(text, prop){
    if(text !== ""){
      setCategories([...categories, text])
      setShowCreateCategories(prop)
    }
  }
  function closeInput(prop){
    setShowCreateCategories(prop)
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
      {showCreateCategories ? <CreateCategories text={getData} setInput={closeInput} /> : null}  
    </div>
  )
}

export default Categories
