import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AddCoffee from '../pages/AddCoffee';
import UpdateCoffee from '../pages/Updatecoffee';
import Error from '../pages/Error';
import SignUp from '../pages/SignUp';
import Users from '../pages/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee'),
  },
  {
    path: '*',
    element: <Error></Error>,
  },
  {
    path: 'addCoffee',
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: 'updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
  {
    path: 'signUp',
    element: <SignUp></SignUp>,
  },
  {
    path: 'users',
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/users'),
  },
]);

export default router;
