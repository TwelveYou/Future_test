import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ShowFullBook() {
    const dispatch = useDispatch();
    const book = useSelector(state => state.openBook);


    function getSafeUrlImg(book){
        if(book.volumeInfo.hasOwnProperty('imageLinks')){
            return book.volumeInfo.imageLinks.thumbnail;
        } else 
            return '';
    }

    function getSafeArray(arr){
        if(arr !== undefined){
            return arr.join(', ');
        } else 
            return '';
    }

    function getOneBook(){
        let content;
        if(book !== null){
            let title = book.volumeInfo.title;
            let category = book.volumeInfo.categories;
            let authors = book.volumeInfo.authors;
            let description = book.volumeInfo.description;
            let url=getSafeUrlImg(book);

            content = 
                <div className="one-book">
                    <img className="one-book__cover" src={url} alt={'Отсутствует изображение'} title={title} />
                    <div className="one-book__info-full">
                        <p className="one-book__info-label">Название:</p>
                        <p className="one-book__info-full-title">{title}</p>
                        <p className="one-book__info-label">Категории:</p>
                        <p className="one-book__info-full-category">{getSafeArray(category)}</p>
                        <p className="one-book__info-label">Авторы:</p>
                        <p className="one-book__info-full-authors">{getSafeArray(authors)}</p>
                        <p className="one-book__info-label">Описание:</p>
                        <p className="one-book__info-full-description">{description}</p>
                    </div>
                </div>;
        } else{
            console.log('Поиска нет');
        }
        return (content);
    }



  return (
    <div className="show-one-book">
        <button className='show-one-book__button-close' onClick={()=>(dispatch({type: 'CLEAR_FULL_BOOK', preloader: null}))}>Назад</button>
        {getOneBook()}
    </div>
  )
}