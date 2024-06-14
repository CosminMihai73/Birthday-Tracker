import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddMember from './components/AddMember';
import MemberList from './components/MemberList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-member" element={<AddMember />} />
          <Route path="/members" element={<MemberList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
