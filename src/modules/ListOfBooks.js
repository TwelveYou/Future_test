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

    if(this.props.books === null){
      list = <h3> Введите название книги </h3>;
    }
    // else  
    // if(this.props.books === undefined){
    //   list = <h3> Что-то пошло не так и мы не смогли загрузить эти книги. </h3>;
    // }
    else{
      list = <div className="list"> {this.props.books.map((book, index)=>(
        <Book 
          key={'ID'+book.id+'-'+index}
          title={book.volumeInfo.title  } 
          category={book.volumeInfo.categories} 
          authors={book.volumeInfo.authors} 
          url={this.getSafeUrlImg(book)}
          setOpenBook={this.props.setOpenBook}
          book={book}
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