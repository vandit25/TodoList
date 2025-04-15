
import Categories from './component/categories/categories.jsx'
import Todo from './component/main/Todo.jsx'
import './App.css'
import { useState } from 'react'

function App() {
  return (
    <>
      <div className='main-container'>
        <Categories />
        <Todo/>
      </div>
    </>
  );
}

export default App
