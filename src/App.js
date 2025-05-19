import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Optional: remove if not using
import AppRouter from './router/router';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <AppRouter />
        </main>
        <Footer /> {/* Optional: display a footer under all routes */}
      </div>
    </Router>
  );
}

export default App;
