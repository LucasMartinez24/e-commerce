import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import 'boxicons/css/boxicons.min.css';
import { store } from './stores/index';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('No se encontró el elemento con el id "root"');
}

createRoot(rootElement).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);