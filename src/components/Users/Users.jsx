import React from "react";
import style from "./Style/styleUsers.module.css";
import * as axios from "axios";
import userPhoto from "../../images/icon.png";


let Users = (props) => {
    if( props.users.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => {
            props.setUsers(response.data.items);
        });
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id} className={style.row}>
                    <div className={style.col_1}>
                        <img src={ u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                        { u.followed
                            ? <button onClick={ () => {props.unfollow(u.id)} }>unfollow</button>
                            : <button onClick={ () => {props.follow(u.id)} }>follow</button>}

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