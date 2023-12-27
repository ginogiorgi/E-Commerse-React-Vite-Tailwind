import { useRoutes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { MyOrder } from "../Pages/MyOrder";
import { MyOrders } from "../Pages/MyOrders";
import { MyAccount } from "../Pages/MyAccount";
import { SignIn } from "../Pages/SignIn";
import { Notfound } from "../Pages/NotFound";
import { useContext } from "react";
import { ShoppingCartContext } from "../Context";
import { Navigate, Outlet } from "react-router-dom";

function AppRoutes() {
  const context = useContext(ShoppingCartContext);


  const isLoggedOff = context.signOut


  return useRoutes([
    { path: "/login", element: isLoggedOff ? <SignIn /> : < Navigate to='/' /> },
    {
      path: '/', element: isLoggedOff ? < Navigate to='/login' /> : <Outlet />, children: [
        { path: "/", element: <Home /> },
        { path: "/men-clothing", element: <Home /> },
        {
          path: "/women-clothing",
          element: <Home />,
        },
        { path: "/electronics", element: <Home /> },
        { path: "/jewelery", element: <Home /> },
        { path: "/my-order", element: <MyOrder /> },
        {
          path: "/my-orders",
          element: <MyOrders />,
        },
        {
          path: "/my-orders/last",
          element: <MyOrder />,
        },
        {
          path: "/my-orders/:id",
          element: <MyOrder />,
        },
        {
          path: "/my-account",
          element: <MyAccount />,
        },
      ]
    },
    { path: "/*", element: <Notfound /> },


  ]);
}

export { AppRoutes };
