// hooks/useTranslate.js

import { useState } from 'react';
import { Amplify, Predictions } from 'aws-amplify';

function useTranslate() {
    const [translatedText, setTranslatedText] = useState("");
    const [error, setError] = useState(null);

    async function translate(inputText) {
        try {
            let result = await Predictions.convert({
                translateText: {
                    source: {
                        text: inputText,
                        language: "en"  // Assuming source content is in English
                    },
                    targetLanguage: "es"  // Example target language
                },
                providerName: "AWS"
            });

            setTranslatedText(result.text);
        } catch (err) {
            console.error("Translation failed:", err);
            setError(err);
        }
    }

    return { translatedText, error, translate };
}

export default useTranslate;
