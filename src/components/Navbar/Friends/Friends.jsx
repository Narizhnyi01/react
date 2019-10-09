import React from 'react';
import style from '../Navbar.module.css';

const Friends = (props) => {
    let imgFriends =
        props.state.fiends.map( friend => <div className={style.box_friend}><img src={friend.link} alt=""/></div>)
    return (
        <div>
            <div className={style.title}>Friends</div>
            <div className={style.friend_wrap}>
                {imgFriends}
            </div>
        </div>
    );
}

export default Friends;