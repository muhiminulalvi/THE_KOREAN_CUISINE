import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../pages/Main";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import RecipeLayout from "../layouts/RecipeLayout/RecipeLayout";
import ChefData from "../pages/ChefData/ChefData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/blog",
            element: <Blog></Blog>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        }
    ]
  },
  {
    path: "chefs",
    element: <RecipeLayout></RecipeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/chefs/:id',
            element:<ChefData></ChefData>,
            loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
        }
    ]
  }
]);

export default router;
