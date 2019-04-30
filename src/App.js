import React from 'react';
// import logo from './logo.svg';
import './App.css';
import firebase from './config/firebase'
import FullWidthTabs from './components/Tabs'
function App() {
  return (
    <div className="App">
      <div className="App-header">
      <FullWidthTabs />
      </div>
    </div>
  );
}

export default App;
