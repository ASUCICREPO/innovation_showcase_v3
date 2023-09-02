import logo from './logo.svg';
import './App.css';
import { DataStore } from 'aws-amplify';
import {Post, User} from  './models'
import { useEffect , useState} from 'react';
import SpotlightActionCardCollection from './ui-components/SpotlightActionCardCollection';
import NavBarHeader2 from './ui-components/NavBarHeader2';
import CategoryDisplay from './pages/categoryWiseChallenges';
import { BrowserRouter as Router, Route, Routes }from 'react-router-dom';
import ProductDetail from './ui-components/ProductDetail'
import HomePage from './pages/homePage';
import About from './pages/About';
import MarketingFooterBrand from './ui-components/MarketingFooterBrand'
import { LanguageProvider } from './pages/LanguageContext';




function App() {

  return (
    <LanguageProvider>
    <Router>
      <NavBarHeader2/>
      <div className='root-page'>
        <Routes>
          <Route path='/' element={< HomePage />} />
          <Route path="/:id" element={<ProductDetail />} />
          <Route path="/About" element={<About/>} />

        </Routes>
        <MarketingFooterBrand/>
      </div>
    </Router>
    </LanguageProvider>
  );
}

export default App;
