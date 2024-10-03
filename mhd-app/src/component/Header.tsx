import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex justify-between items-center bg-slate-900">
        <h1 className="text-2xl text-white">
          <Link to="/">Mental Health Diary APP</Link>
        </h1>
        <nav>
          <ul>
            <li className="mr-4 text-xl text-white">
              <Link to="/tips">Tips</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
