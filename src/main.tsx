import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './components/index.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Index />
    </React.StrictMode>
  </BrowserRouter>
)
