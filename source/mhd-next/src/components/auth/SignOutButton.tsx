import { signOut } from "@/auth";

export default function SignOutBotton() {
  return (
    <form action={async () => {
      "use server";
      await signOut();
    }}>
      <button type="submit">SignOut</button>
    </form>
  );
}
