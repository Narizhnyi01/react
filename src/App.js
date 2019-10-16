import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News';
import {Route} from "react-router-dom";



const App = (props) => {

    return (

            <div className='app_wrapper'>
                <Header/>
                <Navbar state={props.state.navbar}/>
                <div className='wrap_app_content'>
                    <Route path='/profile' render={() => <Profile
                        addPost={props.addPost}
                        profilePage={props.state.profilePage}
                        updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs addMessage={props.addMessage} state={props.state.messagesPage}/>}/>
                    <Route path='/news' render={() => <News/>}/>

                </div>
            </div>


    );
}


export default App;
