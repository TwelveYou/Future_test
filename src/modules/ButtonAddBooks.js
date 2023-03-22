import React from 'react'

export default function ButtonAddBooks(props) {
  return (
    <div className="button-add">
      <button 
        id="button-add__button" 
        onClick={()=>(props.addBooks(document.getElementById("search-string").value))}
      >
        Загрузить еще 30 книг
      </button>        
    </div>
  )
}


// import React from "react";

// export default class ButtonAddBooks extends React.Component {
//   render() {
//     return (
//         <div className="button-add">
//             <button id="button-add__button" onClick={()=>(this.props.addBooks(document.getElementById("search-string").value))}>Загрузить еще 30 книг</button>        
//         </div>
//     )
//   }
// }
