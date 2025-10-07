import Link from "next/link";

export const MainNavLinks = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/sign-in">Sign In</Link>
      </li>
    </ul>
  )
}