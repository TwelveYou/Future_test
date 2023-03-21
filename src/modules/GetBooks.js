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
            // let answer_script = document.getElementById('answer_AJAX_script');
            // answer_script.innerHTML = request.responseText;
            console.log(request.responseText);
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