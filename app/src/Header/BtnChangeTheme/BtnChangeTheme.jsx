import React from 'react';
import {useContext} from 'react';
import { AppContext } from '../../App';

import styles from './BtnChangeTheme.module.sass';


export function BtnChangeTheme() {
  const {handleOnClickTheme, theme} = useContext(AppContext);

  let cssButton = theme ?
  styles.BtnChangeTheme_Light + ' ' + styles.BtnChangeTheme:
  styles.BtnChangeTheme_Dark + ' ' + styles.BtnChangeTheme

  let captionBtn = theme ?
    "Dark theme" :
    "Light theme"

  return (
    <button
      className={cssButton}
      onClick={handleOnClickTheme}
    >
      {captionBtn}
    </button>


  )
}
