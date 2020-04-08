import React from 'react';
import cn from 'classnames';
import styles from './button.module.css';

const Button = ({ children, theme, onClick, className, isDisabled }) => {
  const buttonTheme = theme || 'primary';

  return (
    <button
      className={cn(styles.container, className, {
        [styles.primary]: buttonTheme === 'primary',
        [styles.secondary]: buttonTheme === 'secondary',
      })}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;