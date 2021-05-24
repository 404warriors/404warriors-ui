import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WithLayout from 'WithLayout';
import { Main as MainLayout } from './layouts';

import {
  LandingView
} from './views';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={LandingView}
            layout={MainLayout}
          />
        )}
      />
    </Switch>
  );
};

export default Routes;
