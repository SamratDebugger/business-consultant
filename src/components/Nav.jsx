import { Link } from "react-router";
import NavItems from "./NavItems";
export default function Nav() {
  return (
    <header className="bg-base-200 shadow-sm">
      <div className="navbar max-w-1xl mx-auto px-5 py-0">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavItems />
            </ul>
          </div>
          <a>
            <img
              className="max-w-40"
              src="/assets/images/logo_files/affirm-business-consultant.png"
              alt="logo"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavItems />
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <button className="btn btn-success text-white">Login</button>
          </Link>
        </div>
      </div>
    </header>
  );
}
