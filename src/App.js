import React, { useState, useEffect } from 'react';
import Jokes from './components/Jokes.js'
import './App.css';

export default function App(props) {
  return (
    <div className="App">
     <Jokes />
    </div>
  );
}

