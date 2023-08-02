import logo from './logo.svg';
import './App.css';
import { DataStore } from 'aws-amplify';
import {Post, User} from  './models'
import { useEffect , useState} from 'react';
import SpotlightActionCardCollection from './ui-components/SpotlightActionCardCollection';
import NavBarHeader2 from './ui-components/NavBarHeader2';
import Carousel from './ui-components/Carousel';
import CategoryDisplay from './pages/categoryWiseChallenges';



function App() {
  return (
    <div className="App">
      
        <NavBarHeader2/>
        <div  style={{ 
          paddingTop: '40px',
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', // align items along the row
        }}> 
          <SpotlightActionCardCollection/>
         
        </div>
        <div style={{ margin: '5%' }}>
          <CategoryDisplay/>
        </div>
        
    </div>
  );
}

export default App;
