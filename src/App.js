import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navbar/Navigation';
import Profile from './components/Profile/Profile';


const App = () => {
  return (
    <div className='app_wrapper'>
      <Header />
      <Navigation />
      <Profile />
    </div>
  );
}



export default App;
