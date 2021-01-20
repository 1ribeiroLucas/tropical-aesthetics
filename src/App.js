import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import {
  About,
  Navbar,
  NotFound,
  Footer,
  Projects,
  Stack,
  Welcome,
} from './components';

// CSS Imports
import './css/styles.css';
import './css/navbar.css';
import './css/stack.css';
import './css/footer.css';
import './css/welcome.css';
import './css/about.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <div className="content-container">
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Stack />
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}