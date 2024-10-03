import React from "react";
import MHDImage from "../asset/image/MHD-image.png";
function DashboardPage() {
  return (
    <>
      <div className="w-full h-lvh mb-10">
        <div className="flex justify-center items-center">
          <img src={MHDImage} alt="mental-health-diary-image" />
        </div>
        <div>
          <h2 className="p-2 m-2 text-center bg-slate-700 text-white">
            気分を記録するためのアプリです
          </h2>
          <p className="text-center">
            ＊作成者が個人的に調べた内容です。
            <br />
            ＊開発中です。
            <br />
          </p>
          <h3 className="p-2 m-2 text-center bg-slate-700 text-white">機能</h3>
          <div className="discription pl-2 flex justify-center items-center">
            <table className="">
              <tr>
                <th>機能</th>
                <th>説明</th>
              </tr>

              <tr>
                <td>Diary</td>
                <td>気分を記録します。</td>
              </tr>
              <tr>
                <td>活動グラフ</td>
                <td>活動を数値化してグラフ表示します。</td>
              </tr>
              <tr>
                <td>気分グラフ</td>
                <td>気分を数値化してグラフ表示します。</td>
              </tr>
              <tr>
                <td>Tips</td>
                <td>メンタルヘルスについて調査したことをまとめています。</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
