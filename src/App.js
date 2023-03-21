import './App.css';
import './modules/Book';
import React, { useState } from 'react';
import Header from './modules/Header';
import ListOfBooks from './modules/ListOfBooks';

import keyForApi from './modules/data/keyForApi';

function App() {
  const [books, setBooks] = useState(0);
  const [items, setItems] = useState(0);
  const [page, setPage] = useState(0);
  const [sumPages, setSumPages] = useState(new Array(0));

  // const [category, setCategory] = useState('all');
  // const [order, setOrder] = useState('relevance ');

  function changeSelect(event) {
    console.log(event.target.value);
    setPage(event.target.value);
    updateBooks(event.target.value);
  }

  function updateBooks(currentPage){
    let searchVal = document.getElementById("search-string").value;
    if (searchVal === 0){
      searchVal = '';
    }
    var request = new XMLHttpRequest();
    let ajax_get_query = "https://www.googleapis.com/books/v1/volumes?q="+searchVal+"&maxResults=30&startIndex="+currentPage*30+"&key="+keyForApi;
    // let ajax_get_query = "https://www.googleapis.com/books/v1/volumes?q="+searchVal+":+subject:"+category+"&maxResults=30&startIndex="+currentPage*30+"&orderBy="+order+"&key="+keyForApi;
    request.open('GET',ajax_get_query,true);
    request.addEventListener('readystatechange', function() 
    {
        if ((request.readyState === 4) && (request.status === 200)) 
        {
            let response = JSON.parse(request.responseText);
            return  setBooks(response.items);
        }
    });
    request.send();
  }


  function getBooks(searchVal){
    if (searchVal === 0){
      searchVal = 'flowers';
    }
    var request = new XMLHttpRequest();
    // &maxResults=30
    let ajax_get_query = "https://www.googleapis.com/books/v1/volumes?q="+searchVal+"&maxResults=30&startIndex=0&key="+keyForApi;
    request.open('GET',ajax_get_query,true);
    request.addEventListener('readystatechange', function() 
    {
        if ((request.readyState === 4) && (request.status === 200)) 
        {
            let response = JSON.parse(request.responseText);
            setItems(response.totalItems);
            setPage(0);
            document.getElementById("selected-page").value = 0;
            setSumPages(Array.from(Array(((~~(response.totalItems/30))+1)), (_, index) => index + 1));
            return  setBooks(response.items);
        }
    });
    request.send();
  }

  function currentBooks(){
    if(sumPages === page){
      return [page*30+1,items-1];
    } else{
      return [page*30+1, page*30+30];
    }

  }
  
  return (
    <div className="App">
      <Header getBooks={getBooks}></Header>
      <div style={{marginBottom: 10}}>
        <p>
          Найденное количество книг по вашему запросу: {items}
        </p>
        <p>
          всего страниц {sumPages.length} 
          <select id='selected-page' onChange={changeSelect}>
            {sumPages.map((name,index)=>(
              <option value={index}> {name} </option>
            ))}
          </select>
          показано с {currentBooks()[0]} по {currentBooks()[1]}
        </p>

      </div>
      <ListOfBooks books={books}></ListOfBooks>
    </div>
  );
}

export default App;