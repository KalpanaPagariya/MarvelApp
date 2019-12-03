const initialState = {
  favourites: [],
}

const characters = (state = initialState, action) => {
    switch (action.type) {
      case 'RESPONSE_FETCH_CHARACTERS':
        return {
          ...state,
          info: action.payload
        }
      case 'ADD_CHARACTER_FAV':
          return {
            ...state,
            favourites: [...state.favourites,action.selectedItem]
      }
      case 'REMOVE_CHARACTER_FAV':
          const newFav = state.favourites.filter(fav=>{
            if(fav.id !== action.selectedItem.id){
              return fav;
            }
          })
          return {
            ...state,
            favourites: newFav
      }
      case 'ADD_NOTIFICATION':
          return {
            ...state,
            notification: {msg: action.msg, type: action.notifyType}
      }
      default:
        return state
    }
  }

  export default characters;