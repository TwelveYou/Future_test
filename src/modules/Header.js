import React from 'react';

export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.startSearch = this.startSearch.bind(this);
    }

    startSearch(e){
        const enter = e.currentTarget;
        console.log(enter);
        console.log(enter.keyCode);
        if (enter === 'enter') {
            this.props.getBooks(document.getElementById("search-string").value)
        }        
    }

  render(){
    return (
        <header>

            <div className="header__content_center">
                <h1 className="header__title">Поиск книги</h1>
                {/* <form className="header__form" action={url_get} method="get"> */}
                    <div className='className="header__form-search'>
                        <input type="text" id="search-string" size="100" onKeyUp={this.startSearch}/>
                        <button onClick={()=>(this.props.getBooks(document.getElementById("search-string").value))}>Поиск</button>
                    </div>

                    <div className='header__form-filter'>
                        <label className="header__form-label" htmlFor="header__form-category">Категория:</label>                
                        <select id="header__form-category">
                            {/* список категорий */} 
                            <option>all</option>
                            <option>art</option>
                            <option>biography</option>
                            <option>computers</option>
                            <option>history</option>
                            <option>medical</option>
                            <option>poetry</option>
                        </select>

                        <label className="header__form-label" htmlFor="header__form-sort">Сортировка:</label>
                        <select id="header__form-sort">
                            {/* Список сортировки */}
                            <option>relevance</option>
                            <option>newest</option>
                        </select>
                    </div>
                {/* </form> */}
            </div>
        </header>
    );
  }
}