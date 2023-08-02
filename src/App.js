import logo from './logo.svg';
import './App.css';
import { DataStore } from 'aws-amplify';
import {Post, User} from  './models'
import { useEffect , useState} from 'react';
import SpotlightActionCardCollection from './ui-components/SpotlightActionCardCollection';
import NavBarHeader2 from './ui-components/NavBarHeader2';




function App() {
  return (
    <div className="App">
      
        <NavBarHeader2/>
        <div  style={{ 
          paddingTop: '20px',
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', // align items along the row
        }}> 
          <SpotlightActionCardCollection/>
        </div>
      
    </div>
  );
}

export default App;
