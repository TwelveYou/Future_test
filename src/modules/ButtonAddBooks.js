import React from "react";

export default class ButtonAddBooks extends React.Component {
  render() {
    return (
        <div className="button-add">
            <button onClick={()=>(this.props.addBooks(document.getElementById("search-string").value))}>Загрузить еще 30 книг</button>        
        </div>
    )
  }
}