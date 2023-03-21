import React from 'react';
import Book from './Book';

export default class ListOfBooks extends React.Component{
      
  render(){
    let list;

    console.log('this.props.books');
    console.log(this.props.books[0]);

    if(this.props.books === 0){
      list = <p> Введите название книги </p>;
    }
    else {
      list = <div className="list"> {this.props.books.map((book)=>(
        <Book 
          key={'ID'+book.id}
          title={book.volumeInfo.title  } 
          category={book.volumeInfo.categories} 
          authors={book.volumeInfo.authors} 
          url={book.volumeInfo.imageLinks.thumbnail}
        />))} 
      </div>;
    }

    return (
        <div className="list">
          {list}
        </div>
    );
  }
}