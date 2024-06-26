import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Helmet } from 'react-helmet';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Helmet>
        <title>Amrutam</title>
      </Helmet>
    <App />
  </React.StrictMode>,
)
