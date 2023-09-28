import App from '../App';
import Bus from '../pages/bus/bus'

import { createHashRouter } from 'react-router-dom'

const routes =  createHashRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "/bus",
      element: <Bus />
    }
])

export default routes;