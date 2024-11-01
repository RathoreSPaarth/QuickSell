import React from 'react';
import ReactDOM from 'react-dom';
// import 'C:\Users\A K S Rathore\Desktop\quicksell-frontend\src\styles.css';  // Import global styles
import App from './app'; // Main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Mounting the App component to the root div in index.html
);
