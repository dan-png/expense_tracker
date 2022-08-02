import { createContext, useCallback, useEffect, useReducer, useState } from "react";
import { AppReducer } from './AppReducer'
import { addDoc, collection, deleteDoc, doc, Timestamp, onSnapshot } from "firebase/firestore"
import { db } from '../firebase/config'








// Initial State
const initialState = {
  transactions: [],
  loading: true

}

// Create context
export const GlobalContext = createContext()

// Provider component
export const GlobalProvider = ({ children }) => {


  const [state, dispatch] = useReducer(AppReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)







  // Collection Ref
  const ref = collection(db, 'transactions')

  // When dispatch is not cancelled
  const dispatchIfNotCancelled = useCallback((action) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }, [isCancelled])

  // Actions



  const getTransaction = useCallback(() => {
    const unsub = onSnapshot(ref, (snapshot) => {
      let transactions = []
      snapshot.docs.forEach((doc) => {
        transactions.push({ ...doc.data(), id: doc.id })

      })

      dispatchIfNotCancelled({
        type: 'FETCH_TRANSACTION',
        payload: transactions
      })



    }, (error) => {
      console.log(error)

    })

    return () => unsub()
  }, [dispatchIfNotCancelled, ref])



  useEffect(() => {
    getTransaction()
  }, [getTransaction])




  const deleteTransaction = async (id) => {
    // dispatch({
    //   type: 'DELETE_TRANSACTION',
    //   payload: id
    // })

    try {
      await deleteDoc(doc(db, 'transactions', id))
      dispatchIfNotCancelled({
        type: 'DELETE_TRANSACTION',
        payload: id
      })
    } catch (error) {

    }
  }

  // Add transaction
  const addTransaction = async (transaction) => {
    // dispatch({
    //   type: 'ADD_TRANSACTION',
    //   payload: transaction
    // })
    try {
      const createdAt = Timestamp.fromDate(new Date())
      const addedTransaction = await addDoc(ref, { ...transaction, createdAt })
      dispatchIfNotCancelled({ type: 'ADD_TRANSACTION', payload: addedTransaction })
    } catch (error) {
      console.log(error)
    }
  }

  // Clean up function
  useEffect(() => {
    return () => setIsCancelled(true)
  })

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions, loading: state.loading, deleteTransaction, addTransaction }}>

      {children}
    </GlobalContext.Provider>)
}