import React from 'react';
import {useState} from 'react';
import {useContext} from 'react';
import {AppContext} from '../App';
import {FormEnterTask} from './FormEnterTask/FormEnterTask'
import {ListTasks} from './ListTasks/ListTasks'
import PropTypes from 'prop-types';

import styles from './WrapperTask.module.sass';


export function WrapperTask() {

  const {menu, theme} = useContext(AppContext)/*параметр {menu} отвечает за смену css стилей данного компонента*/
  const [task, setTask] = useState([ ]);// task пушит - handleCreateNewTask() - в себя новые задачи при добавлении или удаляет - deleteTask() - при удалении задачи

  /*
   * theme = true - светлый стиль сайта/ false - темный стиль сайта
   * menu = true меню вызвано
   */
  let cssWrapperTask = menu ?
    (theme ?
      `${styles.WrapperTask_Menu_Call} ${styles.WrapperTask_Light}`:
      `${styles.WrapperTask_Menu_Call} ${styles.WrapperTask_Dark}`):

    ( theme ?
      `${styles.WrapperTask} ${styles.WrapperTask_Light}`:
      `${styles.WrapperTask} ${styles.WrapperTask_Dark}`)


  // ввод новой задачи в инпут inputTask из модуля FormEnterTask
  const handleCreateNewTask = (text) => {
    setTask([...task, {
      id:task.length + 1,
      taskBody: text,
      date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
    }])
  }

/*
 * у объекта task есть поле id, которое задается в функции handleCreateNewTask этого
 * модуля.  id task-а равно длинне массива + 1 на момент создания задачи пользователем
 * { id: 1, taskBody: "Написать стили для компонента", date: "18.01.2022 17:49:56" }
 * id используется для нумерации задач при создании и удалении задач пользователем
 */

  // удаление задачи из списка задач (удаляю объект задачи из массива task)
  const deleteTask = (event) => {
    console.log("event: ", event.target.parentElement.parentElement)
    const promise = new Promise( (resolve, reject) =>
    {
      resolve(event)
      reject("Что то пошло не так в функции deleteTask")
    } )

    promise
      .then(event => event.target.offsetParent.offsetParent.children[1].innerText)
      .then( indexTask =>  {task.splice(indexTask-1, 1); return task} )
      .then( UpdateTask => {
        let temp = 0;
        UpdateTask.map( elem =>  elem.id = ++temp);
        return UpdateTask;
      } )
      .then( task => setTask([...task]))
      .catch( info => console.warn( "info:", info ) )
  }

  return (
    <main className={cssWrapperTask} style={{overflowY:"scroll-y"}}>
      <FormEnterTask createNewTask={handleCreateNewTask}/>
      <ListTasks props={{
                          task: {task},
                          deleteTask: {deleteTask},
                        }}>
      </ListTasks>
    </main>

  )
}

WrapperTask.propTypes = {
  cssWrapperTask: PropTypes.string,
  handleCreateNewTask: PropTypes.func,
}
