import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './ComponentLayout.css';

const componentLinks = [
  { path: '/components/button', label: 'Button' },
  { path: '/components/card', label: 'Card' },
  { path: '/components/sidebar', label: 'Sidebar' },
];

export const ComponentLayout: React.FC = () => {
  return (
    <div className="component-layout">
      <aside className="component-sidebar">
        <h3 className="sidebar-title">Components</h3>
        <nav className="sidebar-nav">
          {componentLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      
      <div className="component-content">
        <Outlet />
      </div>
    </div>
  );
};