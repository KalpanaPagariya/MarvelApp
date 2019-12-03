import { connect } from 'react-redux'
import { fetchCharacters } from '../actions'
import  ViewCharacters  from '../components/ViewCharacters.component';

const mapStateToProps = state => {
   
    return{
    characters: state.characters.info,
    favourites: state.characters.favourites,
}}
  
  const mapDispatchToProps = dispatch => ({
    fetchCharacters: ()=> dispatch(fetchCharacters())
  })

const ViewCharactersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewCharacters);


export default ViewCharactersContainer;