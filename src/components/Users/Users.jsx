import React from 'react';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {

    return (
        <div>

            <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize}
                       onPageChanged={onPageChanged}/>
            {
                props.users.map(u => <User key={u.id}
                                           user={u}
                                           followingInProgress={props.followingInProgress}
                                           unfollow={props.unfollow}
                                           follow={props.follow}/>
                )
            }
        </div>
    );
}
export default Users;