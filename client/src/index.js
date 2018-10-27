import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
