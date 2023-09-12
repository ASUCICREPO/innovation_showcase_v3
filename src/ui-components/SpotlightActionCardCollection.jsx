import React, { useState, useEffect } from 'react';
import { ChallengesInfo } from '../models';
import { 
  createDataStorePredicate, 

  useDataStoreBinding,
} from '@aws-amplify/ui-react/internal';
import SpotlightActionCard from './SpotlightActionCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './spotlightActionCardCollection.css'; 
import './carouselStyle.css';

export default function SpotlightActionCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsFilterObj = { field: 'Highlight', operand: true, operator: 'eq' };
  const itemsFilter = createDataStorePredicate(itemsFilterObj);
  const [items, setItems] = useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: 'collection',
    model: ChallengesInfo,
    criteria: itemsFilter,
  }).items;

  useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);

  const settings = {
    dots:true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    arrows: true
  };

  return (
    <div>
      <h2 style={{ fontFamily: 'Inter', textAlign: 'center', marginTop: '5%' }}>Addressing Community Challenges With Technology</h2>
      <div className="carousel-container">
        <Slider {...settings}>
          {items?.map((item, index) => (
            <div key={item.id}>
              <SpotlightActionCard
                challengesInfo={item}
                {...(overrideItems && overrideItems({ item, index }))}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
