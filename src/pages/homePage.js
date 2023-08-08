
import CategoryDisplay from './categoryWiseChallenges';
import NavBarHeader2 from '../ui-components/NavBarHeader2';
import SpotlightActionCardCollection from '../ui-components/SpotlightActionCardCollection';


function homePage() {
  const styles = {
    margin :'0 0 0 5%',
    // Makes it a row
    justifyContent: 'center', // Centers items along the row
    overflowX: 'auto', // Allows horizontal scrolling
    height:"100vh",
    alignItems: "center"
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
