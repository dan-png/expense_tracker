import { createContext, useReducer } from "react";
import AppReducer from './AppReducer'


// Initial State
const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 30000 },
    { id: 3, text: 'Food', amount: -1000 },
    { id: 4, text: 'Book', amount: -2500 },
  ]
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>)
}