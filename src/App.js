// import React, {useState, useEffect} from 'react';
import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HostSection from './components/HostSection/HostSection'
import Gallery from './components/Gallery/Gallery'
import Pasion from './components/Villa/Pasion';
import Linda from './components/Villa/Linda';
import Paraiso from './components/Villa/Paraiso';
import VistaHemosa from './components/Villa/Vistahermosa';
import Grecia from './components/Villa/Grecia';

function App() {
  const [page, setPage] = useState('/')

  const changePage = (newPage => {
    setPage(newPage)
    window.scrollTo(0, 0);
  })

  return (
    <div className='App'>
      <Router>
      <NavBar changePage={changePage}/>
      {(() => {
        switch (page) {
          case 'pasion':
            return <Pasion />
          case 'linda':
            return <Linda />
          case 'paraiso':
            return <Paraiso />
          case 'vistahermosa':
            return <VistaHemosa />
          case 'grecia':
            return <Grecia />
          default:
            return <div><HostSection/> <Gallery changePage={changePage}/></div>
        }
      })()}
      </Router>
    </div>
  );
}

export default App;
