import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { AlbumsContextProvider } from './store/albums-context.js';

ReactDOM.render(
    <AlbumsContextProvider>
        <App />
    </AlbumsContextProvider>
,document.getElementById('root'));

