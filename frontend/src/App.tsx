//This is the React frontend of my bowling application, it pulls the API from the .NET backend and populates the
//site with bowler info

import React from 'react';
import './App.css';
import BowlerTable from './components/BowlerTable/BowlerTable';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <BowlerTable />
    </div>
  );
}

export default App;
