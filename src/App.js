// import React, {useState, useEffect} from 'react';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HostSection from './components/HostSection/HostSection'
import Gallery from './components/Gallery/Gallery'

function App() {
  return (
    <div>
      <NavBar />
      <HostSection/>
      <Gallery />
    </div>
  );
}

export default App;
