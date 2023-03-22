import React, { useEffect }  from 'react'

export default function Header(props) {

    useEffect(() => {
        document.querySelector('input').focus();
    });
    // Нужно сделать активацию только при первом монтировании.
    

    function handleInputKeyPress(e){
        var key=e.keyCode || e.which;
        if (key === 13){ // Клавиша Enter
            props.getBooks(document.getElementById("search-string").value);
        }
    }

    function handlerChangeSelectOrder(event) {
        props.setOrder(event.target.value);
    }

    function handlerChangeSelectCategory(event) {
        props.setCategory(event.target.value);
    }

    function handlerChangeTextRequest(event){
        props.setTextRequest(event.target.value);
    }

    return (
        <header>
            <div className="header__content_center">
                <h1 className="header__title">Поиск книги</h1>
                    <div className='className="header__form-search'>
                        <input type="text" id="search-string" size="100" value={props.textRequest} onChange={handlerChangeTextRequest} onKeyPress={handleInputKeyPress}/>
                        <button onClick={()=>(props.getBooks(document.getElementById("search-string").value))}>Поиск</button>
                    </div>
                    <div className='header__form-filter'>
                        <label className="header__form-label" htmlFor="header__form-category">Категория:</label>                
                        <select id="header__form-category" onChange={handlerChangeSelectCategory}>
                            <option value='all'>all</option>
                            <option value='art'>art</option>
                            <option value='biography'>biography</option>
                            <option value='computers'>computers</option>
                            <option value='history'>history</option>
                            <option value='medical'>medical</option>
                            <option value='poetry'>poetry</option>
                        </select>
                        <label className="header__form-label" htmlFor="header__form-sort">Сортировка:</label>
                        <select id="header__form-sort" onChange={handlerChangeSelectOrder}>
                            <option value='relevance'>relevance</option>
                            <option value='newest'>newest</option>
                        </select>
                    </div>
            </div>
        </header>
    )
}