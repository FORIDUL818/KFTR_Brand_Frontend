import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/landing'

export default function App() {

  let router = createBrowserRouter([
    {
      path:"/",element:<Landing/>
    },
   
  ])

  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  )
}
