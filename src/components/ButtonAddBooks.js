import React from 'react';
import keyForApi from '../data/keyForApi';
import { useDispatch, useSelector } from 'react-redux';

export default function ButtonAddBooks() {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
  const category = useSelector(state => state.category);
  const order = useSelector(state => state.order);
  const textRequest = useSelector(state => state.textRequest);


  function addBooks(){
    let subject;
    if (category === 'all'){
      subject = ''
    } else {
      subject = '+subject:' + category;
    }

    if(books !== null){
      var request = new XMLHttpRequest();
      let ajax_get_query = "https://www.googleapis.com/books/v1/volumes?q="+textRequest+subject+"&maxResults=30&startIndex="+books.length+"&orderBy="+order+"&key="+keyForApi;
      request.open('GET',ajax_get_query,true);
      request.addEventListener('readystatechange', function() 
      {
          if ((request.readyState === 4) && (request.status === 200)) 
          {
              let response = JSON.parse(request.responseText);
              if(response.hasOwnProperty('items')){
                return dispatch({type: 'ADD_BOOKS', payloader: response.items})
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

  
  return (
    <div className="button-add">
      <button 
        id="button-add__button" 
        onClick={()=>(addBooks())}
        // onClick={()=>(props.addBooks(document.getElementById("search-string").value))}
      >
        Загрузить еще 30 книг
      </button>        
    </div>
  )
}