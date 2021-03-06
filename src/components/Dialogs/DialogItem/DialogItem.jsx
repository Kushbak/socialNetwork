import React from 'react';
import css from './../Dialogs.module.css'; 
import { NavLink } from 'react-router-dom';



const DialogItem = (props) => { 
    let path = "/dialogs/" + props.id
    return(
        <div className={css.dialogItem}> 
                <NavLink to={path} activeClassName={css.active} className={css.dialog}><img src={props.avatar} alt="avatar"/> <span>{props.user}</span></NavLink> 
        </div>
    );
}

export default DialogItem;