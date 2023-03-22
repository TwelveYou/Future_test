import React from 'react'
import { useSelector } from 'react-redux';

export default function AboutSearching() {
    const items = useSelector(state => state.items);
    const books = useSelector(state => state.books);

    function getInfoAboutSearching(){
        let pages = null;
        if(books !== null){
            pages = <div style={{marginBottom: 10}} className='info-about-searching'>
                <p>
                    Найденное количество книг по вашему запросу: {items}
                </p>
            </div>
        }
        return pages;
    }       

    return (
        <div>
            {getInfoAboutSearching()}
        </div>
    )
}