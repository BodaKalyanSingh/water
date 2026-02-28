import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

// entry point for the React application.  The previous version of this file
// was accidentally truncated during earlier filesystem operations, which
// resulted in an empty bundle and a blank page.  Restoring the original
// boilerplate ensures the app actually renders.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
