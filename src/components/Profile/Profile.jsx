import React from 'react';
import css from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Description from './Description/Description';

const Profile = (props) => { 
    return (
        <div className={css.profile}>
           <Description />
           <MyPosts postsData={props.profilePage.postsData} 
                            postInputValue={props.profilePage.postInputValue}
                            dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;
