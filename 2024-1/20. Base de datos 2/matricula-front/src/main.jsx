import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Matricula from './components/matricula/Matricula.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/matricula",
    element: <Matricula />,
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
