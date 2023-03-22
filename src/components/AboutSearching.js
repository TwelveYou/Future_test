import React from 'react'
import { useSelector } from 'react-redux';

export default function AboutSearching() {
    const items = useSelector(state => state.items);
    const books = useSelector(state => state.books);

    function getInfoAboutSearching(){
        try{
            let pages = null;
            if(books !== null){
                pages = <div className='info-about-searching'>
                    <p>
                        Найденное количество книг по вашему запросу: {items}
                    </p>
                </div>
            }
            return pages;
        }
        catch(err){
            console.log('error in function "getInfoAboutSearching()"');
            console.log(err);
        }
    }       

    return (
        <div>
            {getInfoAboutSearching()}
        </div>
    )
}