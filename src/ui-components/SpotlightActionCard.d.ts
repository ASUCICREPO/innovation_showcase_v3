/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ChallengesInfo } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SpotlightActionCardOverridesProps = {
    SpotlightActionCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text"?: PrimitiveOverrideProps<FlexProps>;
    ProjectName?: PrimitiveOverrideProps<TextProps>;
    Category?: PrimitiveOverrideProps<TextProps>;
    CustomerName?: PrimitiveOverrideProps<TextProps>;
    AWSServices?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SpotlightActionCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    challengesInfo?: ChallengesInfo;
    Details?: String;
} & {
    overrides?: SpotlightActionCardOverridesProps | undefined | null;
}>;
export default function SpotlightActionCard(props: SpotlightActionCardProps): React.ReactElement;
