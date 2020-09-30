import React from 'react';
import './App.css';
import Sidebar from './components/Navbar/Navbar';
import News from './components/News/News';
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloadrer/Preloader";
import {withSuspence} from "./hoc/withSuspense";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();

    }
    render() {
       if (!this.props.initialized){
           return  <Preloader />
       }
        return (
            <div className='app_wrapper'>
                <HeaderContainer/>
                <Sidebar/>
                <div className='wrap_app_content'>
                    <Route path='/profile/:userId?'
                           render={ withSuspence(ProfileContainer) } />
                    <Route path='/dialogs'
                           render={ withSuspence(DialogsContainer) } />
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>

                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});
export default compose (
    withRouter,
    connect(mapStateToProps, { initializeApp })) (App);

