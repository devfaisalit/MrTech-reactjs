import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Myskills from './components/Myskills';
import Contact from './components/Contactus';
import Footer from './components/Endingcomponent';

function App() {
  return (
    <div className='bg-[#1c2d54]'>
      <Navbar />
      <Header/>
      <Myskills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
