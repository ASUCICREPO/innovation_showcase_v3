/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, { useEffect, useState } from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
import { useParams, useLocation } from 'react-router-dom';


export default function ProductDetail(props) {
  const {  overrides, ...rest } = props;
  const location = useLocation();
  const challengesInfo = location.state?.challengesInfo; // Extract challengesInfo from location's state
 

  console.log(challengesInfo)
  const buttonTwoNineSevenSixSixNineEightZeroOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: challengesInfo?.github,
  });
  const buttonTwoNineSevenSixSixNineEightOneOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: challengesInfo?.ProjectInfoURL,
  });
  const buttonTwoNineSevenSixSixNineEightTwoOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: challengesInfo?.Demo,
  });
  
  return (
    <Flex
      margin= "5vh 5vh 5vh 5vh"
      gap="24px"
      direction="row"
      max-width="1160px"
      height="100vh"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProductDetail")}
      {...rest}
    >
      <Flex
        gap="32px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 401")}
      >
        <Image
          width="unset"
          height="40vh"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          borderRadius={10}
          src={challengesInfo?.ProjectPic}
          {...getOverrideProps(overrides, "image")}
        ></Image>
        <Flex
          gap="32px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 6")}
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
            {...getOverrideProps(overrides, "Frame 7")}
          >
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="600"
              color="rgba(13,26,38,1)"
              lineHeight="36px"
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
              children="Approach"
              {...getOverrideProps(overrides, "Approach")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
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
              children={challengesInfo?.approach}
              {...getOverrideProps(
                overrides,
                "iat"
              )}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 402")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="600"
          color="rgba(13,26,38,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={challengesInfo?.ProjectName}
          {...getOverrideProps(overrides, "Project Name")}
        ></Text>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 27")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="18px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            textDecoration="underline"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={challengesInfo?.Category}
            {...getOverrideProps(overrides, "Category")}
          ></Text>
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
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={challengesInfo?.Customer}
            {...getOverrideProps(overrides, "Company name")}
          ></Text>
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
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={challengesInfo?.AWSServices}
            {...getOverrideProps(overrides, "AWS Services")}
          ></Text>
          <Flex
            gap="24px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 28")}
          >
            {challengesInfo?.github && (
              <Button
                width="unset"
                height="unset"
                gap="24px"
                shrink="0"
                size="default"
                isDisabled={false}
                variation="default"
                children="GitHub"
                onClick={() => {
                  buttonTwoNineSevenSixSixNineEightZeroOnClick();
                }}
                {...getOverrideProps(overrides, "Button29766980")}
              ></Button>
            )}
            {challengesInfo?.ProjectInfoURL && (
            <Button
              width="unset"
              height="unset"
              gap="24px"
              shrink="0"
              size="default"
              isDisabled={false}
              variation="default"
              children="ProjectURL"
              onClick={() => {
                buttonTwoNineSevenSixSixNineEightOneOnClick();
              }}
              {...getOverrideProps(overrides, "Button29766981")}
            ></Button>)}
            {challengesInfo?.Demo && (
            <Button
              width="unset"
              height="unset"
              gap="24px"
              shrink="0"
              size="default"
              isDisabled={false}
              variation="default"
              children="Demo/YouTube"
              onClick={() => {
                buttonTwoNineSevenSixSixNineEightTwoOnClick();
              }}
              {...getOverrideProps(overrides, "Button29766982")}
            ></Button>)}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
