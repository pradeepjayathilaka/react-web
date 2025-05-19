// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.text}>
        Welcome to our application! We are dedicated to creating a seamless and interactive
        user experience. This About page gives you a quick overview of who we are and what we do.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.1rem',
    color: '#555',
    lineHeight: '1.6',
  },
};

export default About;
