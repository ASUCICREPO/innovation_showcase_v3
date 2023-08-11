import Feedback1 from '../ui-components/Feedback1';
import OurTeam from '../ui-components/OurTeam';
import Message from '../ui-components/Message';
import './About.css';

const About = () => {

  
    return (
    <div>
        <div className= "mission-container">
            <Message style={{margin: "5%"}}/>
            <Feedback1 style={{margin: "5%"}}/>
        </div>
        <div className='our-team'>
            <OurTeam/>
        </div>
    </div>
    );
  };
  
  export default About;
  