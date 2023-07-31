/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { ChallengesInfo } from "../models";
import {
  createDataStorePredicate,
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import SpotlightActionCard from "./SpotlightActionCard";
import { Collection } from "@aws-amplify/ui-react";
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
    <Collection
      type="list"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={3}
      direction="row"
      alignItems="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "SpotlightActionCardCollection")}
      {...rest}
    >
      {(item, index) => (
        <SpotlightActionCard
          challengesInfo={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></SpotlightActionCard>
      )}
    </Collection>
  );
}
