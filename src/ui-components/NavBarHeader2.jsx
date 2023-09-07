/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, { useState,useContext } from 'react';
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View, Button, SelectField} from "@aws-amplify/ui-react";
import ciclogo from '../media/ciclogo.png'
import {LanguageContext} from "../pages/languageContext";

export default function NavBarHeader2(props) {
  const { overrides, ...rest } = props;
  const { language, setLanguage } = useContext(LanguageContext);
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // You might later add logic here to globally set the language or fetch data
  };
  return (
    <Flex
      gap="10px"
      direction="column"
      width="100%"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="16px 32px 16px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBarHeader2")}
      {...rest}
    >
      <Flex
        gap="32px"
        direction="row"
        width="100%" 
        height="unset"
        justifyContent="space-between"  // Distribute space between first and last child
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 5")}
      >
        <Flex
          gap="32px"
          direction="row"
          alignItems="center"
          onClick={() => {
            // Use React routing or window location change to navigate to About Page
            window.location.href = "/";
          }}
        >
        <View
          width="34.55px"
          height="30px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Logo")}
        >
          
          <img
          src= {ciclogo}  // Replace this with the actual path to your image
          width="38.55px"
          height="34px"
          style={{
            display: 'block',
            position: 'absolute',
            top: '0%',
            bottom: '0%',
            left: '0%',
            right: '0%',
            borderRadius: '10px'  // Optional: If you want the edges to be rounded
          }}
          {...getOverrideProps(overrides, "Union")}  // If needed
        />

        </View>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="450"
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
          children="Smart City Cloud Innovation Center Project Showcase"
          {...getOverrideProps(overrides, "WebsiteName")}
        ></Text></Flex>
        <Flex alignItems="center">
        {/* Add a dropdown for language selection */}
        <SelectField
          
          variation="primary"
          
          value={language} onChange={handleLanguageChange}>
              <option value="en">English</option>
              <option value="es">Español</option>
              {/* Add more languages as necessary */}
          </SelectField>
          
         <Text
          fontFamily="Inter"
         
          
          color="#3366CC"
          
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          
          whiteSpace="pre-wrap"
          children="About"
          cursor="pointer" // To indicate it's clickable
        
          onClick={() => {
            // Use React routing or window location change to navigate to About Page
            window.location.href = "/about";
          }}
          {...getOverrideProps(overrides, "AboutLink")}  // New override props, if needed
        ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
