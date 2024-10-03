import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer w-full h-10 absolute bottom-0 bg-slate-900">
        <div className="grid grid-cols-3">
          <div className="h-10 border-r-2 flex justify-center items-center text-white">
            <div className="">
              <Link to="/diary">Diary</Link>
            </div>
          </div>
          
            <div className="h-10 flex justify-center items-center text-white">
            <Link to="/activity-graph">
              <div className="">活動グラフ</div>
              </Link>
            </div>
          
          <div className="h-10 border-l-2 flex justify-center items-center text-white ">
            <div className="">
              <Link to="/feeling-graph">気分グラフ</Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
