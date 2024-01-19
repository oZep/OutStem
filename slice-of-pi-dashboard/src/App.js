import React from 'react';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <div className="logo-container">
        <div className="logo-left"></div>
        <div className="title">Slice of Pie</div>
        </div>
      </div>
      <Dashboard />
    </div>
  );
}
export default App;
