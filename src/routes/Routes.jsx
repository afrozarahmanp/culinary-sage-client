
import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import ChefAllDetails from "../pages/ChefAllDetails/ChefAllDetails";


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
          element: <FoodDetails></FoodDetails>,
          loader: ({params}) => fetch(`http://localhost:3000/recipes/${params.id}`)

        },
        {
          path: '/chefdetails/:id',
          element:<ChefAllDetails></ChefAllDetails>,
          loader: ({params}) => fetch(`http://localhost:3000/chefdetails/${params.id}`)

        }
    ]
  },
]);

export default router;