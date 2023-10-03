import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import { createRoot } from 'react-dom/client';
// import App from './App';

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <App />
// );

// import { createRoot } from 'react-dom/client';

// const root = createRoot(document.getElementById('root'));
// root.render(<h1>Hello, world</h1>);

// import { createRoot } from 'react-dom/client';

// function NavigationBar() {
//   return <h1>Hello from React</h1>;
// }

// const domNode = document.getElementById('navigation');
// const root = createRoot(domNode);
// root.render(<NavigationBar />);
