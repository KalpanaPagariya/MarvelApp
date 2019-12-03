import axios from 'axios';

/**
 * Call api to fetch characters of marvel
 */
export const fetchMarvelCharacters = () =>{
   return axios.get('https://gateway.marvel.com/v1/public/characters?ts=1565922410&apikey=6a038473ffd6407750a2ea27115f7e7c&hash=1492df65a88ef98a1a279719fe509f72')
    
}