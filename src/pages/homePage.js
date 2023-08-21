import React, { useEffect, useState } from 'react';
import CategoryDisplay from './categoryWiseChallenges';
import SpotlightActionCardCollection from '../ui-components/SpotlightActionCardCollection';


function homePage() {
  const styles = {
    margin: '0 0 0 5%',
    justifyContent: 'center',
    height: "100vh",  // commented out for testing
    alignItems: "center",
    width: "90%",
    overflowX: "visible",
    overflowY: "visible"
  }
  
  return (
    
    <div className="App">
        <div  style={styles}> 
          <SpotlightActionCardCollection/>
        </div>
        <div style={{margin: '3%'}}>
          <CategoryDisplay/>
        </div>
    </div>
   
  );
}

export default homePage;
