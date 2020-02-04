import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News';
import {Route} from "react-router-dom";



const App = (props) => {
    return (
            <div className='app_wrapper'>
                <Header/>
                <Sidebar state={props.state.sidebarInfo}/>
                <div className='wrap_app_content'>
                    <Route path='/profile' render={() => <Profile
                        dispatch={props.dispatch}
                        profilePage={props.state.profilePage} />}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dispatch={props.dispatch}
                               state={props.state.messagesPage}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                </div>
            </div>
    );
}


export default App;
