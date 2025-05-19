import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>© {new Date().getFullYear()} Quizza. All rights reserved.</p>
        <div style={styles.links}>
          <a href="/about" style={styles.link}>About</a>
          <a href="/contact" style={styles.link}>Contact</a>
          <a href="/privacy" style={styles.link}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#7e70e4',
    padding: '1rem 0',
    color: '#fff',
    marginTop: 'auto',
  },
  container: {
    width: '90%',
    margin: '0 auto',
    textAlign: 'center',
  },
  text: {
    margin: '0.5rem 0',
  },
  links: {
    marginTop: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '0.9rem',
  },
};

export default Footer;
