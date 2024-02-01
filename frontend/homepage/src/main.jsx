import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RoutesApp from './RoutesApp.jsx'
import i18n from '../i18n.js'
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}> {/* Wrap your root component with I18nextProvider */}
         <RoutesApp />
    </I18nextProvider>
  </React.StrictMode>,
)
