import React from 'react';
import css from './Dialogs.module.css';   
import DialogItem from './DialogItem/DialogItem'; 
import MessageItem from './MessagesItem/MessagesItem';
import {onChangeMessageInputValueActionCreator, addMessageActionCreator} from './../../redux/state';


// map - изменение некоторых элементов массива и присваивание его в другую переменную
// стрелочные функции работают пока не сделают свою функию со всеми даными в массиве, с которыми они работают
// в этом  случае берется данные из массивов и возвращается разметка с этими данными,
// разметка возвращается до тех пор с разными данными пока они не закончатся   

let Dialogs = (props) => {   
    
let dialogsElements = props.state.dialogsData.map(d => <DialogItem id={d.id} avatar={d.avatar} user={d.user}/> );
let messagesElements = props.state.messagesData.map( m => <MessageItem id={m.id} message={m.message} /> )

let newPostElement = React.createRef();
let addMessage = () => { 
    props.dispatch(addMessageActionCreator());
    newPostElement.current.value = '';
}


let onChangeInputValue = () =>{ 
    let text = newPostElement.current.value;    
    props.dispatch(onChangeMessageInputValueActionCreator(text));
}

    return(
        <div className={css.dialogPage}> 
            <div className={css.dialogsBlock}>
                 { dialogsElements }
            </div>

            <div className={css.messagesBlock}> 
                <div className={css.messageItemsBlock}>
                    { messagesElements } 
                </div>
                <div className={css.sendBlock}>
                    <textarea onChange={onChangeInputValue} ref={newPostElement} />
                    <button onClick={addMessage}>SEND</button>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;