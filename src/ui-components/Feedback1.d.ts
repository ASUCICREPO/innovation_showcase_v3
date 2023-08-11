/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextAreaFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Feedback1OverridesProps = {
    Feedback1?: PrimitiveOverrideProps<FlexProps>;
    "Frame 428"?: PrimitiveOverrideProps<FlexProps>;
    TextField3978791?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3978792?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3978793?: PrimitiveOverrideProps<TextFieldProps>;
    TextAreaField?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 283978796"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 283978797"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon3978798?: MyIconProps;
    LinkedIn?: PrimitiveOverrideProps<TextProps>;
    "Frame 30"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon3978801?: MyIconProps;
    Email?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Feedback1Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Feedback1OverridesProps | undefined | null;
}>;
export default function Feedback1(props: Feedback1Props): React.ReactElement;
