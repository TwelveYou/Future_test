import React from 'react'
import Book from './Book';

export default function ListOfBooks(props) {

  function safeGetUrlImg(book){
    if(book.volumeInfo.hasOwnProperty('imageLinks')){
      return book.volumeInfo.imageLinks.thumbnail;
    } else 
      return '';
  }

  function showListOgBooks(){
    let list;

    if(props.books === null){
      list = <h3> Введите название книги </h3>;
    }
    else{
      list = <div className="list"> {props.books.map((book, index)=>(
        <Book 
          key={'ID'+book.id+'-'+index}
          title={book.volumeInfo.title  } 
          category={book.volumeInfo.categories} 
          authors={book.volumeInfo.authors} 
          url={safeGetUrlImg(book)}
          // setOpenBook={props.setOpenBook}
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