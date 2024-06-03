import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AboutUs from './routes/AboutUs.jsx'
import NotFound from './routes/NotFound.jsx'
import Login from './routes/Login.jsx'
import Posts from './routes/Posts.jsx'
import NewPost from './routes/NewPost.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import './index.css'

import { UserProvider } from './context/User'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: "/blogs/:postId",
    element: <Posts />
  },
  {
    path: "aboutus/",
    element: <AboutUs />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "nueva-entrada",
    element: <NewPost />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </UserProvider>,
)
