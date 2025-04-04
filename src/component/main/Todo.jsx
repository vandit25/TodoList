import React from 'react'
import { useState } from 'react'
import './todo.css'
function Todo({categories}) { 
    const [input, setInput] = useState("");
    const [list, setList] = useState([])
    const [isClicked, setIsClicked] = useState([])
    const [category, setCategory] = useState("")
    function addList(){
      if(input.trim() !== ""){
        setList([...list, { task: input, categories: category }])
        setIsClicked([...isClicked, false])
        setInput("")
      }
    }
    function togaleCheck(index){
      const check = [...isClicked]
      check[index] = !check[index]
      setIsClicked(check)
    }
    function dropdown(e){
      e.preventDefault()
      if(category.trim() !== ""){
        addList()
      }
    }
    function handleCheck(clicked, list){
      return clicked ? (<del style={{color: "red"}}>{list}</del>) : list
    }
  return (
    <div className='todo-contener'>
      <h1>All Tasks</h1>
      <div className='input-contaner'>
        <input className='input-todo' type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Add a new task'/><br></br>
        <select className='drop-down' id="dropdown" onClick={(e) =>  setCategory(e.target.value)} placeholder="Select"  >
          <option value="" disabled selected hidden>Select</option>
          {categories.map((category, index) => {return(<option className='category-list' value={category} key={index} >{category}</option>)})} 
        </select>
        <button className='enter-btn' onClick={dropdown}>Enter</button>
      </div>
      <div className='list-conaner'>
        {list.map((item, index) =>(<div key={index} className='list'><input className='check' type='checkbox' checked={isClicked[index]} onChange={() => togaleCheck(index)}/>
            {handleCheck(isClicked[index], item.task)}
            <p className='type'>{item.categories}</p>
        </div>))}
      </div>
    </div>
  )
}

export default Todo