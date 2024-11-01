import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./Navigation.css";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const navigationItems = [
  { name: "Home", link: "/home", current: false },
  { name: "About", link: "/about", current: false },
  { name: "Projects", link: "/projects", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation({ mode, toggleMode }) {
  const [navigation, setNavigation] = useState(navigationItems);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const updatedNavigation = navigationItems.map((item) => ({
      ...item,
      current: item.link === currentPath,
    }));
    setNavigation(updatedNavigation);
  }, [location]);

  return (
    <Disclosure
      as="nav"
      className={
        mode === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-100 text-red-500"
      }
    >
      <div className="mx-auto max-w-7xl px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton
              className={
                mode === "dark"
                  ? "group relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none ring-1 ring-inset ring-gray-400"
                  : "group relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none ring-1 ring-inset ring-red-400"
              }
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-4 w-4 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-4 w-4 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 justify-between items-center md:items-stretch">
            <div className="flex flex-shrink-0 items-center">
              <p className="font-semibold text-3xl">SB</p>
            </div>
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? mode === "light"
                          ? "curr-light"
                          : "curr-dark"
                        : mode === "light"
                        ? "under-light"
                        : "under-dark",
                      "rounded-md py-2 text-xl pe-8 relative"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div
              onClick={toggleMode}
              className="md:flex items-center cursor-pointer hover:scale-125 transition duration-700 ease-in-out hidden"
            >
              {mode === "light" ? (
                <LightModeIcon sx={{ color: "#ef4444" }} />
              ) : (
                <DarkModeIcon sx={{ color: "white" }} />
              )}
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <div
            onClick={toggleMode}
            className="flex items-center justify-center p-5 cursor-pointer hover:scale-125 transition duration-700 ease-in-out"
          >
            {mode === "light" ? (
              <LightModeIcon sx={{ color: "black" }} />
            ) : (
              <DarkModeIcon sx={{ color: "white" }} />
            )}
          </div>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? mode === "light"
                    ? "bg-gray-300"
                    : " bg-gray-700"
                  : mode === "light"
                  ? "text-gray-500 hover:bg-gray-200 hover:text-slate-900"
                  : "text-gray-500 hover:bg-gray-800 hover:text-slate-100",
                "block rounded-md px-3 py-2 text-base font-normal text-center"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
