import React, { useRef } from "react";
import { ChallengesInfo } from "../models";
import {
  createDataStorePredicate,
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import SpotlightActionCard from "./SpotlightActionCard";
import './spotlightActionCardCollection.css'

export default function SpotlightActionCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsFilterObj = { field: "Highlight", operand: true, operator: "eq" };
  const itemsFilter = createDataStorePredicate(itemsFilterObj);
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: ChallengesInfo,
    criteria: itemsFilter,
  }).items;

  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);

  return (
    <div>
      <h2 style={{fontFamily:"Inter", textAlign: "center", marginTop: '5%'}}>The Projects That Define Us</h2> {/* Your heading goes here */}
      <div className="carousel-container" {...rest}>
        {items?.map((item, index) => (
          <div className="carousel-item" key={item.id}>
            <SpotlightActionCard
              challengesInfo={item}
              {...(overrideItems && overrideItems({ item, index }))}
            />
          </div>
        ))}
      </div>
    </div>
  );
}