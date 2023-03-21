import React from 'react';

export default class Book extends React.Component{
  render(){
    let authors = this.props.authors;
    if (typeof authors === "object"){
      this.props.authors.join(', ')
    }

    return (
      <div className="book">
        <img className="book__cover" src={this.props.url} alt={'Отсутствует изображение'} title={this.props.title} />
        <div className="book__info">
          <h3 className="book__info-title">{this.props.title}</h3>
          <p className="book__info-category">{this.props.category}</p>
          <p className="book__info-authors">{ authors }</p>
        </div>
      </div>
    );
  }
}