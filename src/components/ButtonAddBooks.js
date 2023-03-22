import React from 'react';
import keyForApi from '../data/keyForApi';
import { useDispatch, useSelector } from 'react-redux';

export default function ButtonAddBooks() {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
  const category = useSelector(state => state.category);
  const order = useSelector(state => state.order);
  const textRequest = useSelector(state => state.textRequest);

  function changeButtonNoMoreBooks(){ // change button name and color it red
    document.getElementById('button-add__button').textContent = "Больше нет книг по вашему запросу";
    document.getElementById('button-add__button').style.backgroundColor = 'red';
    document.getElementById('button-add__button').style.color = 'white';
    document.getElementById('button-add__button').disabled = 'disabled';
  }

  function getSubject(){
    if (category === 'all'){
        return ''
    } else {
        return '+subject:' + category;
    }
}

  function addBooks(){ 
    if(books !== null || books !== undefined){ //if we have a books for adding more
      var request = new XMLHttpRequest();
      let ajax_get_query = "https://www.googleapis.com/books/v1/volumes?q="+textRequest+getSubject()+"&maxResults=30&startIndex="+books.length+"&orderBy="+order+"&key="+keyForApi;
      request.open('GET',ajax_get_query,true);
      request.addEventListener('readystatechange', function() 
      {
          if ((request.readyState === 4) && (request.status === 200)) 
          {
              let response = JSON.parse(request.responseText);
              if(response.hasOwnProperty('items')){ // if answer from API have books
                return dispatch({type: 'ADD_BOOKS', payloader: response.items})
              } else
              if(response.items === undefined){ // if answer cant get from API more books
                changeButtonNoMoreBooks();
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

  
  return (
    <div className="button-add">
      <button 
        id="button-add__button" 
        onClick={()=>(addBooks())}
      >
        Загрузить еще 30 книг
      </button>        
    </div>
  )
}