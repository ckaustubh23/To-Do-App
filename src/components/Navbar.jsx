// Navbar.js
import React from 'react';
import '../style.css';


function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>To-Do List</h1>
      <ul style={styles.navLinks}>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
  }
};

export default Navbar;
