import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ComponentUI from './ComponentUI'
import OpenData from './openData'

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <ComponentUI/>
  },
  {
    path: '/meal-generator',
    element: <OpenData/>
  }
])

function App() {
  

  return (
    <div>
      <RouterProvider router={myRouter}/>
    </div>
  )
}

export default App
