
import Categories from './component/categories/categories.jsx'
import Todo from './component/main/Todo.jsx'
import './App.css'
import { useState } from 'react';

function App() {
  const [categories, setCategories] = useState([])
  const [colorCategory, setColorCategory] = useState({});
  return (
    <>
      <Categories categories={categories} setCategories={setCategories} setColorCategory={setColorCategory}/>
      <Todo categories={categories} colorCategory={colorCategory}/>
    </>
  );
}

export default App
