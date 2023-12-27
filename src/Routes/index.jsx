import { useRoutes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { MyOrder } from "../Pages/MyOrder";
import { MyOrders } from "../Pages/MyOrders";
import { MyAccount } from "../Pages/MyAccount";
import { SignIn } from "../Pages/SignIn";
import { Notfound } from "../Pages/NotFound";
import { useContext } from "react";
import { ShoppingCartContext } from "../Context";
import { Navigate } from "react-router-dom";

function AppRoutes() {
  const context = useContext(ShoppingCartContext);

  return useRoutes([
    {
      path: "/login",
      element: context.signOut ? <SignIn /> : <Navigate to="/home" />,
    },
    {
      path: "/home",
      element: context.signOut ? <Navigate to="/login" /> : <Home />,
      children: [
        { path: "/home/men-clothing", element: <Home /> },
        {
          path: "/home/women-clothing",
          element: <Home />,
        },
        { path: "/home/electronics", element: <Home /> },
        { path: "/home/jewelery", element: <Home /> },
      ],
    },
    {
      path: "/my-orders",
      element: context.signOut ? <Navigate to="/login" /> : <MyOrders />,
    },
    {
      path: "/my-orders/last",
      element: context.signOut ? <Navigate to="/login" /> : <MyOrder />,
    },
    {
      path: "/my-orders/:id",
      element: context.signOut ? <Navigate to="/login" /> : <MyOrder />,
    },
    {
      path: "/my-account",
      element: context.signOut ? <Navigate to="/login" /> : <MyAccount />,
    },
    {
      path: "/*",
      element: context.signOut ? <Navigate to="/login" /> : <Notfound />,
    },
    {
      path: "/my-order",
      element: context.signOut ? <Navigate to="/login" /> : <MyOrder />,
    },
  ]);
}

export { AppRoutes };
