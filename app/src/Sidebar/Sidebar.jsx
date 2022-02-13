import React from 'react';
import {useContext} from 'react';
import { Transition } from 'react-transition-group';
import { AppContext } from '../App';
import './Sidebar.sass';
// import styles from './Sidebar.module.sass';

/*
 * если стили подключать с использованием
 * подхода css styles тогда не ,будет работать анимация
 * через Transition
 */


export function Sidebar() {


  const {menu, theme, numberTask} = useContext(AppContext)

  /*
   * theme = true светлый режим сайта/ false темный режим
   */
  let cssTheme = theme ?
  `${'Sidebar'} ${'Sidebar_Light'}`:
  `${'Sidebar'} ${'Sidebar_Dark'}`

  console.log(`${cssTheme}`);
  return (
    <Transition
      in={menu}
      timeout={2500}
      unmountOnExit>
      { menu => (
        <nav className={`${cssTheme} ${menu}`}>
          <h5>
            Количество задач в списке: &nbsp;
            <span>{numberTask}</span>
          </h5>
          <code>
            Проект создан в учебных целях, для понимания технологии React.
            <br />
            <a href="https://ru.reactjs.org"> На сайт React</a>
          </code>
        </nav>
      )}

    </Transition>

  )
}
