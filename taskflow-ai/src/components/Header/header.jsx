import React, {useState} from 'react'
import { Link, NavLink } from 'react-router'


const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
];

export default function header() {
    const [open, setOpen] = useState(false);
 
    const linkClass = ({ isActive }) =>
        `block py-2 px-3 font-medium duration-200 lg:p-0 hover:text-orange-700 ${
            isActive ? "text-orange-700" : "text-gray-700"
        }`;
  return (
   <>
      <header className="sticky top-0 z-50 bg-white shadow">
            <nav className="mx-auto max-w-screen-xl px-4 py-2.5 lg:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="h-12"
                            alt="Logo"
                        />
                    </Link>
 
                    {/* Desktop links */}
                    <ul className="hidden lg:flex lg:space-x-8">
                        {navItems.map((item) => (
                            <li key={item.to}>
                                <NavLink to={item.to} className={linkClass}>
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
 
                    {/* Buttons + hamburger */}
                    <div className="flex items-center gap-2">
                        <Link
                            to="/login"
                            className="hidden rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 sm:block"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/signup"
                            className="rounded-lg bg-orange-700 px-4 py-2 text-sm font-medium text-white hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300"
                        >
                            Get started
                        </Link>
 
                        <button
                            type="button"
                            onClick={() => setOpen(!open)}
                            className="ml-1 inline-flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden"
                            aria-controls="mobile-menu"
                            aria-expanded={open}
                        >
                            <span className="sr-only">Toggle menu</span>
                            {open ? (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
 
                {/* Mobile menu */}
                <div id="mobile-menu" className={`${open ? "block" : "hidden"} lg:hidden`}>
                    <ul className="mt-4 flex flex-col divide-y divide-gray-100 border-t border-gray-100">
                        {navItems.map((item) => (
                            <li key={item.to}>
                                <NavLink to={item.to} className={linkClass} onClick={() => setOpen(false)}>
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                        <li className="sm:hidden">
                            <Link to="/login" className="block px-3 py-2 font-medium text-gray-700" onClick={() => setOpen(false)}>
                                Log in
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
   
   </>
  )
}
