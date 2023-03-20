import React from 'react';

export default class Book extends React.Component{
      
  render(){
    return (
      <div className="book">
        <img className="book__cover" src={this.props.url} alt={this.props.title} />
        <div className="book__info">
          <h3 className="book__info-title">{this.props.title}</h3>
          <p className="book__info-category">{this.props.category}</p>
          <p className="book__info-authors">{this.props.authors}</p>
        </div>
      </div>
    );
  }
}