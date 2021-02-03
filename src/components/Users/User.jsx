import React from 'react';
import style from "./Style/styleUsers.module.css";
import userPhoto from "../../images/icon.png";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";



let User = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div>
           
            <div className={style.row}>
                    <div className={style.col_1}>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""/>
                        </NavLink>
                        <span className={style.row_name}>
                            <div className={style.name}>{user.name}</div>
                            <div className="status">{user.status}</div>
                        </span>
                    </div>
                    <div>


                        {user.followed
                            ? <Button variant="contained" color="secondary" disabled={followingInProgress.some( id => id === user.id)} onClick={() => {

                                unfollow(user.id)
                            }}>unfollow</Button>

                            : <Button variant="contained" color="primary" disabled={followingInProgress.some( id => id === user.id)} onClick={() => {
                                follow(user.id)

                            }}>follow</Button>}

                    </div>
                </div>
        </div>
    )
}
export default User;