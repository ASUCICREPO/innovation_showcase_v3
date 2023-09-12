/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../pages/LanguageContext';
import {
  getOverrideProps,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";

export default function SpotlightActionCard(props) {
  const { language } = useContext(LanguageContext);
    
  const { challengesInfo, Details, overrides, ...rest } = props;
  const [cardAreaBackgroundColor, setCardAreaBackgroundColor] =
    useStateMutationAction(undefined);
  const cardAreaOnMouseEnter = () => {
    setCardAreaBackgroundColor("#00000008");
  };
  const cardAreaOnMouseLeave = () => {
    setCardAreaBackgroundColor("transparent");
  };
  // const buttonOnClick = useNavigateAction({
  //   target: "_blank",
  //   type: "url",
  //   url: challengesInfo?.Demo,
  // });

  const navigate = useNavigate();
  

  return (
    <Flex
      gap="0"
      direction="column"
      width="358px"
      height="440px"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      borderRadius="5px"
      {...getOverrideProps(overrides, "SpotlightActionCard")}
      {...rest}
    >
      <Image
        width="358px"
        height="160px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        borderRadius="5px"
        src={challengesInfo?.ProjectPic}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="280px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 16px 16px"
        backgroundColor={cardAreaBackgroundColor}
        onMouseEnter={() => {
          cardAreaOnMouseEnter();
        }}
        onMouseLeave={() => {
          cardAreaOnMouseLeave();
        }}
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Main Text")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={language === 'en' ? challengesInfo?.ProjectName : challengesInfo?.ProjectName_es}
            {...getOverrideProps(overrides, "ProjectName")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
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
            children={language === 'en' ? challengesInfo?.Category : challengesInfo?.Category_es}
            {...getOverrideProps(overrides, "Category")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
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
            children={challengesInfo?.Customer}
            {...getOverrideProps(overrides, "CustomerName")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
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
            children={challengesInfo?.AWSServices}
            {...getOverrideProps(overrides, "AWSServices")}
          ></Text>
        </Flex>
        <Button
          width="unset"
          height="46px"
          shrink="0"
          alignSelf="stretch"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Get more details"
          onClick={() => {
            if (language === 'en' ? challengesInfo?.ProjectName === 'Celebrity recognition' : challengesInfo?.ProjectName_es === 'Celebrity recognition') {
              window.location.href = 'https://d3sbom3awy8orp.cloudfront.net/index.html#!/';
            } else {
              navigate(`${challengesInfo?.id}`, {
                state: { challengesInfo }
              });
            }
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
