import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GenderRevealButton from './components/GenderRevealButton';
import GenderRevealPage from './components/GenderRevealPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={GenderRevealButton} />
      <Route path="/revelation" component={GenderRevealPage} />
    </Switch>
  );
};

export default Routes;
