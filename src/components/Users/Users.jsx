import React from 'react';
import style from "./Style/styleUsers.module.css";
import userPhoto from "../../images/icon.png";
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
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
                            ? <button disabled={props.followingInProgress.some( id => id === u.id)} onClick={() => {
                                // props.toggleFollowingProgress(true, u.id)
                                props.unfollow(u.id)
                            }}>unfollow</button>

                            : <button disabled={props.followingInProgress.some( id => id === u.id)} onClick={() => {
                                props.follow(u.id)

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