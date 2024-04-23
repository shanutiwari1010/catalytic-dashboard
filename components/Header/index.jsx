import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className=" shadow sticky z-50  top-0 p-3 bg-black">
      <nav className="px-4 lg:px-6 py-2.5 flex justify-center shadow-md">
        <div
          className=" hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex gap-5 ">
            <li>
              <NavLink
                to="/intheft"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                    isActive ? "text-purple-700" : "text-white"
                  } lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                }
              >
                inTheft
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/devices"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                    isActive ? "text-purple-700" : "text-white"
                  } lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                }
              >
                devices
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/vehicles"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                    isActive ? "text-purple-700" : "text-white"
                  } lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                }
              >
                Vehicles
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mycustomer"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                    isActive ? "text-purple-700" : "text-white"
                  } lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                }
              >
                My Customers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                    isActive ? "text-purple-700" : "text-white"
                  } lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                }
              >
                Profile
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                    isActive ? "text-purple-700" : "text-white"
                  } lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                }
              >
                Login
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                    isActive ? "text-purple-700" : "text-white"
                  } lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                }
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
