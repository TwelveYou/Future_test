import React from 'react';

export default class Header extends React.Component{
    constructor(props) {
        super(props);
        // this.startSearch = this.startSearch.bind(this);
        this.changeSelectOrder = this.changeSelectOrder.bind(this);
        this.changeSelectCategory = this.changeSelectCategory.bind(this);
    }

    changeSelectOrder(event) {
        this.props.setOrder(event.target.value);
        // console.log(event.target.value);
    }
    changeSelectCategory(event) {
        // console.log(event.target.value);
        this.props.setCategory(event.target.value);
    }

  render(){
    return (
        <header>

            <div className="header__content_center">
                <h1 className="header__title">Поиск книги</h1>
                    <div className='className="header__form-search'>
                        <input type="text" id="search-string" size="100"/>
                        <button onClick={()=>(this.props.getBooks(document.getElementById("search-string").value))}>Поиск</button>
                    </div>

                    <div className='header__form-filter'>
                        <label className="header__form-label" htmlFor="header__form-category">Категория:</label>                
                        <select id="header__form-category" onChange={this.changeSelectCategory}>
                            {/* список категорий */} 
                            <option value='all'>all</option>
                            <option value='art'>art</option>
                            <option value='biography'>biography</option>
                            <option value='computers'>computers</option>
                            <option value='history'>history</option>
                            <option value='medical'>medical</option>
                            <option value='poetry'>poetry</option>
                        </select>

                        <label className="header__form-label" htmlFor="header__form-sort">Сортировка:</label>
                        <select id="header__form-sort" onChange={this.changeSelectOrder}>
                            {/* Список сортировки */}
                            <option value='relevance'>relevance</option>
                            <option value='newest'>newest</option>
                        </select>
                    </div>
                {/* </form> */}
            </div>
        </header>
    );
  }
}