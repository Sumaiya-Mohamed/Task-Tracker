import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/App'
import "../src/scss/app.scss"
import "../src/scss/header.scss"
import "../src/scss/PriorityLevel.scss"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
