import React from 'react';
import { ButtonProps } from './Button.types';
import './Button.css';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  shape = 'rectangle',
  disabled = false,
  loading = false,
  fullWidth = false,
  width,
  minWidth,
  maxWidth,
  onClick,
  type = 'button',
  className = '',
  icon,
  iconPosition = 'left',
}) => {
  const buttonClasses = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    `btn-${shape}`,
    fullWidth && 'btn-full-width',
    loading && 'btn-loading',
    className,
  ].filter(Boolean).join(' ');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading && onClick) {
      onClick(event);
    }
  };

  // Build custom styles for width management
  const customStyles: React.CSSProperties = {};
  
  if (width !== undefined) {
    customStyles.width = typeof width === 'number' ? `${width}px` : width;
  }
  
  if (minWidth !== undefined) {
    customStyles.minWidth = typeof minWidth === 'number' ? `${minWidth}px` : minWidth;
  }
  
  if (maxWidth !== undefined) {
    customStyles.maxWidth = typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth;
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={handleClick}
      style={Object.keys(customStyles).length > 0 ? customStyles : undefined}
    >
      {loading ? (
        <span className="btn-spinner"></span>
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className="btn-icon btn-icon-left">{icon}</span>
          )}
          <span className="btn-text">{children}</span>
          {icon && iconPosition === 'right' && (
            <span className="btn-icon btn-icon-right">{icon}</span>
          )}
        </>
      )}
    </button>
  );
};