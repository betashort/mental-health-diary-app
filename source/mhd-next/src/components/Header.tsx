import { auth } from "@/auth";
import Link from "next/link";
import SignInBotton from "./auth/SignInButton";
import SignOutBotton from "./auth/SignOutButton";

export default async function Header() {
  const session = await auth();
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
              {!session ? <SignInBotton/> : <SignOutBotton/>}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
