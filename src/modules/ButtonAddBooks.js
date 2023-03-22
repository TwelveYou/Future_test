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