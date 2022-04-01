import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Intro from './pages/Intro';



const App = () => {
  return (
    <>
      <Navbar/>
      <Intro/>
    </>
  )
}

export default App


/* 
Setup
1. Change title in public/index.html
2. Rename src/App.js => App.jsx
3. Clear out code from return in App.js
4. Clear out code from App.css
5. Add global reset to index.css
6. Install sass
7. Rename App.css => App.module.scss & change import
*/
