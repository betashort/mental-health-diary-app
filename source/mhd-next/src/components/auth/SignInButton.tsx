import { signIn } from "@/auth";

export default function SignInBotton() {
  return (
    <form action={async () => {
      "use server";
      await signIn();
    }}>
      <button type="submit">Signin</button>
    </form>
  );
}
