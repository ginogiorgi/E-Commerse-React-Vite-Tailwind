import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";

function NavBar() {
  const context = useContext(ShoppingCartContext);

  return (
    <nav className="flex justify-between items-center z-10 w-full py-5 px-4 text-sm font-light top-0 ">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg text-center">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li className="text-center">
          <NavLink
            to="/men-clothing"
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
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Electronics
          </NavLink>
        </li>
        <li className="text-center">
          <NavLink
            to="/jewelry"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Jewelery
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-myGray cursor-default text-center">
          ginorubengiorgi@gmail.com
        </li>
        <li className="text-center">
          <NavLink
            to="/my-account"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            My Account
          </NavLink>
        </li>
        <li className="text-center">
          <NavLink
            to="/sign-in"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Sign In
          </NavLink>
        </li>
        <li>🛒</li>
        <li id="cart">{context.count}</li>
      </ul>
    </nav>
  );
}

export { NavBar };
