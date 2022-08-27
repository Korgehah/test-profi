import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = ({ onClick, children, disabled }: ButtonProps) => {
  return (
    <button
      className={`button ${disabled ? '--disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export { Button };
