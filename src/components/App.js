import React from 'react'
import Header from './header/Header';
import Hero from './hero/Hero';
import Befhero from './befhero/Befhero';
import Credits from './credits/Credits';
import Footer from './footer/Footer';
const App = () => {
  return (
    <div>
      <Header/>
      <Befhero/>
      <Hero/>
      <Credits/>
      <Footer/>
    </div>
  );
}

export default App;