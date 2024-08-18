import React from 'react';
import MyMap from './components/MapContainer';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MyMap />
    </div>
  );
};

export default App;
