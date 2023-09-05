import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { ChallengesInfo } from  '../models/index';
import StandardCard from '../ui-components/StandardCard'
import './categoryWiseChallenges.css';
import { Button} from "@aws-amplify/ui-react";
import { useContext } from 'react';
import { LanguageContext } from './languageContext';

const CategoryDisplay = () => {
    const [categories, setCategories] = useState([]);
    const [filterValue, setFilterValue] = useState('');
    const [filterType, setFilterType] = useState('name'); // 'name' or 'Customer'
    const { language } = useContext(LanguageContext);
    console.log({language})
    const fetchCategories = async () => {
      // Fetch all challenges
      const challenges = await DataStore.query(ChallengesInfo);
      

      //add the challenges in the adaptedChallenges as per the language selected
      const adaptedChallenges = challenges.map(challenge => {
        return {
          ...challenge,
          ProjectName: language === 'en' ? challenge.ProjectName : challenge.ProjectName_es,
          Category: language === 'en' ? challenge.Category : challenge.Category_es,
          Customer: language === 'en' && challenge.Customer ? challenge.Customer : challenge.Customer,
          // ... adapt other fields similarly, if any
        };
      });

      //filter the challenges according to the filter chosed
      const filteredChallenges = adaptedChallenges.filter(challenge => {
        if (filterType === 'ProjectName') {
          return challenge.ProjectName.toLowerCase().includes(filterValue.toLowerCase());
      } else if (filterType === 'Customer' && challenge.Customer) {
        return challenge.Customer.toLowerCase().includes(filterValue.toLowerCase());
    }   
    else if (filterType === 'AWSServices' && challenge.AWSServices) {
      const servicesArray = challenge.AWSServices.split(',').map(service => service.trim().toLowerCase());
      return servicesArray.includes(filterValue.toLowerCase());
  }     
        return true;
    });
    

      // Organize challenges by category
      const categoryMap = filteredChallenges.reduce((acc, challenge) => {
        const category = challenge.Category;
        if (!acc[category]) acc[category] = [];
        acc[category].push(challenge);
        return acc;
    }, {});
    console.log('Filter Type:', filterType, 'Filter Value:', filterValue);


      // Convert to array
      const categoryArray = Object.keys(categoryMap).map((category) => ({
        name: category,
        challenges: categoryMap[category],
      }));
      setCategories(categoryArray);
    };
    useEffect(() => {
      fetchCategories();
    }, [filterValue, filterType, language]);
    
    return (
       <div>
        <div className='filter-container'>
          <select 
            /*style= {{ width: "unset",
              height:"46px",
              shrink:"0",
              alignSelf:"stretch",
              size:"large",
              variation:"primary"}}*/
              className="filter-select"
              value={filterType} 
              onChange={e=>setFilterType(e.target.value)}>
            <option value="ProjectName">Challenges Name</option>
            <option value="Customer">Customer</option>
            <option value="AWSServices">AWS Services</option>

          </select>
          <input
            className="filter-input"
          /* style={{width: "unset",
            height:"46px",
            shrink:"0",
            alignSelf:"stretch",
            size:"large",
            variation:"primary"}}*/
            type="text"
            value={filterValue}
            onChange={e=> setFilterValue(e.target.value)}
            placeholder= "Filter challenges..."/>
            <Button
              className="filter-button"
              size="large"
              isDisabled={false}
              variation="primary"
              onClick= {fetchCategories}>Filter</Button>

        </div>
      {categories.map((category) => (
      <div key={category.name} className="category-section">
        <h2 className="category-name">{category.name}</h2>
        <div className="category-container">
          <div className="challenges-container">
            {category.challenges.map((challenge) => (
              <div key={challenge.id} className="challenge-item">
                
                  <StandardCard challengesInfo={challenge} />
                
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
    );
  };
  
  export default CategoryDisplay;
  