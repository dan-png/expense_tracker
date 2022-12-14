import { useState, useContext } from "react"
import { GlobalContext } from "../context/GlobalState"


const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext)
  


  const [text, setText] = useState("")
  const [amount, setAmount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newTransaction = {
      text,
      amount: +amount
    }

    addTransaction(newTransaction)
    setText('')
    setAmount('')

  }

  return (
    <>
      <h3>Add new transaction</h3>

      <form id="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">
            Text
          </label>
          <input type="text" placeholder="Enter text..." onChange={(e) => setText(e.target.value)} value={text} />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" placeholder="Enter amount..." onChange={(e) => setAmount(e.target.value)} value={ amount } />
        </div>
        <button className="btn">
          Add transaction
        </button>
      </form>
    </>
  )
}
export default AddTransaction