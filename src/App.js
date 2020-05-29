import React from 'react';
import firebase from "./firebase"

import Panel from "./components/Panel"

import './styles/App.css';

// firebase.firestore().collection('books').add({
//   title: "Eat That Frog",
//   author: "Brian Tracy",
//   genre: "self-help"
// })

function App() {
  return (
    <div className="App">
      <div>
        <h1>Reading List</h1>
        <Panel />
      </div>
    </div>
  );
}

export default App;
