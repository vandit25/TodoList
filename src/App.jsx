
import Categories from './component/categories/categories.jsx'
import Todo from './component/main/Todo.jsx'
import './App.css'
import { useState } from 'react'

function App() {
  const [clickedCategory, setClickedCategory] = useState("")
  return (
    <>
      <div className='main-container'>
        <Categories setClickedCategory={setClickedCategory}/>
        <Todo clickedCategory={clickedCategory} />
      </div>
    </>
  );
}

export default App
