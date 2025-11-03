import React from 'react';
import {
  CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
  CardImageProps,
} from './Card.types';
import './Card.css';

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  size = 'md',
  padding = 'none',
  hoverable = false,
  clickable = false,
  bordered = false,
  rounded = true,
  shadow = false,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  onClick,
  className = '',
}) => {
  const cardClasses = [
    'card',
    `card-${variant}`,
    `card-${size}`,
    `card-padding-${padding}`,
    hoverable && 'card-hoverable',
    clickable && 'card-clickable',
    bordered && 'card-bordered',
    rounded && 'card-rounded',
    shadow && 'card-shadow',
    className,
  ]
    .filter(Boolean)
    .join(' ');

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

  if (height !== undefined) {
    customStyles.height = typeof height === 'number' ? `${height}px` : height;
  }

  if (minHeight !== undefined) {
    customStyles.minHeight = typeof minHeight === 'number' ? `${minHeight}px` : minHeight;
  }

  if (maxHeight !== undefined) {
    customStyles.maxHeight = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight;
  }

  return (
    <div
      className={cardClasses}
      onClick={clickable ? onClick : undefined}
      style={Object.keys(customStyles).length > 0 ? customStyles : undefined}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  title,
  subtitle,
  avatar,
  action,
  className = '',
}) => {
  return (
    <div className={`card-header ${className}`}>
      <div className="card-header-content">
        {avatar && <div className="card-header-avatar">{avatar}</div>}
        {(title || subtitle) && (
          <div className="card-header-text">
            {title && <h3 className="card-header-title">{title}</h3>}
            {subtitle && <p className="card-header-subtitle">{subtitle}</p>}
          </div>
        )}
        {!title && !subtitle && children}
      </div>
      {action && <div className="card-header-action">{action}</div>}
    </div>
  );
};

export const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => {
  return <div className={`card-body ${className}`}>{children}</div>;
};

export const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => {
  return <div className={`card-footer ${className}`}>{children}</div>;
};

export const CardImage: React.FC<CardImageProps> = ({
  src,
  alt,
  height = 200,
  objectFit = 'cover',
  className = '',
}) => {
  const imageClasses = ['card-image', `card-image-${objectFit}`, className]
    .filter(Boolean)
    .join(' ');

  const imageStyle: React.CSSProperties = {
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return <img src={src} alt={alt} className={imageClasses} style={imageStyle} />;
};