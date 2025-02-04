import { auth } from '@/auth';
import Link from 'next/link'

export default async function Footer() {
  const session = await auth();

  if (!session) {
    return (
    <footer>
      <p className='bg-slate-900 text-white flex justify-center items-center'>© 2025 βshort</p>
    </footer>
    );
  }
  else {
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
              <Link href="/mental-report">
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

}
