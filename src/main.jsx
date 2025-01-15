import React from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter} from "react-router-dom";
import App from './App.jsx'
import './index.css';
import { AuthProvider } from './AuthContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
          <HashRouter>
              <App />
          </HashRouter>
      </AuthProvider>
  </React.StrictMode>,
)
