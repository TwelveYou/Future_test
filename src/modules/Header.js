import React from 'react';
import keyForApi from './data/keyForApi';

// import GetBooks from './GetBooks';

// https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey

let url_get = 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key='+keyForApi;
console.log(url_get);

export default class Header extends React.Component{
      
  render(){
    return (
        <header>
            {/* <GetBooks/> */}

            <div className="header__content_center">
                <h1 className="header__title">Поиск книги</h1>
                <form className="header__form" action={url_get} method="get">
                    <div className='className="header__form-search'>
                        <input type="text" size="100" />
                        <button>Поиск</button>
                    </div>

                    <div className='className="header__form-filter'>
                        <label for="header__form-label">Категория:</label>                
                        <select>
                            {/* список категорий */}
                            <option>Пункт 1</option>
                            <option>Пункт 2</option>
                        </select>

                        <label for="header__form-label">Сортировка:</label>
                        <select>
                            {/* Список сортировки */}
                            <option>Пункт 1</option>
                            <option>Пункт 2</option>
                        </select>
                    </div>
                </form>
            </div>
        </header>
    );
  }
}