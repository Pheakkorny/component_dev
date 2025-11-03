import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Components.css';

const componentsList = [
  {
    name: 'Button',
    description: 'Interactive buttons with multiple variants, sizes, and states',
    path: '/components/button',
    icon: '🔘',
  },
  {
    name: 'Card',
    description: 'Flexible container for content grouping',
    path: '/components/card',
    icon: '🃏',
  },
   {
    name: 'Sidebar',
    description: 'Form input fields with validation and various types',
    path: '/components/sidebar',
    icon: '📝',
  },
];

export const Components: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="components-page">
      <header className="components-header">
        <h1>Component Library</h1>
        <p>Explore our collection of reusable React components</p>
      </header>

      <div className="components-grid">
        {componentsList.map((component) => (
          <div
            key={component.path}
            className="component-card"
            onClick={() => navigate(component.path)}
          >
            <div className="component-icon">{component.icon}</div>
            <h3 className="component-name">{component.name}</h3>
            <p className="component-description">{component.description}</p>
            <span className="component-link">View Component →</span>
          </div>
        ))}
      </div>
    </div>
  );
};