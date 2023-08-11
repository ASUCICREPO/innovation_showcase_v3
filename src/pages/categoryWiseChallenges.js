import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { ChallengesInfo } from  '../models/index';
import StandardCard from '../ui-components/StandardCard'
import './categoryWiseChallenges.css';

const CategoryDisplay = () => {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      const fetchCategories = async () => {
        // Fetch all challenges
        const challenges = await DataStore.query(ChallengesInfo);
  
        // Organize challenges by category
        const categoryMap = challenges.reduce((acc, challenge) => {
          const category = challenge.Category;
          if (!acc[category]) acc[category] = [];
          acc[category].push(challenge);
          return acc;
        }, {});
  
        // Convert to array
        const categoryArray = Object.keys(categoryMap).map((category) => ({
          name: category,
          challenges: categoryMap[category],
        }));
        console.log('Categories:', categoryArray);
        setCategories(categoryArray);
      };
  
      fetchCategories();
    }, []);
  
    return (
       <div>
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
  