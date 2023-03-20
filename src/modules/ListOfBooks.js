import React from 'react';
import Book from './Book';
import list_of_book from './listOfObjects'

export default class ListOfBooks extends React.Component{
      
  render(){
    return (
        <div className="list">
            {list_of_book.map((book)=>(<Book title={book.title} category={book.category} authors={book.authors} url={book.url}/>))}
        </div>
    );
  }
}