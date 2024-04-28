// File: src/App.js
import React, { useState } from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import DisplayResults from './components/DisplayResults';

function App() {
  const [results, setResults] = useState({ summary: '', updated_html: '' });

  return (
    <div className="App">
      <header className="App-header">
        <h1>HTML Analyzer</h1>
        <FileUpload onResults={setResults} />
        <DisplayResults results={results} />
      </header>
    </div>
  );
}

export default App;
