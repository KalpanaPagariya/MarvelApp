import { fetchMarvelCharacters } from '../api/charactersApi';

/**
 * Redux action request to fetch characters
 */
export const requestFetchCharacters = () => ({
    type: 'REQUEST_FETCH_CHARACTERS',
})

/**
 * Redux action response to fetch characters
 */
export const responseFetchCharacters = (payload) => ({
  type: 'RESPONSE_FETCH_CHARACTERS',
  payload
})

/**
 * Redux action to add character to favourites
 */
export const addToFav = (selectedItem) => ({
  type: 'ADD_CHARACTER_FAV',
  selectedItem
})

/**
 * Redux action to remove character to favourites
 */
export const removeFromFav = (selectedItem) => ({
  type: 'REMOVE_CHARACTER_FAV',
  selectedItem
})

/**
 * Redux action to add show failure notification
 */
export const addNotification = (msg,notifyType) => ({
  type: 'ADD_NOTIFICATION',
  msg,
  notifyType
})

/**
 * Redux action to fetch characters
 */
export const fetchCharacters = () =>{
    
    return async function(dispatch) {
        dispatch(requestFetchCharacters());
        fetchMarvelCharacters().then(res => {
          if (res.status === 200) {
            dispatch(responseFetchCharacters(res));
          }
      }).catch(error=>{
        console.log(error.response);
        dispatch(addNotification(error.response.data.message),'error');
      });
        
    }
}