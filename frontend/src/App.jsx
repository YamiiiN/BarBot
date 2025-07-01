// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main homepage route */}
        <Route path="/" element={<HomePage />} />

        {/* You can add more routes here in the future */}
      </Routes>
    </Router>
  );
}

export default App;
