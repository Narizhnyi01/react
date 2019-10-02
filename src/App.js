import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News';
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <Header />
        <Navigation />
        <div className='wrap_app_content'>
          <Route path='/profile' render={ () => <Profile />} />
          <Route path='/dialogs' render={ () => <Dialogs />} />
          <Route path='/news' render={ () => <News />} />
          
        </div>
      </div>
    </BrowserRouter>

  );
}



export default App;
