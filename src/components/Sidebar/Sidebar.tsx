import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarProps, SidebarMenuItem } from './Sidebar.types';
import './Sidebar.css';

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen = true,
  onClose,
  position = 'left',
  width = 'normal',
  variant = 'default',
  logo,
  logoText = 'App',
  items,
  activeItemId,
  collapsible = false,
  isCollapsed = false,
  onToggleCollapse,
  overlay = false,
  footer,
  header,
  className = '',
}) => {
  const navigate = useNavigate();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const getWidthValue = () => {
    if (typeof width === 'number') return `${width}px`;
    if (typeof width === 'string' && !['narrow', 'normal', 'wide'].includes(width)) {
      return width;
    }
    return undefined;
  };

  const sidebarClasses = [
    'sidebar',
    `sidebar-${position}`,
    `sidebar-${variant}`,
    width && ['narrow', 'normal', 'wide'].includes(width as string) ? `sidebar-${width}` : '',
    isOpen ? 'sidebar-open' : 'sidebar-closed',
    isCollapsed ? 'sidebar-collapsed' : '',
    className,
  ].filter(Boolean).join(' ');

  const customWidth = getWidthValue();

  const handleItemClick = (item: SidebarMenuItem) => {
    if (item.disabled) return;

    if (item.children && item.children.length > 0) {
      toggleExpanded(item.id);
    } else {
      if (item.onClick) {
        item.onClick();
      }
      if (item.path) {
        navigate(item.path);
      }
      if (onClose && overlay) {
        onClose();
      }
    }
  };

  const toggleExpanded = (itemId: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const renderMenuItem = (item: SidebarMenuItem, level: number = 0) => {
    const isActive = item.id === activeItemId;
    const isExpanded = expandedItems.has(item.id);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id} className="sidebar-menu-item-wrapper">
        <button
          className={`sidebar-menu-item ${isActive ? 'sidebar-menu-item-active' : ''} ${
            item.disabled ? 'sidebar-menu-item-disabled' : ''
          } sidebar-menu-item-level-${level}`}
          onClick={() => handleItemClick(item)}
          disabled={item.disabled}
        >
          {item.icon && <span className="sidebar-menu-icon">{item.icon}</span>}
          {!isCollapsed && (
            <>
              <span className="sidebar-menu-label">{item.label}</span>
              {item.badge && (
                <span className="sidebar-menu-badge">{item.badge}</span>
              )}
              {hasChildren && (
                <span className={`sidebar-menu-arrow ${isExpanded ? 'expanded' : ''}`}>
                  ›
                </span>
              )}
            </>
          )}
        </button>
        {hasChildren && isExpanded && !isCollapsed && (
          <div className="sidebar-submenu">
            {item.children!.map((child) => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {overlay && isOpen && (
        <div className="sidebar-overlay" onClick={onClose}></div>
      )}
      <aside
        className={sidebarClasses}
        style={customWidth ? { width: customWidth } : undefined}
      >
        <div className="sidebar-container">
          {/* Header */}
          {(logo || logoText || header) && (
            <div className="sidebar-header">
              {header ? (
                header
              ) : (
                <div className="sidebar-logo">
                  {logo && <span className="sidebar-logo-icon">{logo}</span>}
                  {!isCollapsed && logoText && (
                    <span className="sidebar-logo-text">{logoText}</span>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Menu Items */}
          <nav className="sidebar-nav">
            {items.map((item) => renderMenuItem(item))}
          </nav>

          {/* Footer */}
          {footer && !isCollapsed && (
            <div className="sidebar-footer">{footer}</div>
          )}

          {/* Collapse Toggle */}
          {collapsible && (
            <button
              className="sidebar-toggle"
              onClick={onToggleCollapse}
              title={isCollapsed ? 'Expand' : 'Collapse'}
            >
              {isCollapsed ? '›' : '‹'}
            </button>
          )}
        </div>
      </aside>
    </>
  );
};