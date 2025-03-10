import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
