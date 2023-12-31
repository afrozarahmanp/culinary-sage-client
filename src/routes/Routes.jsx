
import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import ChefAllDetails from "../pages/ChefAllDetails/ChefAllDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Terms from "../pages/Login/Terms";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/recipes/:id',
          element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://culinary-sage-server-afrozarahmanp.vercel.app/recipes/${params.id}`)

        },
        {
          path: '/chefdetails/:id',
          element:<PrivateRoute><ChefAllDetails></ChefAllDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://culinary-sage-server-afrozarahmanp.vercel.app/chefdetails/${params.id}`)

        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path: '/terms',
          element: <Terms></Terms>
        },


    ]
  },
  {
    path: '*',
    element:<NotFound></NotFound>
  }
]);

export default router;