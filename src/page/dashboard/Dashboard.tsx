import React, { useState } from 'react';
import { Sidebar, Button } from '../../components';
import type { SidebarMenuItem } from '../../components';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('overview');

  const menuItems: SidebarMenuItem[] = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <span>📊</span>,
      onClick: () => setActiveItem('overview'),
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: <span>📈</span>,
      badge: 'New',
      onClick: () => setActiveItem('analytics'),
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: <span>📋</span>,
      children: [
        {
          id: 'sales',
          label: 'Sales Report',
          onClick: () => setActiveItem('sales'),
        },
        {
          id: 'traffic',
          label: 'Traffic Report',
          onClick: () => setActiveItem('traffic'),
        },
      ],
    },
    {
      id: 'users',
      label: 'Users',
      icon: <span>👥</span>,
      badge: 24,
      onClick: () => setActiveItem('users'),
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <span>⚙️</span>,
      onClick: () => setActiveItem('settings'),
    },
    {
      id: 'back',
      label: 'Back to Components',
      icon: <span>⬅️</span>,
      onClick: () => navigate('/components'),
    },
  ];

  return (
    <div className="dashboard-page">
      <Sidebar
        variant="dark"
        width="normal"
        collapsible
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
        logoText="Dashboard"
        logo={<span>🚀</span>}
        items={menuItems}
        activeItemId={activeItem}
        footer={
          <div className="dashboard-user">
            <div className="dashboard-avatar">JD</div>
            {!isCollapsed && (
              <div className="dashboard-user-info">
                <div className="dashboard-user-name">John Doe</div>
                <div className="dashboard-user-role">Administrator</div>
              </div>
            )}
          </div>
        }
      />
      
      <main
        className="dashboard-content"
        style={{ marginLeft: isCollapsed ? '70px' : '280px' }}
      >
        <div className="dashboard-header">
          <h1>Welcome to Dashboard</h1>
          <p>Active Section: <strong>{activeItem}</strong></p>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-icon">👥</div>
            <div className="card-info">
              <div className="card-value">1,234</div>
              <div className="card-label">Total Users</div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">📦</div>
            <div className="card-info">
              <div className="card-value">567</div>
              <div className="card-label">Products</div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">💰</div>
            <div className="card-info">
              <div className="card-value">$12,345</div>
              <div className="card-label">Revenue</div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">📈</div>
            <div className="card-info">
              <div className="card-value">+23%</div>
              <div className="card-label">Growth</div>
            </div>
          </div>
        </div>

        <div className="dashboard-section">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon">✅</div>
              <div className="activity-content">
                <div className="activity-title">New user registered</div>
                <div className="activity-time">2 minutes ago</div>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">🛒</div>
              <div className="activity-content">
                <div className="activity-title">Order #1234 completed</div>
                <div className="activity-time">15 minutes ago</div>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">💳</div>
              <div className="activity-content">
                <div className="activity-title">Payment received</div>
                <div className="activity-time">1 hour ago</div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-section">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <Button variant="primary" icon={<span>➕</span>}>
              Add User
            </Button>
            <Button variant="success" icon={<span>📦</span>}>
              New Product
            </Button>
            <Button variant="info" icon={<span>📊</span>}>
              View Reports
            </Button>
            <Button variant="secondary" onClick={() => navigate('/components')}>
              Back to Components
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};