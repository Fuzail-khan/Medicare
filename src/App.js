import React from 'react';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />

      {/* Your other components go here */}
    </div>
  );
}

export default App;
