import './App.css';
import './modules/Book';
import React, { useState } from 'react';
import Header from './modules/Header';
import ListOfBooks from './modules/ListOfBooks';

import keyForApi from './modules/data/keyForApi';

function App() {
  const [books, setBooks] = useState(0);

  function getBooks(){
    var request = new XMLHttpRequest();
    let ajax_get_query = "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key="+keyForApi;
    request.open('GET',ajax_get_query,true);
    request.addEventListener('readystatechange', function() 
    {
        if ((request.readyState === 4) && (request.status === 200)) 
        {
            let response = JSON.parse(request.responseText);
            
            console.log(response.items[0]);
            console.log(response.items[0].volumeInfo.authors.join(', '));
            console.log(response.items[0].volumeInfo.categories[0]);
            console.log(response.items[0].volumeInfo.title);
            console.log(response.items[0].volumeInfo.imageLinks.thumbnail);

            return  setBooks(response.items);
        }
    });
    request.send();
  }


  return (
    <div className="App">
      <Header getBooks={getBooks}></Header>
      <ListOfBooks books={books}></ListOfBooks>
    </div>
  );
}

export default App;
