import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className="w-full h-10 flex justify-between item-center bg-slate-900">
        <h1 className="text-2xl text-white">
        <Link href="/">MentalHealthDiary App</Link>
        </h1>
        <nav>
          <ul>
            <li className="mr-4 text-xl text-white">
              <Link href="/tips">Tips</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
