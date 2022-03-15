import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from "./p2-homeworks/h1/Message";
import {messageData} from "./p2-homeworks/h1/HW1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Message
              message={messageData.message}
              avatar={messageData.avatar}
              time={messageData.time}
              name={messageData.name}
          />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
