import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./scss/app.scss"
import "./scss/header.scss"
import "./scss/PriorityLevel.scss"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
