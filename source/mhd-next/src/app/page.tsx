import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className=""
          src="/mhd-image.png"
          alt="mhd image"
          width={800}
          height={800}
        />
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
              <tbody>
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
              </tbody>
            </table>
          </div>
        </div>
      </main >
    </div >
  );
}
