import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import ErrorPage from '../Pages/Error/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import EventDetails from '../Pages/EventDetails/EventDetails';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/registration',
        element: <Registration></Registration>,
      },
      {
        path: '/details/:id',
        element: <EventDetails></EventDetails>,
        loader: () => fetch('/services.json'),
      },
    ],
  },
]);
export default router;
