import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';


const App = () => {
  return (
    <div className='app_wrapper'>
      <Header />
      <Navigation />
      <div className='wrap_app_content'>
        <Profile />
        {/* <Dialogs /> */}
      </div>

    </div>
  );
}



export default App;
