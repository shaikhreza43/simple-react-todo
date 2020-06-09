import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/wrappers/App';

// Add bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Add our style
import './assets/style/index.css';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
