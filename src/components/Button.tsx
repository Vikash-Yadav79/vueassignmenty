// src/components/Button.tsx

import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
  }
  

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
