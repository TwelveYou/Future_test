import './App.css';
import './components/Book';
import { useSelector } from 'react-redux';

import React from 'react';
import Header from './components/Header';
import ListOfBooks from './components/ListOfBooks';
import AboutSearching from './components/AboutSearching';
import ButtonAddBooks from './components/ButtonAddBooks';
import ShowFullBook from './components/ShowFullBook';
import Loader from './components/Loader';

export default function App() {
  const books = useSelector(state => state.books);
  const items = useSelector(state => state.items);
  const category = useSelector(state => state.category);
  const openBook = useSelector(state => state.openBook);

  function showButtonAdd(){
    if(books !== null){
      return <ButtonAddBooks/>;
    }
    return ''
  }

  function showContent(){
    if(openBook !== null){
      return <ShowFullBook/>;
    } else{
      let content = 
        <div>
          <AboutSearching items={items} books={books}/>
          <ListOfBooks books={books}></ListOfBooks>
          {showButtonAdd()}
        </div>
      ;
      return content;
    }
  }
  
  return (
    <div className="App">
      <Loader/>
      <Header category={category}></Header>
      {showContent()}
    </div>
  );
}