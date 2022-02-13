import React from 'react';

import styles from './Header.module.sass';
import { BtnMenu } from './BtnMenu/BtnMenu';
import {BtnChangeTheme} from './BtnChangeTheme/BtnChangeTheme'


export function Header() {

  return (
    <header className={styles.Header}>
      <BtnMenu/>
      <BtnChangeTheme/>
    </header>

  )
}
