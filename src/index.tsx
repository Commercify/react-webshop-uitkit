import React from 'react';
import ReactDOM from 'react-dom';

import { Page } from './Layout/Page/Page';

const App = () => (
  <Page>
    <h1>React Webshop UI Kit</h1>
  </Page>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
