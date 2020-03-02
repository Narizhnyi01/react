import React from "react"
import style from "./Style/styleUsers.module.css"

let Users = (props) => {

    if( props.users.length === 0){
        props.setUsers(
            [
                {id: 1, urlPhoto: 'https://www.aviatextile.com/upload/iblock/1ca/%D0%9F%D0%B8%D0%BB%D0%BE%D1%82_%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80_%D0%B0%D0%B2%D0%B8%D0%B0%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%B8%D0%BB%D1%8C_2.png',
                    followed: false, fullName: 'Viacheslav', status: 'I am learn React', location:{ country: 'Ukraine', city: 'Kharkiv'} },
                {id: 2, urlPhoto: 'https://www.aviatextile.com/upload/iblock/1ca/%D0%9F%D0%B8%D0%BB%D0%BE%D1%82_%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80_%D0%B0%D0%B2%D0%B8%D0%B0%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%B8%D0%BB%D1%8C_2.png',
                    followed: false, fullName: 'Dmitry', status: 'I am learn React too', location:{ country: 'Russia', city: 'Moscow'} },
                {id: 3, urlPhoto: 'https://www.aviatextile.com/upload/iblock/1ca/%D0%9F%D0%B8%D0%BB%D0%BE%D1%82_%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80_%D0%B0%D0%B2%D0%B8%D0%B0%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%B8%D0%BB%D1%8C_2.png',
                    followed: true, fullName: 'Anton', status: 'I am learn React too', location:{ country: 'Belarus', city: 'Minsk'} }
            ]
        )
    }
    return (
        <div>
            {
                props.users.map(u => <div className={style.row}>
                    <div className={style.col_1}>
                        <img src={u.urlPhoto} alt=""/>
                        { u.followed
                            ? <button onClick={ () => {props.unfollow(u.id)} }>unfollow</button>
                            : <button onClick={ () => {props.follow(u.id)} }>follow</button>}

                    </div>
                    <div className={style.row}>
                        <span>
                            <div className="name">{u.fullName}</div>
                            <div className="status">{u.status}</div>
                        </span>
                        <span>
                           <div>{u.location.country}</div>
                           <div>{u.location.city}</div>
                       </span>

                    </div>
                </div>)
            }
        </div>
    );
}

export default Users;