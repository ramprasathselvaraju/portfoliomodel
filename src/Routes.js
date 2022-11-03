/* eslint-disable */
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Home,
  AddModal,
  EditModal
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/Home"
      />

      <RouteWithLayout
        component={Home}
        exact
        layout={MainLayout}
        path="/Home"
      />

      <RouteWithLayout
        component={AddModal}
        exact
        layout={MainLayout}
        path="/AddModal"
      />
  <RouteWithLayout
        component={EditModal}
        exact
        layout={MainLayout}
        path="/EditModal"
      />
    
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
