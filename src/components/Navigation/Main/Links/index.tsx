import Link from "next/link";
import { Button } from "@/components/_ui/Button";

interface MainNavProps {
  isAuthenticated: boolean;
  handleSignOut: () => void;
}

export const MainNavLinks = ({ isAuthenticated = false, handleSignOut }: MainNavProps) => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      {isAuthenticated ? (
        <li>
          <Button buttonAction={handleSignOut}>Sign Out</Button>
        </li>
      ) : (
        <li>
          <Link href="/sign-in">Sign In</Link>
        </li>
      )}
    </ul>
  )
}