import React from 'react';
import styles from './logo.module.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';


const Logo = ({ className }) => {
  return (
    <Link
      to="/"
      className={styles.container}
    >
      <img className={cn(styles.image, className)} src={logo} alt="logo" />
      <p className={styles.text}>PIZZA</p>
    </Link>
  );
};

export default Logo;