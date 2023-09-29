import App from '../App';
import Bus from '../pages/bus/bus';
import Processor from '../pages/processor/processor';
import Memory from '../pages/memory/memory'



import { createHashRouter } from 'react-router-dom'

const routes =  createHashRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "/bus",
      element: <Bus />
    },
    {
      path: "/processor",
      element: <Processor />
    },
    {
      path: "/memory",
      element: <Memory />
    }
])

export default routes;