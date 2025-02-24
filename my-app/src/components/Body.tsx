import Login from './login'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Browse from './Browse'

const Body = () => {
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/Browse",
    element: <Browse />
  },
])


  return (
    <RouterProvider router={router}/>
    
  )
}

export default Body
