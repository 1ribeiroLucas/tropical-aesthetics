import React from 'react';
import {
  Navbar,
  Footer,
  Stack,
} from './components';
import Routes from './routes';

import './css/about.css';
import './css/footer.css';
import './css/navbar.css';
import './css/stack.css';
import './css/styles.css';
import './css/welcome.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes />
      <Stack />
      <Footer />
    </div>
  )
}
