import { createContext, useState } from "react";

export const CategoriesContext = createContext(null);

export const CategoriesProvider = ({ children }) => {
const [ categories, setCategories] = useState([])   
const [ colorCategory, setColorCategory] = useState({})
const [ clickedCategory, setClickedCategory] = useState("")

const addCategory = (name, color) => {
    if (name.trim() !== "" && !categories.includes(name.trim())) {
      setCategories([...categories, name]);
      setColorCategory({ ...colorCategory, [name]: color });
    } else {
      alert("Given Category is already added");
    }
  };
  return (
   <CategoriesContext.Provider
      value={{
        categories,
        colorCategory,
        clickedCategory,
        setClickedCategory,
        addCategory,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};