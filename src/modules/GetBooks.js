import React from 'react';
import keyForApi from './data/keyForApi';

// let books = '';

function sendRequest(){
    var request = new XMLHttpRequest(); // Создание объекта для AJAX запроса
    let ajax_get_query = "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key="+keyForApi;//формирование адресной строки и запись в глобальную переменную SQL запрос 
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

            return  response.items;
        }
    });
    request.send();
}


export default class GetBooks extends React.Component{
    render(){
      return (
        <div>
            <button onClick={sendRequest}>Жмяк</button>
        </div>
      )
    }
}