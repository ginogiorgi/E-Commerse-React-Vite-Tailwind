import { BrowserRouter } from "react-router-dom";
import { NavBar } from "../../Components/Navbar";
import { ShoppingCartProvider } from "../../Context";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";
import { AppRoutes } from "../../Routes";

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter basename="/reactWithViteAndTailwindCSS/">
        <NavBar />
        <CheckoutSideMenu />
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
