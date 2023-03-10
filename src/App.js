import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from'./components/Expenses/Expenses'; 

const DUMMY_EXPENSE = [{id: 'e1', title: 'College fees', amount: 17000, date: new Date(2022,5,12),},{id: 'e2', title: 'Treat', amount: 500, date: new Date(2022, 6, 11),},{id: 'e3', title: 'Petrol', amount: 934, date: new Date(2022, 10, 12),}];


const App = () => {  

  // How JSX works behind the scene
  // return React.createElement('div', {}, React.createElement('h2', {}, 'Let\'s get started!'), React.createElement(Expenses, {item: expense}));
  const [expenses, setExpense] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = expense => {
    setExpense(prevExpenses => {return [expense, ...prevExpenses];});
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
