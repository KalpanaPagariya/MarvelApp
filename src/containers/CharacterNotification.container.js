import { connect } from 'react-redux';
import  CharacterNotification  from '../components/CharacterNotification.component';

const mapStateToProps = state => {
    return{
        notification: state.characters.notification,
    }
}
  
const CharacterNotificationContainer = connect(
    mapStateToProps,
    null
  )(CharacterNotification);


export default CharacterNotificationContainer;