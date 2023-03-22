import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import {createStore} from 'redux';

const defaultState = { // начальное состояние хранилища
  books: null,
  items: 0,
  category: 'all',
  order: 'relevance',
  openBook: null,
  textRequest: '',
};

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case "GET_BOOKS": 
      return {...state, books: action.payloader};
    case "ADD_BOOKS": 
      return {...state, books: [...state.books, ...action.payloader]};
    case "CLEAR_BOOKS": 
      return {...state, books: null};       
      
    case "SET_ITEMS": 
      return {...state, items: action.payloader};

    case "SET_CATEGORY": 
      return {...state, category: action.payloader};  
      
    case "SET_ORDER": 
      return {...state, order: action.payloader};

    case "GET_FULL_BOOK": 
      return {...state, openBook: action.payloader};
    case "CLEAR_FULL_BOOK": 
      return {...state, openBook: null}; 

    case "CHANGE_TEXT_REQUEST":
      return {...state, textRequest: action.payloader};

    default: 
      return state;
  }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
