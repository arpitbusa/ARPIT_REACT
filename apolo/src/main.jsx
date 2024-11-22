import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider domain ="dev-n83qcws8rii7z14l.us.auth0.com" clientId="nMuo3hish4hLY0gREgSE6D6GtMNlTiNG">
    <App />
    </Auth0Provider>
  </StrictMode>,
)
