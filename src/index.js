import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { configureStore, createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import qaReducer from './store/qaSlice'
const root = ReactDOM.createRoot(document.getElementById('root'));



const store = configureStore({
  reducer: {
    questions: qaReducer
  }
})
root.render(
  <ChakraProvider>
  <Provider store={store}>
  <App />
  </Provider>

  </ChakraProvider>
);

