import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="w-full h-16 bg-slate-900 fixed bottom-0">
        <div className="grid grid-cols-3">
          <div className="h-16 border-r-2 flex justify-center items-center text-white">
            <div className="">
              <Link href="/diary">日記</Link>
            </div>
          </div>
          <div className="h-16 flex justify-center items-center text-white">
            <Link href="/mental-health-report">
              <div className="">メンタルヘルスレポート</div>
            </Link>
          </div>
          <div className="h-16 border-l-2 flex justify-center items-center text-white">
            <div className="">
              <Link href="/sns">SNS</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
