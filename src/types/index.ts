// Component Props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Button Variants
export type ButtonVariant = 
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

export type ButtonSize = "default" | "sm" | "lg" | "icon";

// Card Props
export interface CardProps extends BaseComponentProps {
  variant?: "default" | "outlined";
  padding?: "none" | "sm" | "md" | "lg";
}

// Navigation
export interface NavigationItem {
  id: string;
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavigationItem[];
}

// Page Metadata
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
}

// Form Types
export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "textarea" | "select" | "checkbox" | "radio";
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    pattern?: RegExp;
    message?: string;
  };
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "user" | "admin";
  createdAt: Date;
  updatedAt: Date;
}

// Project Types
export interface Project {
  id: string;
  name: string;
  description: string;
  status: "draft" | "active" | "archived";
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  collaborators?: string[];
} 