import React from 'react'

export default function AboutSearching(props) {

    function getInfoAboutSearching(){
        let pages = null;
        if(props.books !== null){
            pages = <div style={{marginBottom: 10}} className='info-about-searching'>
                <p>
                    Найденное количество книг по вашему запросу: {props.items}
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


// import React from 'react';

// export default class ListOfBooks extends React.Component{
//     render(){

//         return(
//             <div>
//                 {pages}
//             </div>
//         );
//     }
// }