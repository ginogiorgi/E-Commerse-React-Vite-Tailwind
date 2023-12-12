import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { Notfound } from "../NotFound";
import { SignIn } from "../SignIn";

function App() {
  return (
    <>
      <Home />
      <MyAccount />
      <MyOrder />
      <MyOrders />
      <Notfound />
      <SignIn />
    </>
  );
}

export default App;
