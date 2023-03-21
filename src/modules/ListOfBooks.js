import React from 'react';
import Book from './Book';

export default class ListOfBooks extends React.Component{
  constructor(props) {
    super(props);
    this.getSafeUrlImg = this.getSafeUrlImg.bind(this);
  }

  getSafeUrlImg(book){
    if(book.volumeInfo.hasOwnProperty('imageLinks')){
      return book.volumeInfo.imageLinks.thumbnail;
    } else 
      return '';
  }
      
  render(){
    let list;

    if(this.props.books === 0){
      list = <h3> Введите название книги </h3>;
    }
    else {
      // this.props.books.map((book)=>(console.log(book)));
      list = <div className="list"> {this.props.books.map((book)=>(
        <Book 
          key={'ID'+book.id}
          title={book.volumeInfo.title  } 
          category={book.volumeInfo.categories} 
          authors={book.volumeInfo.authors} 
          url={this.getSafeUrlImg(book)}
          // url={book.volumeInfo.imageLinks.thumbnail}
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