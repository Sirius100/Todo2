import React, {useState } from 'react'
import {Header} from './Header/Header'
import { Sidebar } from './Sidebar/Sidebar'
import {Footer} from './Footer/Footer'
import {WrapperTask} from './WrapperTask/WrapperTask'
import PropTypes from 'prop-types';



export const AppContext = React.createContext()

function App() {

  const [theme, setTheme] = useState(false)//состояние темы - режим темный/темный по умолчанию (theme=false)
  const  [menu, setMenu] = useState(false) // состояние меню - скрыто по умолчанию (menu=false)
  let [numberTask, setNumberTask] = useState(0); // количество задач пользователя

  // отвечает за сменю надписи на button смены режима
  const handleOnClickTheme = (event) => {

    if (event.target.textContent === "Light theme" || "Dark theme" )
      setTheme(!theme)

  }
  // показывает/закрывает панель меню
  const handleCallMenu = (event) => {

    setMenu(!menu)
  }

  /*
   *  для меню -  выводит общее количество задач
   *  реализую паттерн передачи данных между дочерними
   * компонентами через общий дочерний компонент
   */
  const handleNumberTask = (number) => {

    setNumberTask(numberTask = number);
  }

  let cssApp = theme ?
    "App App_Light":
    "App App_Dark"

  return (
    <AppContext.Provider value={{handleOnClickTheme, theme, handleCallMenu, menu, handleNumberTask, numberTask}}>
      <div className={cssApp}>

        <div  style={{width:"100%", height:"10vh"}}>
          <Header />
        </div>

        <div style={{width:"100%", height:"79.5vh", padding:"0 0", flexWrap:"nowrap", position:"relative", overflowY:"scroll"}}>
          <Sidebar/>
          <WrapperTask />
        </div>

        <div style={{width:"100%", height: "10vh"}}>
          <Footer />
        </div>
      </div>
    </AppContext.Provider>

  );
}

export default App;

App.propsTypes = {
  handleOnClickTheme: PropTypes.func,
  handleCallMenu: PropTypes.func,

}
