import { useRoutes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { MyOrder } from "../Pages/MyOrder";
import { MyOrders } from "../Pages/MyOrders";
import { MyAccount } from "../Pages/MyAccount";
import { SignIn } from "../Pages/SignIn";
import { Notfound } from "../Pages/NotFound";
import { useContext } from "react";
import { ShoppingCartContext } from "../Context";

function AppRoutes() {
  const context = useContext(ShoppingCartContext);

  return useRoutes([
    { path: "/", element: context.signOut ? <SignIn /> : <Home /> },
    { path: "/men-clothing", element: context.signOut ? <SignIn /> : <Home /> },
    {
      path: "/women-clothing",
      element: context.signOut ? <SignIn /> : <Home />,
    },
    { path: "/electronics", element: context.signOut ? <SignIn /> : <Home /> },
    { path: "/jewelery", element: context.signOut ? <SignIn /> : <Home /> },
    { path: "/my-order", element: context.signOut ? <SignIn /> : <MyOrder /> },
    {
      path: "/my-orders",
      element: context.signOut ? <SignIn /> : <MyOrders />,
    },
    {
      path: "/my-orders/last",
      element: context.signOut ? <SignIn /> : <MyOrder />,
    },
    {
      path: "/my-orders/:id",
      element: context.signOut ? <SignIn /> : <MyOrder />,
    },
    { path: "/sign-in", element: context.signOut ? <SignIn /> : <Home /> },
    {
      path: "/my-account",
      element: context.signOut ? <SignIn /> : <MyAccount />,
    },
    { path: "/*", element: context.signOut ? <SignIn /> : <Notfound /> },
  ]);
}

export { AppRoutes };
