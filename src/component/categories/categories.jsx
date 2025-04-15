import React from 'react'
import'./categories.css'
import CreateCategories from '../createCategories/CreateCategories'
import { useContext, useState } from 'react'
import { CategoriesContext } from '../../context/CategoriesContext'

function Categories() {
  const [showCreateCategories, setShowCreateCategories] = useState(false)
  const [color, setColor] = useState("")
  const [activeCategory, setActiveCategory] = useState(null)

  const { categories, addCategory, setClickedCategory} = useContext(CategoriesContext)
  function handleClick() {
    setShowCreateCategories(true)
  }

  function getData(text){
    addCategory(text, color)
    setShowCreateCategories(false)
  }

  function handleClickedCategory(index){
    setActiveCategory(index)
    setClickedCategory(categories[index])
  }
  return(
    <div className='categories'>
      <h4 className='category-head' onClick={() => {setClickedCategory(""); handleClickedCategory(null)}} style={{backgroundColor: activeCategory === null ? "#98ff98" : "#ffff98"}}>All Tasks</h4>
      <div className='list-contaner'>
        <ul className='category-lists'>
          {categories.map((category, index) => (<li onClick={() => {setClickedCategory(categories[index]); handleClickedCategory(index)}} title={category} className='category' key={index} style={{backgroundColor: activeCategory === index && activeCategory !== null ? "lightblue"  : "#6447ee"}}>{category}</li>))}
        </ul>
      </div>
      <button className='add-category' onClick={handleClick}>+ New category</button>
      {showCreateCategories ? <CreateCategories text={getData} closeCreateCategory={setShowCreateCategories} changeColor={setColor} /> : null}  
    </div>
  )
}

export default Categories