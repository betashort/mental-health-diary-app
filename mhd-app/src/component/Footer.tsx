import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../const/baseUrl";

function Footer() {
  return (
    <>
      <div className="footer w-full h-10 bg-slate-900 fixed bottom-0 z-50">
        <div className="grid grid-cols-3">
          <div className="h-10 border-r-2 flex justify-center items-center text-white">
            <div className="">
              <Link to={BASE_URL + 'diary'}>日記</Link>
            </div>
          </div>
          
            <div className="h-10 flex justify-center items-center text-white">
            <Link to={BASE_URL + 'activity-graph'}>
              <div className="">活動グラフ</div>
              </Link>
            </div>
          
          <div className="h-10 border-l-2 flex justify-center items-center text-white ">
            <div className="">
              <Link to={BASE_URL + 'feeling-graph'}>気分グラフ</Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
