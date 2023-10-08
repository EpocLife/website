import './styles/App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Explanation from './pages/explanation';
import About from './pages/about';
import OurIdeas from './pages/ourIdeas';
import Features from './pages/features';
import WhoAreWe from './pages/whoAreWe';
import Contact from './pages/contact';
import Storage from './pages/storage';
import Mediums from './pages/mediums';
import Gateway from './pages/gateway';
import Verification from './pages/verification';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/explanation" element={<Explanation />} />
        <Route path="/explanation/about" element={<About />} />
        <Route path="/explanation/about/whoarewe" element={<WhoAreWe />} />
        <Route path="/explanation/about/contact" element={<Contact />} />
        <Route path="/explanation/ourIdeas" element={<OurIdeas />} />
        <Route path="/explanation/ourIdeas/storage" element={<Storage />} />
        <Route path="/explanation/features" element={<Features />} />
        <Route path="/explanation/features/mediums" element={<Mediums />} />
        <Route path="/explanation/features/gateway" element={<Gateway />} />
        <Route path="/explanation/features/verification" element={<Verification />} />
      </Routes>
    </Router>
  );
}

export default App;
