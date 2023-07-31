/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ChallengesInfo } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChallengesInfoUpdateFormInputValues = {
    ProjectName?: string;
    Category?: string;
    Customer?: string;
    AWSServices?: string;
    ProjectPic?: string;
    ProjectInfoURL?: string;
    Demolink?: string;
    Highlight?: boolean;
};
export declare type ChallengesInfoUpdateFormValidationValues = {
    ProjectName?: ValidationFunction<string>;
    Category?: ValidationFunction<string>;
    Customer?: ValidationFunction<string>;
    AWSServices?: ValidationFunction<string>;
    ProjectPic?: ValidationFunction<string>;
    ProjectInfoURL?: ValidationFunction<string>;
    Demolink?: ValidationFunction<string>;
    Highlight?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChallengesInfoUpdateFormOverridesProps = {
    ChallengesInfoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ProjectName?: PrimitiveOverrideProps<TextFieldProps>;
    Category?: PrimitiveOverrideProps<TextFieldProps>;
    Customer?: PrimitiveOverrideProps<TextFieldProps>;
    AWSServices?: PrimitiveOverrideProps<TextFieldProps>;
    ProjectPic?: PrimitiveOverrideProps<TextFieldProps>;
    ProjectInfoURL?: PrimitiveOverrideProps<TextFieldProps>;
    Demolink?: PrimitiveOverrideProps<TextFieldProps>;
    Highlight?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ChallengesInfoUpdateFormProps = React.PropsWithChildren<{
    overrides?: ChallengesInfoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    challengesInfo?: ChallengesInfo;
    onSubmit?: (fields: ChallengesInfoUpdateFormInputValues) => ChallengesInfoUpdateFormInputValues;
    onSuccess?: (fields: ChallengesInfoUpdateFormInputValues) => void;
    onError?: (fields: ChallengesInfoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChallengesInfoUpdateFormInputValues) => ChallengesInfoUpdateFormInputValues;
    onValidate?: ChallengesInfoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ChallengesInfoUpdateForm(props: ChallengesInfoUpdateFormProps): React.ReactElement;
