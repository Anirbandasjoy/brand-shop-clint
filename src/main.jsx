import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './context/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster
      toastOptions={{
        position: "top-center",
        style: {
          background: "#283046",
          color: 'white'
        }
      }}
    />
  </React.StrictMode>,
)
