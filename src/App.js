import React from 'react';
import './App.css';
// import Header from './Components/Header';
import Header from './Components/Header';
import MyMenu from './Components/MyMenu';
import MyMap from './Components/MyMap';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <MyMenu />
        <MyMap />
      </div>
    </div>
  );
}

export default App;
