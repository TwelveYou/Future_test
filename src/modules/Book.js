import React from 'react'
import { useDispatch } from 'react-redux';

export default function Book(props) {
  const dispatch = useDispatch();
    
  function safeGetAuthors(){
    let authors = props.authors;
    if (typeof authors === "object"){
      authors = authors.join(', ')
    }
    return authors;
  }

  function safeGetCategory(){
    let category = props.category;
    if (typeof category === "object"){
      category = category[0]
    }
    return category;
  }


  return (
    <div className="book" onClick={()=>(dispatch({type: 'GET_FULL_BOOK',preloader: props.book}) )}>
      <img className="book__cover" src={props.url} alt={'Обложка отсутствует'} title={props.title} />
      <div className="book__info">
        <h3 className="book__info-title">{props.title}</h3>
        <p className="book__info-category">{safeGetCategory()}</p>
        <p className="book__info-authors">{ safeGetAuthors() }</p>
      </div>
    </div>
  )
}