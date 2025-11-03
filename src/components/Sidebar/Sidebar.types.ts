import { ReactNode } from 'react';

export type SidebarPosition = 'left' | 'right';
export type SidebarWidth = 'narrow' | 'normal' | 'wide' | string | number;
export type SidebarVariant = 'default' | 'dark' | 'light' | 'colored';

export interface SidebarMenuItem {
  id: string;
  label: string;
  icon?: ReactNode;
  path?: string;
  onClick?: () => void;
  badge?: string | number;
  disabled?: boolean;
  children?: SidebarMenuItem[];
}

export interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  position?: SidebarPosition;
  width?: SidebarWidth;
  variant?: SidebarVariant;
  logo?: ReactNode;
  logoText?: string;
  items: SidebarMenuItem[];
  activeItemId?: string;
  collapsible?: boolean;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  overlay?: boolean;
  footer?: ReactNode;
  header?: ReactNode;
  className?: string;
}