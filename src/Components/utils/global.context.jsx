import { createContext, useMemo, useReducer } from "react";

export const initialState = { isDarkMode: "", data: [] };

export const ContextGlobal = createContext(initialState);




const contextReducer = (state, action) => {
  const casesObject = {
    "TOGGLE_THEME": {...state, theme: state.theme === "light" ? "dark" : "light"},
    "UPDATE_FAVORITES": {...state, data: action.payload}
  }
  return casesObject[action.type] ? casesObject[action.type] : state
}


const initContextReducer = () => ({
  theme: "light",
  data: localStorage.getItem("favoritesDentists") ? JSON.parse(localStorage.getItem("favoritesDentists")) : []
})



export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [currentContext, dispatchContextUpdate] = useReducer(contextReducer, initialState, initContextReducer)

  const contextMemo = useMemo(()=>{
    localStorage.setItem('favoritesDentists', JSON.stringify(currentContext.data))
    return {currentContext, dispatchContextUpdate}
  }, [currentContext])

  return (
    <ContextGlobal.Provider value={contextMemo}>
      {children}
    </ContextGlobal.Provider>
  );
};