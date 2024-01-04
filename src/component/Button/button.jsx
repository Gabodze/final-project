import Link from 'next/link';
import React from 'react';
import styles from './button.module.css';

function Button({ title, url }) {
  return (
    <Link href={url}>
      <a className={styles.button}>{title}</a>
    </Link>
  );
}

export default Button;
