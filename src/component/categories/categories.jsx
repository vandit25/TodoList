import React from 'react'
import'./categories.css'
import { useState } from 'react'
import CreateCategories from '../createCategories/CreateCategories'
import { useSelector, useDispatch } from 'react-redux'
import { addCategory } from './categoriesReducer'

function Categories({setClickedCategory}) {
  const [showCreateCategories, setShowCreateCategories] = useState(false)
  const [color, setColor] = useState("")
  const [activeCategory, setActiveCategory] = useState(null)
  
  const categories = useSelector(state => state.categories.categories)
  const dispatch = useDispatch()
  
  function handleClick() {
    setShowCreateCategories(true)
  }

  function getData(text){
    dispatch(addCategory({name:text, color}))
    setShowCreateCategories(false)
  }
  function handleClickedCategory(index){
    setActiveCategory(index)
  }
  return (
    <div className='categories'>
      <h4 className='category-head' onClick={() => {setClickedCategory(""); handleClickedCategory(null)}} style={{backgroundColor: activeCategory === null ? "red" : "white"}}>All Tasks</h4>
      <div className='list-contaner'>
        <ul className='category-lists'>
          {categories.map((category, index) => (<li onClick={() => {setClickedCategory(categories[index]); handleClickedCategory(index)}} className='category' key={index} style={{backgroundColor: activeCategory === index && activeCategory !== null ? "lightblue"  : "#6447ee"}}>{category}</li>))}
        </ul>
      </div>
      <button className='add-category' onClick={handleClick}>+ New category</button>
      {showCreateCategories ? <CreateCategories text={getData} closeCreateCategory={setShowCreateCategories} changeColor={setColor} /> : null}  
    </div>
  )
} 

export default Categories