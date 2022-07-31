import BalanceReview from "./BalanceReview";
import './App.css';
import { BalanceContext,  amount } from './Context'
import { useState } from "react";

const App = () => {
  const [balance,  setBalance] = useState(amount);

  const updateBalance = (balance) => {
    setBalance(balance);
  }
  return (
<div className="App">
  <BalanceContext.Provider value={{ balance,  updateBalance }}>
  <BalanceReview 
  currency="$"/>
  </BalanceContext.Provider >
</div>
  );
};

export default App;
