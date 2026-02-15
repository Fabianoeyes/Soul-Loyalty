import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon: Icon, 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  };

  const variants = {
    primary: "bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] border border-purple-500/30",
    secondary: "bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] border border-emerald-500/30",
    outline: "bg-transparent border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white",
    ghost: "bg-transparent text-slate-400 hover:text-white"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {Icon && <Icon size={size === 'sm' ? 16 : 20} />}
      {children}
    </motion.button>
  );
};

export const GradientText: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
  <span className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 ${className}`}>
    {children}
  </span>
);

export const Card: React.FC<{ children: React.ReactNode, className?: string, title?: string }> = ({ children, className = '', title }) => (
  <div className={`bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 ${className}`}>
    {title && <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4">{title}</h3>}
    {children}
  </div>
);