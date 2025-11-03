import React, { useState } from 'react';
import { Sidebar, Button } from '../../components';
import type { SidebarMenuItem, SidebarVariant, SidebarPosition, SidebarWidth } from '../../components';
import './SidebarPage.css';

export const SidebarPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [variant, setVariant] = useState<SidebarVariant>('default');
  const [position, setPosition] = useState<SidebarPosition>('left');
  const [width, setWidth] = useState<SidebarWidth>('normal');
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems: SidebarMenuItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <span>📊</span>,
      onClick: () => setActiveItem('dashboard'),
    },
    {
      id: 'users',
      label: 'Users',
      icon: <span>👥</span>,
      badge: 12,
      onClick: () => setActiveItem('users'),
    },
    {
      id: 'products',
      label: 'Products',
      icon: <span>📦</span>,
      children: [
        {
          id: 'all-products',
          label: 'All Products',
          onClick: () => setActiveItem('all-products'),
        },
        {
          id: 'categories',
          label: 'Categories',
          onClick: () => setActiveItem('categories'),
        },
      ],
    },
    {
      id: 'orders',
      label: 'Orders',
      icon: <span>🛒</span>,
      badge: 5,
      onClick: () => setActiveItem('orders'),
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: <span>📈</span>,
      onClick: () => setActiveItem('analytics'),
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <span>⚙️</span>,
      onClick: () => setActiveItem('settings'),
    },
    {
      id: 'disabled',
      label: 'Disabled Item',
      icon: <span>🚫</span>,
      disabled: true,
    },
  ];

  return (
    <div className="sidebar-page">
      <header className="page-header">
        <h1>Sidebar Component</h1>
        <p>
          A flexible sidebar component with collapsible menu, nested items, badges, and multiple variants.
        </p>
      </header>

      <section className="demo-section">
        <h2>Interactive Demo</h2>
        <div className="sidebar-controls">
          <div className="control-group">
            <label>Variant:</label>
            <div className="button-group">
              <Button
                size="sm"
                variant={variant === 'default' ? 'primary' : 'outline-primary'}
                onClick={() => setVariant('default')}
              >
                Default
              </Button>
              <Button
                size="sm"
                variant={variant === 'dark' ? 'primary' : 'outline-primary'}
                onClick={() => setVariant('dark')}
              >
                Dark
              </Button>
              <Button
                size="sm"
                variant={variant === 'light' ? 'primary' : 'outline-primary'}
                onClick={() => setVariant('light')}
              >
                Light
              </Button>
              <Button
                size="sm"
                variant={variant === 'colored' ? 'primary' : 'outline-primary'}
                onClick={() => setVariant('colored')}
              >
                Colored
              </Button>
            </div>
          </div>

          <div className="control-group">
            <label>Position:</label>
            <div className="button-group">
              <Button
                size="sm"
                variant={position === 'left' ? 'primary' : 'outline-primary'}
                onClick={() => setPosition('left')}
              >
                Left
              </Button>
              <Button
                size="sm"
                variant={position === 'right' ? 'primary' : 'outline-primary'}
                onClick={() => setPosition('right')}
              >
                Right
              </Button>
            </div>
          </div>

          <div className="control-group">
            <label>Width:</label>
            <div className="button-group">
              <Button
                size="sm"
                variant={width === 'narrow' ? 'primary' : 'outline-primary'}
                onClick={() => setWidth('narrow')}
              >
                Narrow
              </Button>
              <Button
                size="sm"
                variant={width === 'normal' ? 'primary' : 'outline-primary'}
                onClick={() => setWidth('normal')}
              >
                Normal
              </Button>
              <Button
                size="sm"
                variant={width === 'wide' ? 'primary' : 'outline-primary'}
                onClick={() => setWidth('wide')}
              >
                Wide
              </Button>
            </div>
          </div>

          <div className="control-group">
            <label>Actions:</label>
            <div className="button-group">
              <Button
                size="sm"
                variant="success"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? 'Close' : 'Open'} Sidebar
              </Button>
              <Button
                size="sm"
                variant="info"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                {isCollapsed ? 'Expand' : 'Collapse'}
              </Button>
            </div>
          </div>
        </div>

        <div className="sidebar-demo-container">
          <Sidebar
            isOpen={isOpen}
            isCollapsed={isCollapsed}
            onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
            variant={variant}
            position={position}
            width={width}
            collapsible
            logoText="My App"
            logo={<span>🚀</span>}
            items={menuItems}
            activeItemId={activeItem}
            footer={
              <div className="sidebar-user-info">
                <div className="user-avatar">👤</div>
                {!isCollapsed && (
                  <div className="user-details">
                    <div className="user-name">John Doe</div>
                    <div className="user-email">john@example.com</div>
                  </div>
                )}
              </div>
            }
          />
          <div
            className="demo-content"
            style={{
              marginLeft: position === 'left' && isOpen ? (isCollapsed ? '70px' : '280px') : '0',
              marginRight: position === 'right' && isOpen ? (isCollapsed ? '70px' : '280px') : '0',
            }}
          >
            <div className="content-card">
              <h3>Main Content Area</h3>
              <p>Active Item: <strong>{activeItem}</strong></p>
              <p>This is where your page content would go. The sidebar can be toggled and collapsed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="demo-section">
        <h2>Code Example</h2>
        <div className="code-block">
          <pre>
            <code>{`import { Sidebar } from './components';
import type { SidebarMenuItem } from './components';

const menuItems: SidebarMenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <span>📊</span>,
    path: '/dashboard',
  },
  {
    id: 'users',
    label: 'Users',
    icon: <span>👥</span>,
    badge: 12,
    path: '/users',
  },
  {
    id: 'products',
    label: 'Products',
    icon: <span>📦</span>,
    children: [
      {
        id: 'all-products',
        label: 'All Products',
        path: '/products',
      },
      {
        id: 'categories',
        label: 'Categories',
        path: '/products/categories',
      },
    ],
  },
];

function MyApp() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  return (
    <Sidebar
      variant="dark"
      width="normal"
      collapsible
      isCollapsed={isCollapsed}
      onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
      logoText="My App"
      items={menuItems}
      activeItemId="dashboard"
      footer={<UserProfile />}
    />
  );
}`}</code>
          </pre>
        </div>
      </section>

      <section className="demo-section">
        <h2>Props</h2>
        <div className="props-table">
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>isOpen</code></td>
                <td>boolean</td>
                <td>true</td>
                <td>Controls sidebar visibility</td>
              </tr>
              <tr>
                <td><code>isCollapsed</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>Collapses sidebar to icon-only mode</td>
              </tr>
              <tr>
                <td><code>variant</code></td>
                <td>SidebarVariant</td>
                <td>&apos;default&apos;</td>
                <td>Color theme (default, dark, light, colored)</td>
              </tr>
              <tr>
                <td><code>position</code></td>
                <td>SidebarPosition</td>
                <td>&apos;left&apos;</td>
                <td>Sidebar position (left, right)</td>
              </tr>
              <tr>
                <td><code>width</code></td>
                <td>SidebarWidth</td>
                <td>&apos;normal&apos;</td>
                <td>Sidebar width (narrow, normal, wide, or custom)</td>
              </tr>
              <tr>
                <td><code>items</code></td>
                <td>SidebarMenuItem[]</td>
                <td>required</td>
                <td>Array of menu items</td>
              </tr>
              <tr>
                <td><code>activeItemId</code></td>
                <td>string</td>
                <td>-</td>
                <td>ID of currently active menu item</td>
              </tr>
              <tr>
                <td><code>collapsible</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>Shows collapse toggle button</td>
              </tr>
              <tr>
                <td><code>overlay</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>Shows overlay when sidebar is open</td>
              </tr>
              <tr>
                <td><code>logoText</code></td>
                <td>string</td>
                <td>&apos;App&apos;</td>
                <td>Text to display in header</td>
              </tr>
              <tr>
                <td><code>logo</code></td>
                <td>ReactNode</td>
                <td>-</td>
                <td>Logo icon element</td>
              </tr>
              <tr>
                <td><code>header</code></td>
                <td>ReactNode</td>
                <td>-</td>
                <td>Custom header content</td>
              </tr>
              <tr>
                <td><code>footer</code></td>
                <td>ReactNode</td>
                <td>-</td>
                <td>Custom footer content</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};