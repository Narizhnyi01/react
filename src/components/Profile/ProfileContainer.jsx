import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, setUserProfile, updateStatus, savePhoto, saveProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Preloader from "../Common/Preloadrer/Preloader";

class ProfileContainer extends React.Component {

    refreshProfile (){
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId){
                this.props.history.push('/login');
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile ()

    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile ()
        }
     
    }

    render(){
        debugger
        return (

            <div>
                {/*{this.props.isFetching ? <span>loading</span> : null}*/}
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         savePhoto={this.props.savePhoto}
                         isFetching={this.props.isFetching}/>
            </div>

        )
    }

}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    isFetching: state.profilePage.isFetching
});

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfile}),

    withRouter

)(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);





// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// export default connect(mapStateToProps, {getProfile}) (WithUrlDataContainerComponent);