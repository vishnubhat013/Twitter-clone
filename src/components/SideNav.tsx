
import Link from "next/link";
import { useSession } from "next-auth/react";
import AuthButtons from "./AuthButtons"


export default async function sideNav() {
  const {data:session} =useSession();
  const user = session?.user
  return (
    <nav className="sticky top-0 px-2 py-4">
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
        <li>
          <Link href="/">Home</Link>
        </li>
        {user != null && (
        <li>
            <Link href={`/profiles/${user.id}`}>Profile</Link>
        </li>
        )}
         <AuthButtons user={user} />
      </ul>
    </nav>
  );
}
