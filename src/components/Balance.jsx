import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import Spinner from "./Spinner"


const Balance = () => {

  const { transactions, loading } = useContext(GlobalContext)


  
  // To get the Balance
  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  const sign = total < 0 ? '-' : ''
  if (!loading && (!transactions || transactions.length === 0)) {
    return <h3>
      No Transactions yet
    </h3>
  }
  
  return loading ? <Spinner/> :(
    
    <div className="balance-container">
      <h1 className={total < 0 ? "minus":"plus"}>
        {sign}₦{Math.abs(total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h1>
      <h4>Balance</h4>
    </div>
  )
}
export default Balance