import React, { Component } from 'react'

export default class ShowOneBook extends Component {
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

  render() {


    let content;
    if(this.props.books !== null){
        let book = this.props.books[11];

        let title = book.volumeInfo.title;
        let category = book.volumeInfo.categories;
        let authors = book.volumeInfo.authors;
        let description = book.volumeInfo.description;
        let url=this.getSafeUrlImg(book);

        content = <div className="one-book">
            <img className="one-book__cover" src={url} alt={'Отсутствует изображение'} title={this.props.title} />
            <div className="one-book__info-full">
                <p className="one-book__info-label">Название:</p>
                <p className="one-book__info-full-title">{title}</p>
                <p className="one-book__info-label">Категории:</p>
                <p className="one-book__info-full-category">{category.join(', ')}</p>
                <p className="one-book__info-label">Авторы:</p>
                <p className="one-book__info-full-authors">{authors.join(', ')}</p>
                <p className="one-book__info-label">Описание:</p>
                <p className="one-book__info-full-description">{description}</p>
            </div>
        </div>;
    } else{
        console.log('Поиска нет');
    }




    return (
        <div className="show-one-book">
            {content}
        <button className='show-one-book__button-close' onClick={()=>(console.log(this.props.openBook))}>Назад</button>
        </div>
    )
  }
}
