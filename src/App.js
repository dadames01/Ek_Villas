// import React, {useState, useEffect} from 'react';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HostSection from './components/HostSection/HostSection'
import Gallery from './components/Gallery/Gallery'
import Pasion from './components/Villa/Pasion';
import Linda from './components/Villa/Linda';
import Paraiso from './components/Villa/Paraiso';
import VistaHemosa from './components/Villa/Vistahermosa';

function App() {
  return (
    <div className='App'>
      <Router>
      <NavBar/>
      <Routes>
          <Route exact path='/Ek_Villas' element={<div><HostSection /> <Gallery/></div>}></Route>
          <Route exact path='/Ek_Villas/pasion' element={<Pasion />}></Route>
          <Route exact path='/Ek_Villas/linda' element={<Linda />}></Route>
          <Route exact path='/Ek_Villas/paraiso' element={<Paraiso />}></Route>
          <Route exact path='/Ek_Villas/vistahermosa' element={<VistaHemosa />}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;