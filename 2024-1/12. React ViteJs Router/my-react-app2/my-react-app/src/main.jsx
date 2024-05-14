import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AboutUs from './routes/AboutUs.jsx'
import NotFound from './routes/NotFound.jsx'
import Posts from './routes/Posts.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "blogs/:id",
        element: <Posts />
      }
    ]
  },
  {
    path: "aboutus/",
    element: <AboutUs />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
