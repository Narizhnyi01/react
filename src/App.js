import React from 'react';
import './App.css';
import Sidebar from './components/Navbar/Navbar';
import News from './components/News/News';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloadrer/Preloader";
import {withSuspence} from "./hoc/withSuspense";
import Container from "@material-ui/core/Container";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends React.Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {

        console.error(promiseRejectionEvent);
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);

    }

    render() {
       if (!this.props.initialized){
           return  <Preloader />
       }
        return (
            <div className={'app_wrapper'}>
                <HeaderContainer/>
                <Sidebar/>
                <div className='wrap_app_content'>
                    <Switch>
                        <Redirect exact from="/" to="/profile" />
                    <Route path='/profile/:userId?'
                           render={ () => <ProfileContainer/> } />
                    <Route path='/dialogs'
                           render={ withSuspence(DialogsContainer) } />
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='*' render={() => <div>not found 404</div>}/>
                    </Switch>
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