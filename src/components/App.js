import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Design from './Design';

const App = (props) => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/design' component={Design} />
      </Switch>
    </>
  );
};

export default App;
