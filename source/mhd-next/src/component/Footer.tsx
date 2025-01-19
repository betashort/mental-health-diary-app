import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <div className="footer w-full h-10 bg-slate-900 fixed bottom-0 z-50">
        <div className="grid grid-cols-3">
          <div className="h-10 border-r-2 flex justify-center items-center text-white">
            <div className="">
              <Link href="/diary">日記</Link>
            </div>
          </div>
          
            <div className="h-10 flex justify-center items-center text-white">
            <Link href="/activity-graph">
              <div className="">活動グラフ</div>
              </Link>
            </div>
          
          <div className="h-10 border-l-2 flex justify-center items-center text-white ">
            <div className="">
              <Link href="/feeling-graph">気分グラフ</Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
