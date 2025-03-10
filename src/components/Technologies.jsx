import React from 'react';
import '../styles/Technologies.css';
import phpLogo from '../assets/php.png';
import javaLogo from '../assets/java.png';
import sqlLogo from '../assets/sql.png';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/js.png';

function Technologies() {
  const techs = [
    { name: 'PHP', image: phpLogo },
    { name: 'Java', image: javaLogo },
    { name: 'SQL', image: sqlLogo },
    { name: 'HTML', image: htmlLogo },
    { name: 'CSS', image: cssLogo },
    { name: 'JS', image: jsLogo },
  ];

  return (
    <section className="technologies">
      <h2>Tecnologias</h2>
      <div className="tech-grid">
        {techs.map((tech) => (
          <div key={tech.name} className="tech-card">
            <img src={tech.image} alt={tech.name} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;
