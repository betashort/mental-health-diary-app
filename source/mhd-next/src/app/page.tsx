import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="w-full h-lvh mb-10">
        <div className="flex justify-center items-center">
          <Image
            className=""
            src="/mhd-image.png"
            alt="mhd image"
            width={800}
            height={800}
          />
        </div>
        <div>
          <h2 className="p-2 m-2 text-center bg-slate-700 text-white">
            気分を記録するためのアプリです。
          </h2>
          <p className="text-center">
            ＊作成者が個人的に調べた内容です。
            <br />
            ＊開発中です。
            <br />
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
          <div className="flex gap-4 md:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
              </svg>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold md:text-xl">Growth</h3>
              <p className="mb-2 text-gray-500">
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
              </p>
              <a
                href="#"
                className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                More
              </a>
            </div>
          </div>
          <div className="flex gap-4 md:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
              </svg>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Security
              </h3>
              <p className="mb-2 text-gray-500">
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
              </p>
              <a
                href="#"
                className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                More
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
