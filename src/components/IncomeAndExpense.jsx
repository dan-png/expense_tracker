import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"


const IncomeAndExpense = () => {
  const { transactions } = useContext(GlobalContext)
  
  const amounts = transactions.map(transaction => transaction.amount)
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)
  const calExpense = (amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0)* -1
    ).toFixed(2)
  const expense = Math.abs(calExpense)
                  
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+₦{income.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-₦{ expense.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
      </div>
    </div>
  )
}
export default IncomeAndExpense