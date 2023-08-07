
import CategoryDisplay from './categoryWiseChallenges';
import NavBarHeader2 from '../ui-components/NavBarHeader2';
import SpotlightActionCardCollection from '../ui-components/SpotlightActionCardCollection';


function homePage() {
  const styles = {
    margin: '2% 0% 0% 10%',
    display: 'flex',
    flexDirection: 'row', // Makes it a row
    justifyContent: 'center', // Centers items along the row
    width: '80%', // Uses 90% of the full width
    overflowX: 'auto', // Allows horizontal scrolling
    
  }
  return (
    
    <div className="App">
        <div  style={styles}> 
          <SpotlightActionCardCollection/>
        </div>
        <div style={{ margin: '3%' }}>
          <CategoryDisplay/>
        </div>
    </div>
   
  );
}

export default homePage;
