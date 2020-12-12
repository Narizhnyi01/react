import React from "react"
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage,

     toggleFollowingProgress,

    unfollow
} from "../../redux/users-reducer";

import Preloader from "../Common/Preloadrer/Preloader";

import {compose} from "redux";
import Users from "./Users";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers, getUsersSuperSelector
} from "../../redux/users-selector";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalItemsCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),

    }
}
export default compose(

    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers})
)(UsersContainer)