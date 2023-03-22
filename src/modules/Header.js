import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux';

import keyForApi from '../modules/data/keyForApi';

export default function Header(props) {
    const dispatch = useDispatch();
    const textRequest = useSelector(state => state.textRequest);
    const category = useSelector(state => state.category);
    const order = useSelector(state => state.order);

    useEffect(() => {
        document.querySelector('input').focus();
    },[]);
    
    function handleInputKeyPress(e){
        var key=e.keyCode || e.which;
        if (key === 13){ // Клавиша Enter
            getBooks(document.getElementById("search-string").value);
        }
    }

    function handlerChangeSelectOrder(event) {
        dispatch({type:'SET_ORDER',payloader:event.target.value});
    }

    function handlerChangeSelectCategory(event) {
        dispatch({type:'SET_CATEGORY',payloader:event.target.value});
    }

    function handlerChangeTextRequest(event){
        dispatch({type:'CHANGE_TEXT_REQUEST',payloader:event.target.value});
    }

    function getBooks(){
        if (textRequest === ''){
            
            document.getElementById('search-string').placeholder = 'Вы не ввели текст';
            document.getElementById('search-string').style = 'color:red; border-color: red;';

            dispatch({type: 'CLEAR_BOOKS', payLoader : null});
        } else{
            document.getElementById('search-string').placeholder = '';
            document.getElementById('search-string').style = '';

            if(document.getElementById('button-add__button') !== null){
            document.getElementById('button-add__button').textContent = "Загрузить еще 30 книг";
            document.getElementById('button-add__button').style.backgroundColor = '';
            document.getElementById('button-add__button').style.color = '';
            document.getElementById('button-add__button').disabled = '';
            }


            var request = new XMLHttpRequest();
            let subject;
            if (category === 'all'){
            subject = ''
            } else {
            subject = '+subject:' + category;
            }
        
            let ajax_get_query = "https://www.googleapis.com/books/v1/volumes?q="+textRequest+subject+"&maxResults=30&startIndex=0&orderBy="+order+"&key="+keyForApi;
            request.open('GET',ajax_get_query,true);
            request.addEventListener('readystatechange', function() 
            {
                if ((request.readyState === 4) && (request.status === 200)) 
                {
                    let response = JSON.parse(request.responseText);
                    dispatch({type: 'SET_ITEMS', payloader: response.totalItems});
                    dispatch({type: 'CLEAR_FULL_BOOK', payloader: null});
                    dispatch({type: 'GET_BOOKS',payloader: response.items});
                    return response.items;
                }
            });

            request.onloadstart = () => { 
            document.getElementById('loader').style.visibility = 'visible';
            }

            request.onload = () => { 
            document.getElementById('loader').style.visibility = 'hidden';
            };
            
            request.send();  
        }
      }

    return (
        <header>
            <div className="header__content_center">
                <h1 className="header__title">Поиск книги</h1>
                    <div className='className="header__form-search'>
                        <input type="text" id="search-string" size="100" value={textRequest} onChange={handlerChangeTextRequest} onKeyPress={handleInputKeyPress}/>
                        <button onClick={()=>(getBooks())}>Поиск</button>
                    </div>
                    <div className='header__form-filter'>
                        <label className="header__form-label" htmlFor="header__form-category">Категория:</label>                
                        <select id="header__form-category" onChange={handlerChangeSelectCategory}>
                            <option value='all'>all</option>
                            <option value='art'>art</option>
                            <option value='biography'>biography</option>
                            <option value='computers'>computers</option>
                            <option value='history'>history</option>
                            <option value='medical'>medical</option>
                            <option value='poetry'>poetry</option>
                        </select>
                        <label className="header__form-label" htmlFor="header__form-sort">Сортировка:</label>
                        <select id="header__form-sort" onChange={handlerChangeSelectOrder}>
                            <option value='relevance'>relevance</option>
                            <option value='newest'>newest</option>
                        </select>
                    </div>
            </div>
        </header>
    )
}