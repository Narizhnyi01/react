import React from 'react';
import style from "./Style/styleUsers.module.css";
import userPhoto from "../../images/icon.png";
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";


let User = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div>
           
            <div className={style.row}>
                    <div className={style.col_1}>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""/>
                        </NavLink>
                        {user.followed
                            ? <button disabled={followingInProgress.some( id => id === user.id)} onClick={() => {
                                // props.toggleFollowingProgress(true, user.id)
                                unfollow(user.id)
                            }}>unfollow</button>

                            : <button disabled={followingInProgress.some( id => id === user.id)} onClick={() => {
                                follow(user.id)

                            }}>follow</button>}

                    </div>
                    <div className={style.row}>
                        <span>
                            <div className="name">{user.name}</div>
                            <div className="status">{user.status}</div>
                        </span>
                        <span>
                           <div>{"user.location.country"}</div>
                           <div>{"user.location.city"}</div>
                       </span>

                    </div>
                </div>
        </div>
    )
}
export default User;