import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';
import {onChangePostInputValueActionCreator, addPostActionCreator} from './../../../redux/state';

 
// createRef - создание ссылки к которому нужно обратиться за value, не используя DOM
// задаем ref как ссылку туда и обращаемся с функцией
// при клике на addPost вызывается функция, которая берет значения из textarea, ссылка которой действует с ref
 
const MyPosts = (props) => { 
    let postsElements = props.postsData.map( p => <Post id={p.id} message={p.message} likes={p.likes} /> );

    let newPostElement = React.createRef();

    let addPost = () => { 
        props.dispatch(addPostActionCreator());
    }

    let onChangeInputValue = () =>{ 
        let text = newPostElement.current.value;    
        props.dispatch(onChangePostInputValueActionCreator(text));
    }

    return (
        
        <div className={css.postsWrapper}>
            
            <div className={css.addPost}>  
                <div className={css.cannotSend}></div>
                <textarea ref={newPostElement} onChange={onChangeInputValue} value={props.postInputValue} /> 
                <button onClick={addPost} >add post</button>  
            </div>
            <div className={css.postsBlock}> 
                 { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;
