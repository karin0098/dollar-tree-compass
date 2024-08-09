import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  const [expense, setExpense] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Expense submitted: ${expense}`);
  };

  return (
    <form className="ExpenseForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
        placeholder="Enter expense"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ExpenseForm;
