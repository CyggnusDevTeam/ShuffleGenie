import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-gray-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-white text-2xl font-bold">ShuffleGenie</h1>
          </div>
          <div className="flex items-center">
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-md font-medium"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/sync"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text- font-medium"
                >
                  lorem input
                </Link>
              </li>

              <li>
                <Link
                  to="/help"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text- font-medium"
                >
                  Help
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <button type="button" className="defaultButton">
              HELP
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
