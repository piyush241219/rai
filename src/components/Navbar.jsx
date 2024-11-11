import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  // State to control the visibility of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a menu item is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed z-50 left-0 right-0 border-gray-200 navbar">
        <div className=" lg:px-20 flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to="/"
            className="flex  items-center space-x-3 rtl:space-x-reverse"
            onClick={closeMenu} // Close menu on home link click
          >
            <img src="" alt="" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              ReehaAi
            </span>
          </NavLink>
          {/* Button for menu toggle */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {/* Menu items */}
          <div
            className={`w-full   md:block md:w-auto ${isMenuOpen ? '' : 'hidden'}`}
            id="navbar-default"
          >
            <ul className="font-medium text-xl md:gap-5 flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse  md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/user-guide', label: 'User Guide' },
                { to: '/faq', label: "FAQ's" },
                { to: '/feedback', label: 'Feedback' },
                { to: '/contact-us', label: 'Contact Us' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    onClick={closeMenu} // Close menu on link click
                    className={({ isActive }) =>
                      `block py-2 px-3 rounded  ${
                        isActive
                          ? 'text-white underline dark:text-blue-500'
                          : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
