import { connect } from 'react-redux'
import { addToFav, removeFromFav, addNotification } from '../actions'
import  FavouritesButton  from '../components/details/FavouritesButton.component';

const mapStateToProps = state => {
   
    return{
    favourites: state.characters.favourites,
}}
  
  const mapDispatchToProps = dispatch => ({
    addToFav: (item)=> dispatch(addToFav(item)),
    removeFromFav: (item)=> dispatch(removeFromFav(item)),
    addNotification: (msg,type)=> dispatch(addNotification(msg,type)),
  })

const FavouritesButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(FavouritesButton);


export default FavouritesButtonContainer;