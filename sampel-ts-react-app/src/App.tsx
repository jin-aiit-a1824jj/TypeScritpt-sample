import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'

function App() {
  const [name, setName] = useState<string | null>('Peter');
  return (
    <Hello message={`I am ${name}`}></Hello>
  );
}

export default App;
