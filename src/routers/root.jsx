import App from '../App';
import Bus from '../pages/bus/bus';
import Processor from '../pages/processor/processor';
import Memory from '../pages/memory/memory'
import Data from '../pages/data/data'
import Disk from '../pages/disk/disk'
import SO from '../pages/so/so'



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
    },
    {
      path: "/data",
      element: <Data />
    },
    {
      path: "/disk",
      element: <Disk />
    },
    {
      path: "/so",
      element: <SO />
    }
])

export default routes;