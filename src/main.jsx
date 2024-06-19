import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import {Hero, NewsLetter, Team} from './components/components.index.js'




const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout />,
    children: [
      {
        path: "/",
        element: <Hero />
      },
      {
        path: "/team",
        element: <Team />
      },
      {
        path: "/news-letter/",
        element: <NewsLetter />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* <Navbar /> */}
   {/* <Hero /> */}
   {/* <NewsLetter /> */}
   {/* <Team /> */}
   {/* <Footer /> */}
   
   <RouterProvider router={router} />
  </React.StrictMode>,
)
