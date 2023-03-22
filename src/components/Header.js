import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux';

import keyForApi from '../data/keyForApi';

export default function Header() {
    const dispatch = useDispatch();
    const textRequest = useSelector(state => state.textRequest);
    const category = useSelector(state => state.category);
    const order = useSelector(state => state.order);

    // Our input tag always in focus in mount app
    useEffect(() => {
        document.querySelector('input').focus();
    },[]);
    
    function handleInputKeyPress(e){
        var key=e.keyCode || e.which;
        if (key === 13){ // Клавиша Enter
            getBooks(textRequest);
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

    function getSubject(){
        if (category === 'all'){
            return ''
        } else {
            return '+subject:' + category;
        }
    }

    function messageWarningInSearchInput(message){
        document.getElementById('search-string').placeholder = message;
        document.getElementById('search-string').style = 'color:red; border-color: red;';
        dispatch({type: 'CLEAR_BOOKS', payLoader : null});
    }

    function clearStyleInputAndAddingButton(){
        document.getElementById('search-string').placeholder = '';
        document.getElementById('search-string').style = '';

        //it need clear style if this element have in DOM
        if (document.getElementById('button-add__button') !== null){
            document.getElementById('button-add__button').textContent = "Загрузить еще 30 книг";
            document.getElementById('button-add__button').style.backgroundColor = '';
            document.getElementById('button-add__button').style.color = '';
            document.getElementById('button-add__button').disabled = '';
        }
    }

    function getBooks(){
        if (textRequest === ''){ // If haven't request text in input
            messageWarningInSearchInput('Вы не ввели текст');
        } else{
            clearStyleInputAndAddingButton();
            
            let ajax_get_query = "https://www.googleapis.com/books/v1/volumes?q="+textRequest+getSubject()+"&maxResults=30&startIndex=0&orderBy="+order+"&key="+keyForApi;
            var request = new XMLHttpRequest();
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
                    <div className='header__form-search'>
                        <input type="text" id="search-string" size="100" value={textRequest} onChange={handlerChangeTextRequest} onKeyPress={handleInputKeyPress}/>
                        <button onClick={()=>(getBooks())}>Поиск</button>
                    </div>
                    <div className='header__form-filter'>
                        <div className='header__form-filter-example'>
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
                        </div>
                        <div className='header__form-filter-example'>
                            <label className="header__form-label" htmlFor="header__form-sort">Сортировка:</label>
                            <select id="header__form-sort" onChange={handlerChangeSelectOrder}>
                                <option value='relevance'>relevance</option>
                                <option value='newest'>newest</option>
                            </select>
                        </div>
                    </div>
            </div>
        </header>
    )
}