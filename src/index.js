import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@aws-amplify/ui-react/styles.css'
import { Amplify } from 'aws-amplify'

import { AmplifyProvider } from '@aws-amplify/ui-react' 
import reportWebVitals from './reportWebVitals';
import {
  Predictions,
  AmazonAIPredictionsProvider
} from '@aws-amplify/predictions';
import awsconfig from './aws-exports';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AmplifyProvider>
    <App />
  </AmplifyProvider>
);

//this ties the front-end to the backend

Amplify.configure(awsconfig);
Predictions.addPluggable(new AmazonAIPredictionsProvider());


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
