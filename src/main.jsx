import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MainRoute from './routes/mainRoute.jsx';
import { Provider } from 'react-redux';
import { persistor, store } from './app/store.js';
import { Toaster } from 'react-hot-toast';
import { PersistGate } from 'redux-persist/integration/react';
import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";
import './index.css';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <BrowserRouter>
      {/* <BrowserRouter basename="/project-management-admin" > */}
        <div><Toaster /></div>
        <MainRoute />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
