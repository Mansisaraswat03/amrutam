import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Header } from './components/Header.jsx'
import { Helmet } from 'react-helmet';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Helmet>
        <title>Amrutam</title>
      </Helmet>
  <Header/>
    <App />
  </React.StrictMode>,
)
