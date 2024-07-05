import React from 'react';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Testimonials from './components/Testimonials';
import Newsletter from './components/NewsLetter';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Testimonials />
      <Newsletter />
      <Footer/>
    </div>
  );
}

export default App;
