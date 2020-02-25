import { FETCH_USER_DATA,
   FETCH_USER_DATA_ERROR,
    ON_BUTTON_CREATE_TRANSACTION,
     ON_BUTTON_HISTORY_TRANSACTION,
     ON_GET_USERS,
     ON_CLEAR_RECIPIENT_LIST,
     SET_RECIPIENT_NAME,
     SET_RECIPIENT_AMOUNT
      } from "../types";

let initialState = {
  recipient: {
    name: '',
    amount: 0
  },
  filterRecipients: [],
  isHistoryButton: false,
  isTransactionButton: false,
  userData: {
    id: 0,
    name: '',
    email: '',
    balance: 0
  }
}

const MainReducer = (state = initialState, action) => {
  switch (true) {
    case (action.type === SET_RECIPIENT_AMOUNT): {
      let stateCopy = { ...state}
        stateCopy.recipient.amount = action.amount
        console.log(stateCopy.recipient)
      return stateCopy
    }
    case (action.type === SET_RECIPIENT_NAME): {
      let stateCopy = { ...state}
        stateCopy.recipient.name = action.name
      return stateCopy
    }
    case (action.type === ON_CLEAR_RECIPIENT_LIST): {
      let stateCopy = { ...state}
        stateCopy.filterRecipients = []
        stateCopy.recipient.name = ''
      return stateCopy
    }
    case (action.type === ON_GET_USERS): {
      let stateCopy = { ...state}
        stateCopy.filterRecipients = [...action.recipients.data]
      return stateCopy
    }
    case (action.type === ON_BUTTON_HISTORY_TRANSACTION): {
      let stateCopy = { ...state}
      if (!stateCopy.isTransactionButton) {
        stateCopy.isHistoryButton = !stateCopy.isHistoryButton
      }

      return stateCopy
    }
    case (action.type === ON_BUTTON_CREATE_TRANSACTION): {
      let stateCopy = { ...state}
      if (!stateCopy.isHistoryButton) {
        stateCopy.isTransactionButton = !stateCopy.isTransactionButton
      }
      return stateCopy
    }
    case (action.type === FETCH_USER_DATA): {
      let stateCopy = { ...state}
      stateCopy.userData = {...action.userObj.data.user_info_token}
      stateCopy.itAuth = true
      return stateCopy
    }
    
    default:
      return { ...state }
  }

}

export default MainReducer