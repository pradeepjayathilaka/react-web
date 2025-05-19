import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Quizza!</h1>
      <p style={styles.subtitle}>
        Practice, Learn, and Master your Knowledge with Interactive Quizzes.
      </p>
      <button style={styles.button}>Get Started</button>
    </div>
  );
};

const styles = {
  container: {
    padding: '3rem 2rem',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    height: '100vh',
    fontFamily: 'Poppins, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#7e70e4',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#444',
    marginBottom: '2rem',
  },
  button: {
    backgroundColor: '#7e70e4',
    color: '#fff',
    padding: '0.8rem 2rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default Home;
