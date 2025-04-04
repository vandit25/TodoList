
import Categories from './component/categories/categories.jsx'
import Todo from './component/main/Todo.jsx'
import './App.css'
import { useState } from 'react';

function App() {
  const [categories, setCategories] = useState([])
  
  return (
    <>
      <Categories categories={categories} setCategories={setCategories}/>
      <Todo categories={categories}/>
    </>
  );
}

export default App
