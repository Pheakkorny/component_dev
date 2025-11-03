import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import './Home.css';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-hero">
        <h1 className="home-title">Component Library</h1>
        <p className="home-subtitle">
          A comprehensive collection of reusable React components built with TypeScript
        </p>
        <div className="home-actions">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => navigate('/components/button')}
          >
            Get Started
          </Button>
          <Button 
            variant="outline-primary" 
            size="lg"
            onClick={() => navigate('/components')}
          >
            View Components
          </Button>
        </div>
      </div>

      <section className="home-features">
        <div className="feature-card">
          <h3>🎨 Customizable</h3>
          <p>Highly flexible components with multiple variants, sizes, and styles</p>
        </div>
        <div className="feature-card">
          <h3>📱 Responsive</h3>
          <p>Works seamlessly across all devices and screen sizes</p>
        </div>
        <div className="feature-card">
          <h3>🔒 Type Safe</h3>
          <p>Built with TypeScript for better development experience</p>
        </div>
      </section>
    </div>
  );
};