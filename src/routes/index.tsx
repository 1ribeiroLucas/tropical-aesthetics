import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import {
  About,
  NotFound,
  Projects,
  Welcome
} from '../pages';
import paths from '../paths';

const { HOME, ABOUT, PROJECTS } = paths;

export default function Routes() {
  return (
    <Switch>
      <Route exact path={HOME} component={Welcome} />
      <Route path={ABOUT} component={About} />
      <Route path={PROJECTS} component={Projects} />
      <Route component={NotFound} />
    </Switch>
  );
};
