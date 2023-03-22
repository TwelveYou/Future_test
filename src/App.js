import './App.css';
import './modules/Book';
import { useDispatch, useSelector } from 'react-redux';

import React, { useEffect } from 'react';
// import React, { useState } from 'react';
import Header from './modules/Header';
import ListOfBooks from './modules/ListOfBooks';
import AboutSearching from './modules/AboutSearching';
import ButtonAddBooks from './modules/ButtonAddBooks';
import ShowFullBook from './modules/ShowFullBook';
import Loader from './modules/Loader';

import keyForApi from './modules/data/keyForApi';


function App() {
  // const [books, setBooks] = useState(null); //книги
  // const [items, setItems] = useState(0); //количество найденных книг
  // const [category, setCategory] = useState('all'); //фильтр - категория
  // const [order, setOrder] = useState('relevance'); //сортировка
  // const [openBook, setOpenBook] = useState(null); //открытая книга
  // const [textRequest, setTextRequest] = useState(''); //основной текст поиска


  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
  const items = useSelector(state => state.items);
  const category = useSelector(state => state.category);
  const order = useSelector(state => state.order);
  const openBook = useSelector(state => state.openBook);
  const textRequest = useSelector(state => state.textRequest);

useEffect(() => {
  return () => {
    console.log(books);
    console.log(items);
    console.log(category); //+
    console.log(order); //+
    console.log(openBook);
    console.log(textRequest); //+
    console.log('______________________');
  }
})




  function addBooks(searchVal){
    let subject;
    if (category === 'all'){
      subject = ''
    } else {
      subject = '+subject:' + category;
    }

    if(books !== null){
      var request = new XMLHttpRequest();
      let ajax_get_query = "https://www.googleapis.com/books/v1/volumes?q="+searchVal+subject+"&maxResults=30&startIndex="+books.length+"&orderBy="+order+"&key="+keyForApi;
      request.open('GET',ajax_get_query,true);
      request.addEventListener('readystatechange', function() 
      {
          if ((request.readyState === 4) && (request.status === 200)) 
          {
              let response = JSON.parse(request.responseText);
              if(response.hasOwnProperty('items')){
                return dispatch({type: 'ADD_BOOKS', payloader: response.items})
                // return  setBooks([...books, ...response.items]);
              } else
              if(response.items === undefined){
                document.getElementById('button-add__button').textContent = "Больше нет книг по вашему запросу";
                document.getElementById('button-add__button').style.backgroundColor = 'red';
                document.getElementById('button-add__button').style.color = 'white';
                document.getElementById('button-add__button').disabled = 'disabled';
              }
          }
      });

      request.onloadstart = () => { 
        document.getElementById('loader').style.visibility = 'visible';
      }

      request.onload = () => { 
        document.getElementById('loader').style.visibility = 'hidden';
      };

      request.send();
    } else {
      console.log('Еще нет книг');
    }
  }

  let buttonAdd = '';
  if(books !== null){
      buttonAdd = <ButtonAddBooks addBooks={addBooks}/>;
    
  }

  let content;
  if(openBook !== null){
    content = <ShowFullBook book={openBook} openBook={openBook}/>;
  } else{
    content = <div>
      <AboutSearching items={items} books={books}/>
      <ListOfBooks books={books}></ListOfBooks>
      {buttonAdd}
    </div>;
  }

  
  return (
    <div className="App">
      <Loader/>
      <Header category={category}></Header>
      {content}
    </div>
  );
}

export default App;