import { createRoot } from 'react-dom/client';
import createRoutes from './Router/index';
import reportWebVitals from './reportWebVitals';
import './styles/global.css';
import './index.css';
import './styles/sweetalert2Dark.css';

export default function App() {
  const routes = createRoutes();
  return routes;
}

const rootElement = document.getElementById('root');

// Ensure that the element with ID 'root' exists before rendering.
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
  );
} else {
  console.error("Element with ID 'root' not found!");
}

reportWebVitals();
