// index.js file -  responsible for initializing and rendering your React application

// React: This is the core library for building user interfaces. It allows you to create components and manage their state.
import React from 'react';
// display react components into the DOM
import ReactDOM from 'react-dom/client';
import './index.css';
// root component-entry point for all other components
import App from './App';
// This is imported from react-redux. The Provider component is used to make the Redux store available to all components in your app
import {Provider} from 'react-redux';

import store from './redux/store'; 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // ensures that the app is using the best practices and is future-proof(helps to catch errors)
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>
);

