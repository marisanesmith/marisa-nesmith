import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'
import Contact from './components/Contact';

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <Contact />
      <Footer />
    </div>
  );

}

export default App;
