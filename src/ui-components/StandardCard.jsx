/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function StandardCard(props) {
  const { challengesInfo, overrides, ...rest } = props;
  const [cardAreaBackgroundColor, setCardAreaBackgroundColor] =
    useStateMutationAction(undefined);
  const standardCardOnMouseEnter = () => {
    setCardAreaBackgroundColor("#00000008");
  };
  const standardCardOnMouseLeave = () => {
    setCardAreaBackgroundColor("transparent");
  };
  return (
    <Flex
      gap="0"
      direction="column"
      width="287px"
      height="217px"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(0,0,0,0.1)"
      borderRadius="7.5px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      onMouseEnter={() => {
        standardCardOnMouseEnter();
      }}
      onMouseLeave={() => {
        standardCardOnMouseLeave();
      }}
      {...getOverrideProps(overrides, "StandardCard")}
      {...rest}
    >
      <Image
        width="unset"
        height="160px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        borderRadius="7px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={challengesInfo?.ProjectPic}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="9px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 9px 16px 9px"
        backgroundColor={cardAreaBackgroundColor}
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Group")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={challengesInfo?.ProjectName}
            {...getOverrideProps(overrides, "4bds 3 ba 2,530 sqft - Active")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
