import React from 'react';
import {useEffect, useRef} from 'react';
import { AppContext } from '../../App';
import PropTypes from 'prop-types';

import styles from './FormEnterTask.module.sass';

// в этом компоненте ввожу задачи-taskи и передаю их колбеком in parent в компонент WrapperTask
export function FormEnterTask({createNewTask}) {
  console.log("FormEnterTask xasxsa");  const {theme} = React.useContext(AppContext);
  const inputTaskRef = useRef();

  /*
   * theme = true светлый режим сайта/ false темный режим режим сайта
   */
  const cssFormEnterTask = theme ?
  `${styles.FormEnterTask_light}` :
  `${styles.FormEnterTask_dark}`

  const handleOnClickSubmit = (event) => {
    event.preventDefault();
      inputTaskRef.current.value && createNewTask(inputTaskRef.current.value)
  }

  useEffect(
    () => inputTaskRef.current.focus()
  )
  useEffect(
    () => inputTaskRef.current.value = ''
  )


  return (
    <div style={{zIndex:"100", position:"fixed", width:"inherit", margin: "0 auto"}}>
      <form className={cssFormEnterTask}>
        <label htmlFor="inputTask">Ввод задачи:</label>
        &nbsp;
        <input
          type="text"
          id="inputTask"
          placeholder="Enter new task"
          ref={inputTaskRef}
        />
        &nbsp;
        <input
          type="submit"
          value="Добавить задачу"
          onClick={handleOnClickSubmit}/>
      </form>
    </div>


  )
}

FormEnterTask.propTypes = {
  createNewTask: PropTypes.func,
  handleOnClickSubmit: PropTypes.func,

}
