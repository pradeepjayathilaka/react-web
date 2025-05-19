import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.text}>
        We'd love to hear from you! Please fill out the form below or reach out to us directly using the contact details.
      </p>

      <form style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          style={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          style={styles.textarea}
          required
        />
        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fdfdfd',
    borderRadius: '8px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
  },
  heading: {
    fontSize: '2rem',
    color: '#222',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  text: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    resize: 'vertical',
  },
  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#7e70e4',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default Contact;
