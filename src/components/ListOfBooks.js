import React from 'react'
import Book from './Book';
import { useSelector } from 'react-redux';

export default function ListOfBooks() {
  const books = useSelector(state => state.books);

  function safeGetUrlImg(book){
    if(book.volumeInfo.hasOwnProperty('imageLinks')){
      return book.volumeInfo.imageLinks.thumbnail;
    } else 
      return '';
  }

  function showListOgBooks(){
    let list;

    if(books === null){
      list = <h3> Введите название книги </h3>;
    }
    else{
      list = <div className="list"> {books.map((book, index)=>(
        <Book 
          key={'ID'+book.id+'-'+index}
          title={book.volumeInfo.title  } 
          category={book.volumeInfo.categories} 
          authors={book.volumeInfo.authors} 
          url={safeGetUrlImg(book)}
          book={book}
        />))} 
      </div>;
    }
    return list;
  }

  return (
    <div className="list">
      {showListOgBooks()}
    </div>
  )
}