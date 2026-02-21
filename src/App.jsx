import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import SpartaCaseStudy from './pages/SpartaCaseStudy';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sparta" element={<SpartaCaseStudy />} />
      </Routes>
    </Router>
  );
}

export default App;
