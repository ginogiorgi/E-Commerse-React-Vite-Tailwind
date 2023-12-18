import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";
import { ShoppingCartIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

function NavBar() {
  const context = useContext(ShoppingCartContext);

  return (
    <nav className="flex justify-between z-10 w-full py-1 px-4 text-sm font-light top-0 ">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg text-blue-400">
          <NavLink
            to="/"
            onClick={() => context.setSearchByCategory("")}
            className=""
          >
            <ShoppingBagIcon className="h-10 text-blue-400 block mr-auto ml-auto w-4/5" />
            <p>Shopify</p>
          </NavLink>
        </li>
        <li className="text-center">
          <NavLink
            to="/men-clothing"
            onClick={() => context.setSearchByCategory("men's clothing")}
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Men's clothing
          </NavLink>
        </li>
        <li className="text-center">
          <NavLink
            to="/women-clothing"
            onClick={() => context.setSearchByCategory("women's clothing")}
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Women's clothing
          </NavLink>
        </li>
        <li className="text-center">
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchByCategory("electronics")}
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Electronics
          </NavLink>
        </li>
        <li className="text-center">
          <NavLink
            to="/jewelery"
            onClick={() => context.setSearchByCategory("jewelery")}
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Jewelery
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-center">
          <NavLink
            to="/my-orders"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            My Orders
          </NavLink>
        </li>
        <li
          onClick={() => {
            cart.className = "cursor-pointer flex gap-3 items-center";
            context.setIsProductCartOpen(!context.isProductCartOpen);
          }}
          className="cursor-pointer flex gap-3 items-center"
          id="cart"
        >
          <ShoppingCartIcon className="h-6 w-6 text-blue-400 cursor-pointer" />
          {context.cartProducts.length}
        </li>
      </ul>
    </nav>
  );
}

export { NavBar };
