import React from 'react';
import style from "./Style/styleUsers.module.css";
import userPhoto from "../../images/icon.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i=1; i <= pagesCount; i++){
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && style.select_page} onClick={(e) => {
                       props.onPageChanged(p);
                    }}>{p}</span>
                })}

            </div>
            {
                props.users.map(u => <div key={u.id} className={style.row}>
                    <div className={style.col_1}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                        </NavLink>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'f05ee757-33fe-4bd2-8295-15ffca0c8738'
                                    }

                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0){
                                            props.unfollow(u.id)
                                        }
                                    })

                            }}>unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'f05ee757-33fe-4bd2-8295-15ffca0c8738'
                                    }

                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0){
                                            props.follow(u.id)
                                        }
                                    })
                            }}>follow</button>}

                    </div>
                    <div className={style.row}>
                        <span>
                            <div className="name">{u.name}</div>
                            <div className="status">{u.status}</div>
                        </span>
                        <span>
                           <div>{"u.location.country"}</div>
                           <div>{"u.location.city"}</div>
                       </span>

                    </div>
                </div>)
            }
        </div>
    );
}
export default Users;