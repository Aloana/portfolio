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
      <section id="sobre-mim">
        <Intro />
      </section>
      <section id="tecnologias">
        <Technologies />
      </section>
      <section id="projetos">
        <Projects />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
