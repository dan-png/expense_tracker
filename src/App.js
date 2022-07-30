
// Components
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeAndExpense from './components/IncomeAndExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

// Styles
import './App.css';


function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeAndExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  );
}

export default App;
