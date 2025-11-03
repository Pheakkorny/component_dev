import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './MainLayout.css';

export const MainLayout: React.FC = () => {
  return (
    <div className="main-layout">
      <header className="main-header">
        <div className="header-container">
          <Link to="/" className="header-logo">
            Component Library
          </Link>
          <nav className="header-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/components" className="nav-link">Components</Link>
          </nav>
        </div>
      </header>
      
      <main className="main-content">
        <Outlet />
      </main>
      
      <footer className="main-footer">
        <div className="footer-container">
          <p>&copy; 2024 Component Library. Built with React & TypeScript</p>
        </div>
      </footer>
    </div>
  );
};