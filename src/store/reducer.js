const defaultState = { // начальное состояние хранилища
    books: null,
    items: 0,
    category: 'all',
    order: 'relevance',
    openBook: null,
    textRequest: '',
  };

export const reducer = (state = defaultState, action) => {
    switch(action.type){
      case "GET_BOOKS": 
        return {...state, books: action.payloader};
      case "ADD_BOOKS": 
        return {...state, books: [...state.books, ...action.payloader]};
      case "CLEAR_BOOKS": 
        return {...state, books: null};       
        
      case "SET_ITEMS": 
        return {...state, items: action.payloader};
  
      case "SET_CATEGORY": 
        return {...state, category: action.payloader};  
        
      case "SET_ORDER": 
        return {...state, order: action.payloader};
  
      case "GET_FULL_BOOK": 
        return {...state, openBook: action.payloader};
      case "CLEAR_FULL_BOOK": 
        return {...state, openBook: null}; 
  
      case "CHANGE_TEXT_REQUEST":
        return {...state, textRequest: action.payloader};
  
      default: 
        return state;
    }
  }