import React from 'react';
import ReactDOM from 'react-dom';

import * as UI from './Main';

const App = () => (
  <UI.Page>
    <UI.Container>
      <h1>React Webshop UI Kit</h1>
    </UI.Container>
  </UI.Page>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
