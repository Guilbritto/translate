import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Login from '~/pages/Login';
import Home from '~/pages/Home';
import Project from '~/pages/Project';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/home" exact component={Home} isPrivate />
      <Route path="/projects" exact component={Project} isPrivate />
    </Switch>
  );
}
