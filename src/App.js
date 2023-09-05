
import './App.css';

import NavBarHeader2 from './ui-components/NavBarHeader2';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes }from 'react-router-dom';
import ProductDetail from './ui-components/ProductDetail'
import HomePage from './pages/homePage';
import About from './pages/About';
import MarketingFooterBrand from './ui-components/MarketingFooterBrand'
import { LanguageContext } from './pages/languageContext';




function App() {

  const [language, setLanguage] = useState('en');
  console.log(language)

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
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
    </LanguageContext.Provider>
  );
}

export default App;
