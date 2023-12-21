import { useRoutes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { MyOrder } from "../Pages/MyOrder";
import { MyOrders } from "../Pages/MyOrders";
import { MyAccount } from "../Pages/MyAccount";
import { SignIn } from "../Pages/SignIn";
import { Notfound } from "../Pages/NotFound";

function AppRoutes() {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/men-clothing", element: <Home /> },
    { path: "/women-clothing", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/jewelery", element: <Home /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/*", element: <Notfound /> },
  ]);
}

export { AppRoutes };
