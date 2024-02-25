import React from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const menuItems = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "About",
      href: "#",
    },
    {
      name: "Contact",
      href: "#",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="shadow sticky z-50 top-0">
        <div className="relative w-full bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
            <div className="inline-flex items-center space-x-2">
              <Link to="/" className="flex items-center">
                <img
                  src="https://dynamic.brandcrowd.com/asset/logo/d7bad528-5de8-4ed1-9249-b57abe81ba25/logo-search-grid-1x?logoTemplateVersion=2&v=638386470406230000"
                  className="mr-3 w-20 h-16"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="hidden grow items-start lg:flex">
              <ul className="ml-12 inline-flex space-x-8">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-green-900 font-bold" : "text-green-700"
                      } border-b border-green-100 hover:bg-green-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-green-900 font-bold" : "text-green-700"
                      } border-b border-green-100 hover:bg-green-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-green-900 font-bold" : "text-green-700"
                      } border-b border-green-100 hover:bg-green-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/github"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-green-900 font-bold" : "text-green-700"
                      } border-b border-green-100 hover:bg-green-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                    }
                  >
                    Github
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/linkedin"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-green-900 font-bold" : "text-green-700"
                      } border-b border-green-100 hover:bg-green-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                    }
                  >
                    LinkedIn
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="hidden space-x-2 lg:block">
              <Link
                to="#"
                className="text-green-800 hover:bg-green-50 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Log in
              </Link>
              <Link
                to="#"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Get started
              </Link>
            </div>
            <div className="lg:hidden">
              <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
            </div>
            {isMenuOpen && (
              <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="px-5 pb-6 pt-5">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center space-x-2">
                        <Link to="/" className="flex items-center">
                          <img
                            src="https://dynamic.brandcrowd.com/asset/logo/d7bad528-5de8-4ed1-9249-b57abe81ba25/logo-search-grid-1x?logoTemplateVersion=2&v=638386470406230000"
                            className="mr-3 w-20 h-16"
                            alt="Logo"
                          />
                        </Link>
                      </div>
                      <div className="-mr-2">
                        <button
                          type="button"
                          onClick={toggleMenu}
                          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          <span className="sr-only">Close menu</span>
                          <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-4">
                        <ul className="">
                          <li>
                            <NavLink
                              to="/"
                              className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${
                                  isActive
                                    ? "text-green-900 font-bold"
                                    : "text-green-700"
                                } border-b border-green-100 hover:bg-green-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                              }
                            >
                              Home
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/about"
                              className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${
                                  isActive
                                    ? "text-green-900 font-bold"
                                    : "text-green-700"
                                } border-b border-green-100 hover:bg-green-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                              }
                            >
                              About
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/contact"
                              className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${
                                  isActive
                                    ? "text-green-900 font-bold"
                                    : "text-green-700"
                                } border-b border-green-100 hover:bg-green-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                              }
                            >
                              Contact
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/github"
                              className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${
                                  isActive
                                    ? "text-green-900 font-bold"
                                    : "text-green-700"
                                } border-b border-green-100 hover:bg-green-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                              }
                            >
                              Github
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/linkedin"
                              className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${
                                  isActive
                                    ? "text-green-900 font-bold"
                                    : "text-green-700"
                                } border-b border-green-100 hover:bg-green-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                              }
                            >
                              LinkedIn
                            </NavLink>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="mt-5 space-y-2">
                      <Link
                        to="#"
                        className="text-green-800 hover:bg-green-50 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                      >
                        Log in
                      </Link>
                      <Link
                        to="#"
                        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                      >
                        Get started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
