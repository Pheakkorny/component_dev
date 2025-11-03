import { ReactNode } from 'react';

export type CardVariant = 'default' | 'elevated' | 'outlined' | 'filled';
export type CardSize = 'sm' | 'md' | 'lg' | 'xl';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  size?: CardSize;
  padding?: CardPadding;
  hoverable?: boolean;
  clickable?: boolean;
  bordered?: boolean;
  rounded?: boolean;
  shadow?: boolean;
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  onClick?: () => void;
  className?: string;
}

export interface CardHeaderProps {
  children?: ReactNode; // Changed from required to optional
  title?: string;
  subtitle?: string;
  avatar?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export interface CardImageProps {
  src: string;
  alt: string;
  height?: string | number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  className?: string;
}