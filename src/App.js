import React from 'react';
import './App.sass';
import { BrowserRouter, Route, HashRouter, Switch } from 'react-router-dom';
import LoginContainer from './components/pages/Login/LoginContainer';

import ContainerRegister from './components/pages/Register/ContainerRegister';
import MainContainer from './components/pages/Main/MainContainer';
import { propSatisfies } from 'ramda';





function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/' exact
            render={() => <MainContainer />} />

          <Route path='/login'
            render={() => <LoginContainer />} />

          <Route path='/register'
            render={() => <ContainerRegister />} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;