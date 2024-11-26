import React from 'react';
import ReactDOM from 'react-dom/client';


function App() {
  return(
    <h1>Hello, I am Hephzibah Reginald Otuene. This is my First React Project</h1>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);