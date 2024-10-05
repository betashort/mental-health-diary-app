import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../const/baseUrl";

function Header() {
  return (
    <>
      <div className="w-full h-10 flex justify-between items-center bg-slate-900">
        <h1 className="text-2xl text-white">
          <Link to={BASE_URL}>Mental Health Diary APP</Link>
        </h1>
        <nav>
          <ul>
            <li className="mr-4 text-xl text-white">
              <Link to={BASE_URL+"tips"}>Tips</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
