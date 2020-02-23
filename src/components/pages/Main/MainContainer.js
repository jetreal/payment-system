import { connect } from 'react-redux';

import Main from './Main';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { onLogout } from '../../../redux/actions';
import { onFetchCurrentUserDataAsync,
   onButtonCreateTransaction,
    onButtonHistoryTransaction,
     onFetchFilterRecipientAsync,
      onClearRecipient 
} from '../../../redux/actions/mainActions';
// import { onSubmitLoginAsync } from '../../../redux/actions';


let mapStateToProps = (state) => {
  return {
    MainState: state.MainReducer
  }
}


let AuthRedirectComponent = withAuthRedirect(Main)
const MainContainer = connect(
  mapStateToProps,
  {
    onLogout,
    onFetchCurrentUserDataAsync,
    onButtonCreateTransaction,
    onButtonHistoryTransaction,
    onFetchFilterRecipientAsync,
    onClearRecipient
  }
)(AuthRedirectComponent)

export default MainContainer

