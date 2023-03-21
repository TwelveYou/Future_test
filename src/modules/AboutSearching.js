import React from 'react';

export default class ListOfBooks extends React.Component{
    render(){
        let pages = null;
        if(this.props.books !== null){
            pages = <div style={{marginBottom: 10}} className='info-about-searching'>
                <p>
                    Найденное количество книг по вашему запросу: {this.props.items}
                </p>
            </div>
        }
        return(
            <div>
                {pages}
            </div>
        );
    }
}