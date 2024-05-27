"use client"
import { signIn, signOut } from "next-auth/react";

interface User {
  id: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

interface AuthButtonsProps {
  user: User | undefined; // Allow 'undefined' as a valid type for initial load
}
const AuthButtons = ({ user }: AuthButtonsProps) => {
  return (
    <>
      {user ? (
        <li>
          <button onClick={() => signOut({ callbackUrl: "/" })}>Log Out</button>
        </li>
      ) : (
        <li>
          <button onClick={() => signIn()}>Log In</button>
        </li>
      )}
    </>
  );
};

export default AuthButtons;
