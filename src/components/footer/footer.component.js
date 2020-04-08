import React from 'react';
import styles from './footer.module.css';
import Logo from '../../ui-kit/logo/logo.component';
import { useSelector } from 'react-redux';
import { footerText as text } from '../../text/text';

const Footer = () => {
  const language = useSelector(state => state.language.value);
  
  return (
    <div className={styles.container}>
      <div className={styles.footerLeft}>
        <p className={styles.copyright}>
          © Copyright 2020 «Pizza Delivery»<br />{text[language].copyright}
        </p>
        <a className={styles.link} href="https://github.com/andreiyasinski" target="blank">Developed by Andrei Yasinski</a>
      </div>
      <Logo className={styles.logo} />
    </div>
  );
};

export default Footer;