import React from 'react';
import './home.css';
const Home = () => {
    return (
      <div className="home-container">
        <section className="club-history">
          <h2>Historia del Club</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper elit nec nisi rhoncus...</p>
        </section>
        <section className="club-goals">
          <h2>Objetivos del Club</h2>
          <ul>
            <li>Conseguir el ascenso a la primera división</li>
            <li>Desarrollar talento local</li>
            <li>Promover los valores del deporte</li>
          </ul>
        </section>
        <section className="club-news">
          <h2>Noticias Destacadas</h2>
          <div className="news-item">
            <h3>Título de la Noticia 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu dolor non tellus...</p>
          </div>
          <div className="news-item">
            <h3>Título de la Noticia 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu dolor non tellus...</p>
          </div>
        </section>
      </div>
    );
  }; 
export default Home;