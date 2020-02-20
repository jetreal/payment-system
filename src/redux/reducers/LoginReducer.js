import { SUBMIT_LOGIN, ON_LOGIN_ERROR, LOGOUT, ON_REGISTER_ERROR, SUBMIT_REGISTER, CLEAR_FORM_WARNING } from "../types";

let initialState = {
  isRegisterSucces: true,
  warningText: '',
  jwt: '',
  loginData: {
    Email: '',
    Password: '',
    isAuth: false
  }
}

const LoginReducer = (state = initialState, action) => {
  switch (true) {
    case (action.type === CLEAR_FORM_WARNING): {
      let stateCopy = { ...state }
      stateCopy.warningText = ''
      return stateCopy
    }
    case (action.type === LOGOUT): {
      let stateCopy = { ...state }
      stateCopy.loginData.isAuth = false;
      return stateCopy
    };
    case (action.type === SUBMIT_LOGIN): {
      let stateCopy = { ...state }
      stateCopy.jwt = action.loginData.data.id_token;
      stateCopy.loginData.isAuth = true;
      stateCopy.warningText = 'Success'
      
      return stateCopy
    }
    case (action.type === SUBMIT_REGISTER): {

      let stateCopy = { ...state }
      stateCopy.warningText = action.servResponce

      if (action.servResponce.status && action.servResponce.status === 201) {
        stateCopy.warningText = action.servResponce.statusText
        stateCopy.isRegisterSucces = true
      }
      return stateCopy
    }
    case (action.type === ON_LOGIN_ERROR): {
      let stateCopy = { ...state }

      if (action.errorData === '400') {
        stateCopy.warningText = 'Заполните все поля!'
      }

      if (action.errorData === '401') {
        stateCopy.warningText = 'Логин или пароль ошибочны!'
      }

      return stateCopy
    }
    case (action.type === ON_REGISTER_ERROR): {
      console.log(action)
      let stateCopy = { ...state }  

        // stateCopy.warningText = action

      return stateCopy
    }
    default:
      return { ...state }
  }

}

export default LoginReducer