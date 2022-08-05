// import React, {useState, useEffect} from 'react';
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HostSection from './components/HostSection/HostSection'
import Gallery from './components/Gallery/Gallery'
import Villa from './components/Villa/Villa';


function App() {
  const [villaName, setVillaName] = useState('')

  const onChangePage = ((villaName) => {
    setVillaName(villaName);
    window.scrollTo(0, 0)
  })
  return (
    <div className='App'>
      <Router>
      <NavBar changePage={onChangePage}/>
      <Routes>
          <Route exact path='/Ek_Villas' element={<div><HostSection /> <Gallery changePage={onChangePage}/></div>}></Route>
          <Route exact path='/Ek_Villas/villa' element={< Villa villaName={villaName}/>}></Route>
          <Route exact path='/contact' element={< Gallery />}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
