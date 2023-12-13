import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-4 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/all"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-myGray cursor-default">
          ginorubengiorgi@gmail.com
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Sign In
          </NavLink>
        </li>
        <li>🛒 0</li>
      </ul>
    </nav>
  );
}

export { NavBar };
