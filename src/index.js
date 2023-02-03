import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App'
import reportWebVitals from './reportWebVitals';
import 'tachyons';


// ReactDOM.render(
//    <CardList robots={robots}/>
//     , document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

