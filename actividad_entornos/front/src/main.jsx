import { RouterProvider } from 'react-router-dom'
import router from './lib/routes'
import { createRoot } from 'react-dom/client'
import React from 'react'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
