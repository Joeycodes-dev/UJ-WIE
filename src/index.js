import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import ScrollLock from './screens/main/scrollLock';

ReactDOM.render(
  <React.StrictMode>
  
    <BrowserRouter>
    <ScrollLock/>
      <App />
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

