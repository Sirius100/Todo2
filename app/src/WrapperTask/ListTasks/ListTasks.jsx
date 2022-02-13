import PropTypes from 'prop-types';
import React from 'react';
import {AppContext} from '../../App';
import {useEffect} from 'react'
import { useRef } from 'react';
import { Transition } from 'react-transition-group';

import './ListTasks.sass';
/*
 * если стили подключать с использованием
 * подхода css styles тогда не ,будет работать анимация
 * через Transition
 */
// import styles from './ListTasks.module.sass';


export function ListTasks({props}) {

  let {task} = props.task;
  let {deleteTask} = props.deleteTask;

  const {theme, handleNumberTask} = React.useContext(AppContext);
  /*
   * theme = true светлый режим сайта/ false темный режим
   */

  const cssListTasks = theme ?
    `${"ListTasks"} ${"ListTask_Light"}` :
    `${"ListTasks"} ${"List_Dark"}`

  /*
   * const lastLiItemTask для автоматической прокрутки скролла списка задач
   * и передаю в handleNumberTask -> App количество задач document.querySelectorAll('li').length
   */
  const lastLiItemTask = useRef();
  useEffect( () => {
    lastLiItemTask.current && lastLiItemTask.current.scrollIntoView();
    handleNumberTask( document.querySelectorAll('li').length);
  }, [task])


  console.log("lastLiItemTask: ", lastLiItemTask);
  return (

      <ul  className={`${"ul"}`} style={{paddingTop:"50px", paddingLeft: "0", width: "80%", margin:"2px auto"}}>
        {task.map( (objective) =>

        <li className={cssListTasks} key={objective.id.toString()} ref={lastLiItemTask}>

          <span>
            №
          </span>

          <span>
            {objective.id}
          </span>

          <article>
            {objective.taskBody}
          </article>

          <span style={{width:"100px"}}>
            {objective.date.toLocaleString()}
          </span>

          <span>
            <input
              type="checkbox"
              id={`ready${objective.id+1}`}
              className={`${"checkbox_ready"}`}
              onChange={deleteTask} />
            <label htmlFor={`ready${objective.id+1}`}></label>
          </span>

        </li>
        )}
      </ul>
  )
}

ListTasks.propTypes = {
  task: PropTypes.object,
  deleteTask: PropTypes.func,
}
