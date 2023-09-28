import App from '../App';
import Bus from '../pages/bus/bus'

const routes =  [
    {
      path: "/iuta-iii-adc-eval2",
      element: <App />
    },
    {
      path: "/iuta-iii-adc-eval2/bus",
      element: <Bus />
    }
]

export default routes;