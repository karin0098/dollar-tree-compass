import React from 'react';
import './App.css';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Receipt from './components/Receipt';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ExpenseForm />
        <ExpenseList />
        <Receipt />
      </main>
    </div>
  );
}

export default App;
