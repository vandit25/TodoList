
import Categories from './component/categories/categories.jsx'
import Todo from './component/main/Todo.jsx'
import './App.css'
import { useState } from 'react'

function App() {
  const [clickedCategory, setClickedCategory] = useState("")
  return (
    <>
      <Categories setClickedCategory={setClickedCategory}/>
      <Todo clickedCategory={clickedCategory} />
    </>
  );
}

export default App
