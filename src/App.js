import React from 'react';

import Panel from "./components/Panel"

import './styles/App.css';

function App() {
  return (
    <div className="app-overlay">
      <div className="App">
        <Panel />
      </div>
    </div>
  );
}

export default App;
