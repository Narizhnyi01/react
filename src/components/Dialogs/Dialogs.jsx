import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
   return(
      <div className={style.dialogs}>
         <div className={style.dialog_items}>
            <div className={style.dialog + ' ' + style.active}>
               <NavLink to="/dialogs/1">  Slava</NavLink>
            </div>
            <div className={style.dialog}>
               <NavLink to="/dialogs/2">  Anton</NavLink>
            </div>
            <div className={style.dialog}>
               <NavLink to="/dialogs/3">  Alona</NavLink>
            </div>
            <div className={style.dialog}>
               <NavLink to="/dialogs/4">  July</NavLink>
            </div>
            <div className={style.dialog}>
               <NavLink to="/dialogs/5">   Ruslan</NavLink>
            </div>
         </div>
         <div className={style.messages}>
            <div className={style.message}>Hello!!!!</div>
            <div className={style.message}>How are you?</div>
            <div className={style.message}>I'm fine</div>
         </div>
      </div>
   );
}

export default Dialogs;