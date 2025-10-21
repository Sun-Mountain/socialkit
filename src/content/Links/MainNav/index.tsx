import Link from 'next/link';

interface MainNavLinksProps {
  isAuthenticated: boolean;
}

export const MainNavLinks = ({ isAuthenticated }: MainNavLinksProps) => {
  return (
    <>
      {isAuthenticated ? (
        <ul>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/settings">Settings</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link href="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link href="/sign-up">Sign Up</Link>
          </li>
        </ul>
      )}
    </>
  );
};