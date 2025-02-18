import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import gsap from 'gsap';

function App() {
  return (
    <Router>
      <div className="App" style={{
        backgroundColor: '#000', 
        color: '#fff', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <header className="header" style={{ 
          textAlign: 'center', 
          padding: '20px 0',
          maxWidth: '800px', // Limit header width for better readability
          width: '100%'
        }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            background: 'linear-gradient(to right, #ff105f, #ffad06)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
          </h1>
          <p style={{
            fontSize: '1.5rem',
            fontFamily: 'cursive',
            textTransform: 'uppercase',
            letterSpacing: '4px',
            background: 'linear-gradient(to right, #007CF0, #00DFD8)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            shkelzenoob
          </p>
        </header>
        <main style={{ 
          padding: '20px', 
          maxWidth: '800px', // Limit content width for better readability
          width: '100%'
        }}>
          <Routes>
            <Route path="/" element={<Timeline />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;