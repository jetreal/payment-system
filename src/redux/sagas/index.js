import { put, takeEvery, all } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

// Наша Сага-наблюдатель: создаёт новые incrementAsync задачи на каждом INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('SUBMIT_REGISTER', delayChangeRegisterPage)
  yield takeEvery('SUBMIT_LOGIN', delayChangeLoginPage)


  // yield takeEvery('RIGHT_BUTTON_CLICK', showReactText)
  // yield takeEvery(['INITIAL_SLIDE_LEFT', 'INITIAL_SLIDE_RIGHT' ], unblockSlider)

}


export function* delayChangeRegisterPage() {
    yield delay(1150)
    yield put({type: 'CHANGE_REGISTERPAGE_WITH_DELAY'})
    // yield put({type: 'CHANGE_TV'})
  }
  export function* delayChangeLoginPage() {
    yield delay(1150)
    yield put({type: 'CHANGE_LOGINPAGE_WITH_DELAY'})
    // yield put({type: 'CHANGE_TV'})
  }

export default function* rootSaga() {
    yield all([
      // helloSaga,
      watchIncrementAsync()
    ])
  }

  