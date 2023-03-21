import React, { Component } from 'react'

export default class ShowOneBook extends Component {
  render() {
    return (
        <div className="book">
            <img className="book__cover" src={this.props.url} alt={'Отсутствует изображение'} title={this.props.title} />
            <div className="book__info">
                <h3 className="book__info-title">{this.props.title}</h3>
                <p className="book__info-category">{this.props.category}</p>
                <p className="book__info-authors">{this.props.authors}</p>
            </div>
        </div>
    )
  }
}
