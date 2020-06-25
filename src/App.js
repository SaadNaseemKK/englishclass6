import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TranscationHistroy } from './components/TranscationHistory';
import { AddTranscation } from './components/AddTranscation';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <AccountSummary />
        <TranscationHistroy />
        <AddTranscation />
      </div>


    </div>
  );
}

export default App;
