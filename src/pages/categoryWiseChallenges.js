import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { ChallengesInfo } from  '../models/index';
import StandardCard from '../ui-components/StandardCard'
import './categoryWiseChallenges.css';

const CategoryDisplay = () => {
    const [categories, setCategories] = useState([]);
    const [filterValue, setFilterValue] = useState('');
    const [filterType, setFilterType] = useState('name'); // 'name' or 'Customer'
    const fetchCategories = async () => {
      // Fetch all challenges
      const challenges = await DataStore.query(ChallengesInfo);

      const filteredChallenges = challenges.filter(challenge => {
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
    }, [filterValue, filterType]);
    
    return (
       <div>
        <div className='filter-section'>
          <select value={filterType} onChange={e=>setFilterType(e.target.value)}>
            <option value="ProjectName">Challenges Name</option>
            <option value="Customer">Customer</option>
            <option value="AWSServices">AWS Services</option>

          </select>
          <input
            type="text"
            value={filterValue}
            onChange={e=> setFilterValue(e.target.value)}
            placeholder= "Filter challenges..."/>
            <button onClick={fetchCategories}>Filter</button>

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
  