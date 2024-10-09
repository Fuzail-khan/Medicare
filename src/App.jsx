import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Login/Signup';
import Navbar from './Navbar/Navbar';
import About from './About/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
// asdasd

export default App;
