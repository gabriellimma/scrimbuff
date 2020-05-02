import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Share from '../pages/Share';
import FindPlayers from '../pages/FindPlayers';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={FindPlayers} />
    <Route path="/share" component={Share} />
  </Switch>
);

export default Routes;
