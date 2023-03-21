import './App.css';
import './modules/Book';
import React, { useState } from 'react';
import Header from './modules/Header';
import ListOfBooks from './modules/ListOfBooks';
import AboutSearching from './modules/AboutSearching';
import ButtonAddBooks from './modules/ButtonAddBooks';

import keyForApi from './modules/data/keyForApi';
import ShowFullBook from './modules/ShowFullBook';


function App() {
  const [books, setBooks] = useState(null);
  const [items, setItems] = useState(0);
  const [category, setCategory] = useState('all');
  const [order, setOrder] = useState('relevance');
  const [openBook, setOpenBook] = useState(null);
  const [textRequest, setTextRequest] = useState('');

  function getBooks(searchVal){
    if (searchVal === ''){
      searchVal = 'flowers';
      console.log('Поле поиска не может быть пустым');

      document.getElementById('search-string').placeholder = 'Вы не ввели текст';
      document.getElementById('search-string').style = 'color:red; border-color: red;';
    } else{
      document.getElementById('search-string').placeholder = '';
      document.getElementById('search-string').style = '';

      var request = new XMLHttpRequest();
      let subject;
      if (category === 'all'){
        subject = ''
      } else {
        subject = '+subject:' + category;
      }
  
      let ajax_get_query = "https://www.googleapis.com/books/v1/volumes?q="+searchVal+subject+"&maxResults=30&startIndex=0&orderBy="+order+"&key="+keyForApi;
      request.open('GET',ajax_get_query,true);
      request.addEventListener('readystatechange', function() 
      {
          if ((request.readyState === 4) && (request.status === 200)) 
          {
              let response = JSON.parse(request.responseText);
              setItems(response.totalItems);
              console.log(response.items[0]);
              return  setBooks(response.items);
          }
      });
      request.send();  
    }
  }

  function addBooks(searchVal){
    let subject;
    if (category === 'all'){
      subject = ''
    } else {
      subject = '+subject:' + category;
    }

    if(books !== null){
      // console.log(books.length);
      var request = new XMLHttpRequest();
      let ajax_get_query = "https://www.googleapis.com/books/v1/volumes?q="+searchVal+subject+"&maxResults=30&startIndex="+books.length+"&orderBy="+order+"&key="+keyForApi;
      request.open('GET',ajax_get_query,true);
      request.addEventListener('readystatechange', function() 
      {
          if ((request.readyState === 4) && (request.status === 200)) 
          {
              let response = JSON.parse(request.responseText);
              if(response.hasOwnProperty('items')){
                return  setBooks([...books, ...response.items]);
              }
          }
      });
      request.send();
    } else {
      console.log('Еще нет книг');
    }
  }

  let content;
  if(openBook !== null){
    content = <ShowFullBook book={openBook} openBook={openBook} setOpenBook={setOpenBook}/>;
  } else{
    content = <div>
      <Header textRequest={textRequest} setTextRequest={setTextRequest} getBooks={getBooks} setCategory={setCategory} setOrder={setOrder} category={category}></Header>
      <AboutSearching items={items} books={books}/>
      <ListOfBooks books={books} setOpenBook={setOpenBook}></ListOfBooks>
      <ButtonAddBooks addBooks={addBooks}/>
    </div>;
  }

  
  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;