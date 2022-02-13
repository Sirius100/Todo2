import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../App';

import styles from './BtnMenu.module.sass';


export function BtnMenu() {

  let {theme, handleCallMenu} = useContext(AppContext);

  let cssBtnMenu = theme ?
  `${styles.BtnMenu_Dark} ${styles.BtnMenu}` :
  `${styles.BtnMenu_Light} ${styles.BtnMenu}`


  return (

    <div style={{position: "relative"}}>
      <label htmlFor="menu">
        <input
          type="checkbox"
          id="menu"
          style={{position: "absolute", width:"100%", height:"100%", display: "none"}}
          onChange={handleCallMenu}/>
        <div id="btn_menu" className={cssBtnMenu} >
          <span></span>
        </div>
      </label>

    </div>

  )
}
