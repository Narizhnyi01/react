import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = (props) => {
    return (
            <div className='app_wrapper'>
                <Header/>
                <Sidebar/>
                <div className='wrap_app_content'>
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                </div>
            </div>
    );
}


export default App;
