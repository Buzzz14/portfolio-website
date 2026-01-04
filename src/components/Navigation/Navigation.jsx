import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMode } from "../../context/ModeContext";

const navigationItems = [
  { name: "Home", link: "/home", current: false },
  { name: "About", link: "/about", current: false },
  { name: "Projects", link: "/projects", current: false },
  // { name: "Contact", link: "/contact", current: false },
];

function isHomePath(path) {
  return path === "/" || path === "/home";
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const { mode, toggleMode } = useMode();
  const [navigation, setNavigation] = useState(navigationItems);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const underlineRefs = useRef([]);
  const iconRef = useRef(null);

  useGSAP(() => {
    gsap.set(underlineRefs.current, { scaleX: 0, transformOrigin: "left" });
    gsap.from(".links", { y: -10, opacity: 0, stagger: 0.2 });
    gsap.from("#a", { y: -10, opacity: 0, stagger: 0.5 });
    gsap.from("#b", { y: 10, opacity: 0, stagger: 0.5 });
  }, []);

  const handleMouseEnter = (index) => {
    gsap.to(underlineRefs.current[index], {
      scaleX: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (!navigation[index]?.current) {
      gsap.to(underlineRefs.current[index], {
        scaleX: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  };

  const handleMouseEnterTwo = () => {
    gsap.to(iconRef.current, { scale: 1.5, duration: 0.25 });
  };

  const handleMouseLeaveTwo = () => {
    gsap.to(iconRef.current, { scale: 1, duration: 0.25 });
  };

  useEffect(() => {
    const currentPath = location.pathname;

    const updatedNavigation = navigationItems.map((item) => {
      if (item.link === "/home" && isHomePath(currentPath)) {
        return { ...item, current: true };
      }
      return { ...item, current: item.link === currentPath };
    });

    setNavigation(updatedNavigation);

    setIsOpen(false);

    let currentIndex = navigationItems.findIndex((item) =>
      item.link === "/home" && isHomePath(currentPath)
        ? true
        : item.link === currentPath
    );

    if (currentIndex === -1) {
      currentIndex = navigationItems.findIndex((item) => item.link === currentPath);
    }

    if (currentIndex !== -1 && underlineRefs.current[currentIndex]) {
      gsap.to(underlineRefs.current[currentIndex], {
        scaleX: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    navigationItems.forEach((_item, idx) => {
      if (idx !== currentIndex && underlineRefs.current[idx]) {
        gsap.to(underlineRefs.current[idx], {
          scaleX: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    });
  }, [location]);

  useEffect(() => {
    underlineRefs.current = [];
  }, []);

  return (
    <Disclosure
      as="nav"
      className={
        mode === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-100 text-gray-900"
      }
      open={isOpen}
      onChange={setIsOpen}
    >
      {({ close }) => (
        <>
          <div className="mx-auto max-w-7xl px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none ring-1 ring-inset ring-violet-400">
                  <div
                    className={
                      mode === "dark" ? " ring-gray-400" : " ring-violet-400"
                    }
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? (
                      <XMarkIcon className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="h-4 w-4" aria-hidden="true" />
                    )}
                  </div>
                </DisclosureButton>
              </div>

              <div className="flex flex-1 justify-between items-center md:items-stretch">
                <div className="flex flex-shrink-0 items-center font-semibold text-3xl">
                  <Link
                    to="/"
                    className={
                      mode === "dark" ? "text-gray-100" : "text-violet-600"
                    }
                    onClick={() => close()}
                  >
                    <span id="a" className="inline-block">
                      S
                    </span>
                    <span id="b" className="inline-block">
                      B
                    </span>
                  </Link>
                </div>

                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-4 items-center">
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        aria-current={item.current ? "page" : undefined}
                        className="links rounded-md py-2 text-xl pe-8 relative"
                      >
                        {item.name}
                        <div
                          ref={(el) => (underlineRefs.current[index] = el)}
                          className={
                            mode === "dark"
                              ? "h-[2px] mt-1 bg-white"
                              : "h-[2px] mt-1 bg-violet-600"
                          }
                        ></div>
                      </Link>
                    ))}
                    <a
                      href="/Sushan_Bajracharya_Resume.pdf"
                      download
                      className={
                        mode === "dark"
                          ? "text-sm px-4 py-2 rounded-md ring-1 ring-gray-400 hover:bg-gray-700 transition"
                          : "text-sm px-4 py-2 rounded-md ring-1 ring-violet-400 text-violet-700 hover:bg-violet-100 transition"
                      }
                    >
                      Download CV
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={toggleMode}
                  ref={iconRef}
                  onMouseEnter={() => handleMouseEnterTwo()}
                  onMouseLeave={() => handleMouseLeaveTwo()}
                  className="md:flex items-center cursor-pointer hidden"
                  aria-pressed={mode === "dark"}
                  aria-label={
                    mode === "dark"
                      ? "Switch to light mode"
                      : "Switch to dark mode"
                  }
                  tabIndex={0}
                >
                  {mode === "dark" ? (
                    <LightModeIcon sx={{ color: "white" }} />
                  ) : (
                    <DarkModeIcon sx={{ color: "#7c3aed" }} />
                  )}
                </button>
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
                  <DarkModeIcon sx={{ color: "black" }} />
                ) : (
                  <LightModeIcon sx={{ color: "white" }} />
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
                  onClick={() => close()}
                >
                  {item.name}
                </Link>
              ))}

              <a
                href="/Sushan_Bajracharya_Resume.pdf"
                download
                className={classNames(
                  mode === "light"
                    ? "text-gray-700 ring-1 ring-violet-400 hover:bg-violet-100"
                    : "text-gray-100 ring-1 ring-gray-400 hover:bg-gray-700",
                  "block rounded-md px-3 py-2 text-base font-normal text-center mt-2"
                )}
                onClick={() => close()}
              >
                Download CV
              </a>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
