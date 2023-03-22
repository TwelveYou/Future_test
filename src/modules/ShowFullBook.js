import React from 'react'

export default function ShowFullBook(props) {
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
        if(props.book !== null){
            let title = props.book.volumeInfo.title;
            let category = props.book.volumeInfo.categories;
            let authors = props.book.volumeInfo.authors;
            let description = props.book.volumeInfo.description;
            let url=getSafeUrlImg(props.book);

            content = 
                <div className="one-book">
                    <img className="one-book__cover" src={url} alt={'Отсутствует изображение'} title={props.title} />
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
        <button className='show-one-book__button-close' onClick={()=>(props.setOpenBook(null))}>Назад</button>
        {getOneBook()}
    </div>
  )
}


// import React, { Component } from 'react';

// export default class ShowOneBook extends Component {
// constructor(props) {
//     super(props);
//         this.getSafeUrlImg = this.getSafeUrlImg.bind(this);
//         this.getSafeArray = this.getSafeArray.bind(this);
//     }

//     getSafeUrlImg(book){
//         if(book.volumeInfo.hasOwnProperty('imageLinks')){
//             return book.volumeInfo.imageLinks.thumbnail;
//         } else 
//             return '';
//     }

//     getSafeArray(arr){
//         if(arr !== undefined){
//             return arr.join(', ');
//         } else 
//             return '';
//     }

//   render() {
//     let content;
//     if(this.props.book !== null){
//         let title = this.props.book.volumeInfo.title;
//         let category = this.props.book.volumeInfo.categories;
//         let authors = this.props.book.volumeInfo.authors;
//         let description = this.props.book.volumeInfo.description;
//         let url=this.getSafeUrlImg(this.props.book);

//         content = 
//             <div className="one-book">
//                 <img className="one-book__cover" src={url} alt={'Отсутствует изображение'} title={this.props.title} />
//                 <div className="one-book__info-full">
//                     <p className="one-book__info-label">Название:</p>
//                     <p className="one-book__info-full-title">{title}</p>
//                     <p className="one-book__info-label">Категории:</p>
//                     <p className="one-book__info-full-category">{this.getSafeArray(category)}</p>
//                     <p className="one-book__info-label">Авторы:</p>
//                     <p className="one-book__info-full-authors">{this.getSafeArray(authors)}</p>
//                     <p className="one-book__info-label">Описание:</p>
//                     <p className="one-book__info-full-description">{description}</p>
//                 </div>
//             </div>;
//     } else{
//         console.log('Поиска нет');
//     }
//     return (
//         <div className="show-one-book">
//             <button className='show-one-book__button-close' onClick={()=>(this.props.setOpenBook(null))}>Назад</button>
//             {content}
//         </div>
//     )
//   }
// }
