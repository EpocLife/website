import './styles/App.css';
import React from 'react';
import { BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom';
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
    <HashRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/explanation" element={<Explanation />} />
      <Route exact path="/explanation/about" element={<About />} />
      <Route exact path="/explanation/about/whoarewe" element={<WhoAreWe />} />
      <Route exact path="/explanation/about/contact" element={<Contact />} />
      <Route exact path="/explanation/ourIdeas" element={<OurIdeas />} />
      <Route exact path="/explanation/ourIdeas/storage" element={<Storage />} />
      <Route exact path="/explanation/features" element={<Features />} />
      <Route exact path="/explanation/features/mediums" element={<Mediums />} />
      <Route exact path="/explanation/features/gateway" element={<Gateway />} />
      <Route exact path="/explanation/features/verification" element={<Verification />} />
    </Routes>
  </HashRouter>
  );
}

export default App;
