import React from 'react';
import ReactDOM from 'react-dom/client';
import createRoutes from './Router/index';
import reportWebVitals from './reportWebVitals';
import './styles/global.css';
import './index.css';
import './styles/sweetalert2Dark.css';

export default function App() {
  const routes = createRoutes();
  return routes;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
reportWebVitals();
