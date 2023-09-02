// contexts/LanguageContext.js

import { createContext, useContext, useState } from "react";
import { Predictions } from 'aws-amplify';

const LanguageContext = createContext();

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function LanguageProvider({ children }) {
  const [currentLanguage, setLanguage] = useState("en");  // Default language is English
  
  async function translateText(text) {
      let result = await Predictions.convert({
          translateText: {
              source: {
                  text,
                  language: "en" // Assuming your source content is in English
              },
              targetLanguage: currentLanguage
          }
      });
      return result.text;
  }

  const value = {
    currentLanguage,
    setLanguage,
    translateText
  };
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
