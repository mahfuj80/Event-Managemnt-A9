import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import ErrorPage from '../Pages/Error/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import EventDetails from '../Pages/EventDetails/EventDetails';
import Bookings from '../Pages/Bookings/Bookings';
import Reviews from '../Pages/Reviews/Reviews';
import PrivateRoute from '../Private/PrivateRoutes';
import Profile from '../Pages/Profile/Profile';

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
        path: '/profile',
        element: <Profile></Profile>,
      },
      {
        path: '/bookings',
        element: (
          <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        ),
        loader: () => fetch('/services.json'),
      },
      {
        path: '/reviews',
        element: (
          <PrivateRoute>
            <Reviews></Reviews>
          </PrivateRoute>
        ),
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
