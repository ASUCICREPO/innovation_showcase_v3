
import CategoryDisplay from './categoryWiseChallenges';
import NavBarHeader2 from '../ui-components/NavBarHeader2';
import SpotlightActionCardCollection from '../ui-components/SpotlightActionCardCollection';


function homePage() {
  return (
    
    <div className="App">
      
        
        <div  style={{ 
          paddingTop: '40px',
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', // align items along the row
        }}> 
          <SpotlightActionCardCollection/>
        </div>
        <div style={{ margin: '3%' }}>
          <CategoryDisplay/>
        </div>
    </div>
   
  );
}

export default homePage;
