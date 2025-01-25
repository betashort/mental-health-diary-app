import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="w-full h-14 flex justify-between item-center bg-slate-900">
        <Link href="/">
          <h1 className="h-14 ml-4 text-2xl text-white">
            MentalHealthDiary App
          </h1>
        </Link>

        <nav>
          <ul>
            <li className="h-14 mr-4 text-xl text-white">
              <Link href="/tips">Tips</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
