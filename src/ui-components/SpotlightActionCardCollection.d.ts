/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SpotlightActionCardProps } from "./SpotlightActionCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SpotlightActionCardCollectionOverridesProps = {
    SpotlightActionCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    SpotlightActionCard?: SpotlightActionCardProps;
} & EscapeHatchProps;
export declare type SpotlightActionCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => SpotlightActionCardProps;
} & {
    overrides?: SpotlightActionCardCollectionOverridesProps | undefined | null;
}>;
export default function SpotlightActionCardCollection(props: SpotlightActionCardCollectionProps): React.ReactElement;
