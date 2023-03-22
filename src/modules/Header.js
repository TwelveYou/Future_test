import React, { useEffect }  from 'react'

export default function Header(props) {

    useEffect(() => {
        document.querySelector('input').focus();
    });
    

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


// import React from 'react';

// export default class Header extends React.Component{
//     constructor(props) {
//         super(props);
//         this.handlerChangeSelectOrder = this.handlerChangeSelectOrder.bind(this);
//         this.handlerChangeSelectCategory = this.handlerChangeSelectCategory.bind(this);
//         this.handlerChangeTextRequest = this.handlerChangeTextRequest.bind(this);
//         this.handleInputKeyPress = this.handleInputKeyPress.bind(this);
//     }

//     componentDidMount(){
//         document.querySelector('input').focus();
//     }

//     handleInputKeyPress(e){
//         var key=e.keyCode || e.which;
//         if (key === 13){ // Клавиша Enter
//             this.props.getBooks(document.getElementById("search-string").value);
//         }
//     }

//     handlerChangeSelectOrder(event) {
//         this.props.setOrder(event.target.value);
//     }
//     handlerChangeSelectCategory(event) {
//         this.props.setCategory(event.target.value);
//     }

//     handlerChangeTextRequest(event){
//         this.props.setTextRequest(event.target.value);
//     }

    

//     render(){
//         return (
//             <header>

//                 <div className="header__content_center">
//                     <h1 className="header__title">Поиск книги</h1>
//                         <div className='className="header__form-search'>
//                             <input type="text" id="search-string" size="100" value={this.props.textRequest} onChange={this.handlerChangeTextRequest} onKeyPress={this.handleInputKeyPress}/>
//                             <button onClick={()=>(this.props.getBooks(document.getElementById("search-string").value))}>Поиск</button>
//                         </div>

//                         <div className='header__form-filter'>
//                             <label className="header__form-label" htmlFor="header__form-category">Категория:</label>                
//                             <select id="header__form-category" onChange={this.handlerChangeSelectCategory}>
//                                 {/* список категорий */} 
//                                 <option value='all'>all</option>
//                                 <option value='art'>art</option>
//                                 <option value='biography'>biography</option>
//                                 <option value='computers'>computers</option>
//                                 <option value='history'>history</option>
//                                 <option value='medical'>medical</option>
//                                 <option value='poetry'>poetry</option>
//                             </select>

//                             <label className="header__form-label" htmlFor="header__form-sort">Сортировка:</label>
//                             <select id="header__form-sort" onChange={this.handlerChangeSelectOrder}>
//                                 {/* Список сортировки */}
//                                 <option value='relevance'>relevance</option>
//                                 <option value='newest'>newest</option>
//                             </select>
//                         </div>
//                     {/* </form> */}
//                 </div>
//             </header>
//         );
//     }
// }