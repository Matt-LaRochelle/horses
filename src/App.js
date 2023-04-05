import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Horses from './components/horses/Horses';
import Lessons from './components/lessons/Lessons';
import Now_what from './components/now_what/Now_what';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="horses" element={<Horses />} />
        <Route path="lessons" element={<Lessons />} />
        <Route path="now_what" element={<Now_what />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
